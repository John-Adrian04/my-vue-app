Answer:

1. Why is mental health data sensitive?

Mental health data is private because it reveals your inner thoughts, feelings, and struggles. Unlike knowing someone’s favorite food, knowing their mental state can make them feel exposed or vulnerable. If this data were leaked, it could lead to social stigma or cause problems with jobs and insurance, as people might judge or treat the person differently based on their private health history.

2. Ethical risks of AI wellness apps

One big risk is over-reliance: people might think the AI is a real doctor and follow its advice even if it's wrong, which is dangerous during a crisis. Another risk is bias: if the AI isn't programmed correctly, it might give bad or insensitive advice to people from different cultures. Lastly, there is a risk of data mining, where companies might track when you are sad just to show you ads for things to buy.

3. How to protect user data

To keep data safe, we use encryption, which scrambles the information so only the right people can read it. We should also use anonymization, which means removing names and IDs so that even if someone sees the data, they don’t know who it belongs to. Finally, we should use strict access controls unlike our lab where we opened the database to everyone, a real app only lets authorized servers connect.

4. Improvements for production

For a real-world (production) app, the first change is to hide passwords. We shouldn't put them directly in the code (like we did in server.js); instead, we should use "Environment Variables". We also need input validation to make sure users can’t type malicious code into the "Nike" box to break the database. Finally, the app should have a clear privacy policy so users know exactly how their data is being used.