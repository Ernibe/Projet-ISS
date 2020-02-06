import React from 'react';
import Iframe from 'react-iframe';
import './Streetview.css';

class IssView extends React.Component {
    render() {
        return (
            <>
                <div className='StreetviewBackground'>
                    <Iframe className='issView' src="https://www.google.com/maps/embed?pb=!4v1571739319850!6m8!1m7!1stbwl7TvVSqgAAAQvxgbyLA!2m2!1d29.56046375678572!2d-95.08529360095413!3f207.96!4f-2.6599999999999966!5f0.5970117501821992" 
                    width="800" height="600" margin="auto" frameborder="0" style="border:0;" allowfullscreen=""/>
                </div>
            </>
        )
    }
    }
    
export default IssView;