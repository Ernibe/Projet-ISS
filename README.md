# ISS SPACESHIP VIEWER    

# Deployement : [netlifyURL](https://iss-spaceship-viewer.netlify.com/)

> A Node/React Js website

`ISS-SPACESHIP-VIEWER` is a dynamic web application that includes 2D and 3D maps to see the position of the ISS. We also added some more functionality like Google street view of the inside, a live cam who film from it the earth, a quiz about the life onboard, a glossary of all the stars of the solar system, and pictures of the space who changes all days.This website is also usable by blind people with a vocal command who can tell where ISS is and some others informations.

It was created by 5 persons of the Wild Code School Marseille, Ornella Gristy, Mary Gory, Florian Plot, Alexis Archer, Dylan Berthier, and everyone is welcome to use it.
It's our second project since we start coding, and we are very proud of it.


## Structure

- `/app.js` Application entry point, rooter configuration
- `components/Router.js` Allows to change component without refresh pages
- `components/navbar/Navbar.js`Head of page, components links in routers
- `components/map/Map.js` 2D Map with ISS localisation
- `component/cesium/Resium.js` 3D Map with ISS localisation and his orbit 
- `components/bouton/Arty.js` Initialisation of the vocal command
- `components/bouton/ArtyomComander.js` Parameters of the vocal command
- `components/live/Live.js` Iframe of a live vue from ISS
- `components/streetview/Streetview.js` Iframe of the ISS streetview by Google
- `components/pictureOfDay/PictureOfDay.js` Every day new space pic from NASA
- `components/gamePlanet/gamePlanet.js` Glossary of stars sort by letter
- `components/quiz/Quiz.js`Quiz call
- `components/quiz/QuizData.js`Quiz data
- `components/miniGame/MiniGame.js`Iframe of ghify and Nasa mini retro games
- `components/footer/Footer.js`End of the page, contact
- `components/footer/SocialMedia.js`End of the page, social networks links


## Dependencies

- [React.JS](https://reactjs.org/)
- [Node.JS](https://nodejs.org/)
