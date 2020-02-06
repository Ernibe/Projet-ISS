import React from 'react'
import Geocode from 'react-geocode';
import Axios from 'axios';


const API_KEY = 'AIzaSyAnCIhSfSm3caYWE7RJknN_sd4HinJ9f6I'

// ArtyomCommands.js
export default class ArtyomCommandsManager extends React.Component {
    // The ArtyomCommandsManager class expects as argument in the constructor
    // an already declared instance of Artyom.js
    constructor(ArtyomInstance, props) {
        super(ArtyomInstance, props)
        this._artyom = ArtyomInstance;
        this.state = {
            lat: 0,
            long: 0,
        }
    }
    
    // Execute the loadCommands method to inject the methods to the instance of Artyom
    loadCommands(){
        let Artyom = this._artyom;

        // Here you can load all the commands that you want to Artyom
        return Artyom.addCommands([
            {
                indexes: ["Hello", "Hi"],
                action: () => {
                    Artyom.say("Hey, you");
                }
            },
            {
                indexes: ["latitude"],
                action: async () => {
                        let long, lat
                    await Axios.get('https://api.wheretheiss.at/v1/satellites/25544')

                        .then(res => {
                            lat = res.data.latitude;
                            long = res.data.longitude;
                        })
                    Artyom.say(`${lat}`);
                }
            },
            {
                indexes: ["longitude"],
                action: async () => {
                        let long, lat
                    await Axios.get('https://api.wheretheiss.at/v1/satellites/25544')

                        .then(res => {
                            lat = res.data.latitude;
                            long = res.data.longitude;
                        })
                    Artyom.say(`${long}`);
                }
            },
            {
                indexes: ["spaceship"],
                action: async () => {


                    let long, lat;

                    await Axios.get('https://api.wheretheiss.at/v1/satellites/25544')

                        .then(res => {
                            lat = res.data.latitude;
                            long = res.data.longitude;
                        })
                    console.log(lat, long)

                    Geocode.setApiKey(API_KEY)

                     Geocode.fromLatLng(`${lat}`, `${long}`)
                        .then(
                            response => {
                                const address = response.results[0].formatted_address;
                                console.log(address)
                                Artyom.say(`ISS is actually flying over ${address}`)
                            }
                        )
                    .catch(err => console.log(err));

                }
            }, 
            {
                indexes: ["Who's the best"],
                action: () => {
                    Artyom.say("it seems to me that it's the develloppers who created you");
                }
            },           
        ]);
    }
    render() {

        return null
    }
}