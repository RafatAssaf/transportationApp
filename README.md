# transportationApp
A tool built with React Native as a participation in Public Transportation Hackathon Held by the Ministry of Telecommunication of Jordan. In case you're wondering.. we went 4th place out of 25 teams in the second round 😁👍

![Alt Text](https://media.giphy.com/media/87aIsZynLu46SyzJvC/giphy.gif)

This React Native project is built with Igntie CLI. With the following :
- I used Andross boilerplate with Redux and Redux Saga for managing the app state and all the side effects (asynchronous operations). 
- Following some best practices such as separating the UI logic from the representational code (Containers & Components)
- Organizing all the used APIs (from which I'm getting the bus tracking data shown above) by api-sauce.
- Using react-native-i18n for supporting Arabic (our local language), with the ability to add any other languages easily
- Using react-native-maps (Obviously..)
- All the app-wide settings, theme values, metrics and configs are factored out in organized files to keep the code robust.
- Using immutable data structures for better performance and Ramda for some functional programming.