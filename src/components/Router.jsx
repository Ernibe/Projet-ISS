import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IssView from './streetview/Streetview';
import Live from './live/Live';
import Minigame from './minigame/Minigame'
import gamePlanet from './glossary/gamePlanet'
import pictureOfDay from './PictureOfDay/pictureOfDay'
import Quizz from './quiz/Quiz'
import Map1 from './map/Map';
import FooterComponent from './footer/footer';
import Navbar from './navbar/Navbar';

class Router extends React.Component {

    render(){
        return(
            <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Map1} />
                <Route exact path="/Glossary" component={gamePlanet} />
                <Route exact path="/IssView" component={IssView} />
                <Route exact path="/Live" component={Live} />
                <Route exact path="/Minigame" component={Minigame} />
                <Route exact path="/pictureOfDay" component={pictureOfDay} /> 
                <Route exact path="/Quiz" component={Quizz} />
            </Switch>
            <FooterComponent/>
            </>
        );
    }
}
export default Router;