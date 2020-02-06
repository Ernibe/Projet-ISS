import React from 'react';
import Iframe from 'react-iframe';
import './Minigame.css'

class MiniGame extends React.Component {
    render() {
        return (
            <>
                <div className='miniGames embed-responsive-16by9' id='mainContainer'>
                    <Iframe className='player'src="https://arcade.giphy.com/playlist/LrKxoExY9YgaVeR6pxn" 
                    width="800" height="600" scrolling='no' frameborder="0" style="border: 0 none transparent" allowfullscreen=""/>
                </div>
            </>
        )
    }
}
    
export default MiniGame;