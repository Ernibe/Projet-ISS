import React from 'react';
import Iframe from 'react-iframe';
import './Live.css';

class Live extends React.Component {
    render() {
        return (
            <>
          
                <div className='liveBackground' >
                    <Iframe className='responsive' width="800" height="600" margin="auto" src="https://ustream.tv/embed/17074538"
                    scrolling="no" allowfullscreen="" frameborder="0" style="border: 0 none transparent;" />
                </div>
        
            </>
        )
    }
    }
    
export default Live;