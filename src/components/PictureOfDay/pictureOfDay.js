import React, { Component } from 'react';
import axios from 'axios';
import './pictureOfDay.css';
import {Container, Col, Row} from 'reactstrap'


const urlPicturesAPI = "https://api.nasa.gov/planetary/apod?api_key=dWVA0UjNNsDT9tc2UZ8pC7YVHdCfrcnjrLLVoQbf";

class PictureOfDay extends Component {
     constructor(props){
        super(props)
        this.state={
            urlPictures : []
    }
}     

componentDidMount() {
    axios.get(urlPicturesAPI)
        .then(response => {this.setState({urlPictures: response.data})
        })
        .catch(err => console.log(err))
    }  

    render() {
        return (
            <>
                <Container id="mainContainer" className ="PicBack">
                    <Row>
                        <Col>
                            <h1 className="titlePicture"> Astronomy Picture of the Day </h1>
                            <section className="intro"> Discover the cosmos! <strong>Each day </strong>a different image or photograph of our fascinating universe.</section> 
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <section className= "imgmain">   <img className= "picofday" src={this.state.urlPictures.hdurl} alt={this.state.urlPictures.title}/> </section>
                
                        </Col>
                    </Row>
                        <section className= "explanation"><p> {this.state.urlPictures.explanation} </p></section>
                        
                </Container>
            </>           
        )
    }
}
export default PictureOfDay;