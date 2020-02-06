import React from 'react';
import './footer.css';
import './rezo.css'
import email from "../../img/Email.png";
import linkedin from "../../img/linkedin.png"

const FooterComponent = () =>{

    return(
        <footer>
           
            <div className="row">
                <h4 className="newcontact">Contact Us</h4>
            </div>

            <div id="footerSeparator"></div>

            <div className="row">
                <div className="col colDev">
                    <p>Alexis ARCHER</p>
                    <p className="cellphone" >07.61.29.72.72</p>
                    <p className="contactIcons"><a className="iconEmail" href="mailto:Ornellazaidi@gmail.com"><img alt="Icon for contact" src={email}></img></a> <a href="https://www.linkedin.com/in/alexis-archer-151179138/"><img alt="icon for contact"  src={linkedin}></img></a> </p>
                </div>
                
                <div className="col colDev"> 
                    <p>Ornella GRISTI</p>
                    <p className="cellphone">06.40.14.75.49</p>
                    <p className="contactIcons"><a className="iconEmail"  href="mailto:Ornellazaidi@gmail.com"><img alt=""  src={email}></img></a> <a href="https://www.linkedin.com/in/ornella-gristi-5923159b/"><img alt=""  src={linkedin}></img></a> </p>
                
                </div>
                
                <div className="col colDev"> 
                    <p>Florian PLOT</p>
                    <p className="cellphone">06.35.37.79.06</p>
                    <p className="contactIcons"><a className="iconEmail" href="mailto:flouuxi26@gmail.com" ><img alt=""  src={email}></img></a> <a href="https://www.linkedin.com/in/florian-plot/"><img alt=""  src={linkedin}></img></a> </p>
                </div>
                
                <div className="col colDev"> 
                    <p>Dylan BERTHIER</p>
                    <p className="cellphone">06.38.50.82.93</p>
                    <p className="contactIcons"><a className="iconEmail" href="mailto:dylan.berthier13@gmail.Com"><img alt=""  src={email}></img></a> <a href="https://www.linkedin.com/in/dylan-berthier/"><img alt=""  src={linkedin}></img></a> </p>
                </div>
                
                <div className="col colDev"> 
                    <p>Marie Gory</p>
                    <p className="cellphone">06.82.80.80.64</p>
                    <p className="contactIcons"><a className="iconEmail"  href="mailto:marie.gory@gmail.Com"><img alt=""  src={email}></img></a> <a href="https://www.linkedin.com/in/marie-gory/"><img alt=""  src={linkedin}></img></a> </p>
                </div>
            </div>
            <div className="social">
            <ul>
                <li><a href="https://exploration.destination-orbite.net/actualite/index.php">| Actualité de l'ISS |</a></li>
                <li><a href="https://www.facebook.com/ISS">| Facebook |</a></li>
                <li><a href="https://twitter.com/ISS_Research">| Twitter ISS Research |</a></li>
                <li><a href="https://blogs.nasa.gov/spacestation/">| NASA Blog |</a></li>
            </ul>
                    <div id="rezoSeparator"></div>
        </div>
        </footer>
    )
}

export default FooterComponent