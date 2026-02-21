<template>
  <div class="home">
    <h1>System Verification: Mood & Products</h1>
    
    <div class="entry-section">
      <h3>Submit a New Entry</h3>
      <input v-model="newItemName" placeholder="Product Name" />
      <input v-model.number="newItemPrice" type="number" placeholder="Price" />
      
      <div style="margin: 10px 0;">
        <input type="checkbox" id="consent" v-model="hasConsented" />
        <label for="consent"> I agree to let this app store my data in the cloud.</label>
      </div>

      <button :disabled="!hasConsented" @click="submitEntry">Submit to Cloud DB</button>
    </div>

    <div v-if="aiMessage" class="ai-box" style="background: #e3f2fd; padding: 10px; margin: 10px 0;">
      <h4>AI Assistant Response:</h4>
      <p>{{ aiMessage }}</p>
    </div>

    <h3>Current Database Records (Aiven)</h3>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }}: ${{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() { 
    return { 
      products: [], 
      newItemName: "", 
      newItemPrice: null, 
      aiMessage: "",
      hasConsented: false // Extra Credit variable
    }; 
  },
  methods: {
    async fetchData() {
      const res = await fetch('https://my-vue-api.onrender.com/api/products');
      this.products = await res.json();
    },
    async submitEntry() {
      if (!this.newItemName || !this.hasConsented) return;
      this.aiMessage = "AI is saving your data...";
      
      const res = await fetch('https://my-vue-api.onrender.com/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: this.newItemName, price: this.newItemPrice })
      });

      if (res.ok) {
        this.aiMessage = "AI Response: Entry saved! Syncing database...";
        this.newItemName = ""; 
        this.newItemPrice = null;
        this.hasConsented = false; // Reset checkbox after submit
        await this.fetchData(); 
      }
    }
  },
  mounted() { this.fetchData(); }
};
</script>