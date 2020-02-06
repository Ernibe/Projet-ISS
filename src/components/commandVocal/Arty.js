import React from 'react';
import Artyom from 'artyom.js';
import './VocalCommand.css';

// Import the previously created class to handle the commands from another file
import ArtyomCommandsManager from './ArtyomCommands.js';

// Create a "globally" accesible instance of Artyom
const Jarvis = new Artyom();

class Arty extends React.Component {
    constructor (props, context, ArtyomInstance){
        super(props, context, ArtyomInstance);
        this._artyom = ArtyomInstance
        
        
        // Add `this` context to the handler functions
        this.startAssistant = this.startAssistant.bind(this);
        this.stopAssistant = this.stopAssistant.bind(this);

        // Prepare simple state
        this.state = {
            artyomActive: false,
        };

        // Load some commands to Artyom using the commands manager
        let CommandsManager = new ArtyomCommandsManager(Jarvis);
       
        CommandsManager.loadCommands();
    }

  

    startAssistant() {
        let _this = this;

        console.log("Artyom succesfully started !");

        Jarvis.initialize({
            lang: "en-US",
            debug: true,
            continuous: true,
            soundex: true,
            listen: true,
        }).then(() => {
            // Display loaded commands in the console
            console.log(Jarvis.getAvailableCommands());

            Jarvis.say(`Welcome to I.S.S Viewer, You are about to Discover the international space station `)

            
            _this.setState({
                artyomActive: true
            });
        }).catch((err) => {
            console.error("Oopsy daisy, this shouldn't happen !", err);
        });
    }

    stopAssistant() {
        let _this = this;

        Jarvis.fatality().then(() => {
            console.log("Jarvis has been succesfully stopped");

            _this.setState({
                artyomActive: false
            });
            
        }).catch((err) => {
            console.error("Oopsy daisy, this shouldn't happen neither!", err);

            _this.setState({
                artyomActive: false
            });
        });
    }


    render() {
       
        return (
            <div className="button" >

                
                {/* Voice commands action buttons */}
                
                <input className="buttonVocal" type="button" value="Click Me" disabled={this.state.artyomActive} onClick={this.startAssistant}/>
                <input className="buttonVocal" type="button" value="Stop Me" disabled={!this.state.artyomActive} onClick={this.stopAssistant} />
             
            </div>
        )
    }
}

export default Arty;
