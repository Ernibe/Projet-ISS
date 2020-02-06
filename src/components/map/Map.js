import React, {useState, useEffect, useRef} from 'react'
import L from 'leaflet'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
import axios from 'axios'
import Arty from '../commandVocal/Arty'
import TLEJS from 'tle.js';
import { Cartesian3, Color } from 'cesium'
import { Viewer, Entity, Globe, PolylineGraphics, BillboardGraphics} from 'resium'

import './Map.css'
import Zarya from '../../img/ICONMarker.png'

const tlejs = new TLEJS();

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {savedCallback.current = callback;}, [callback]);

  useEffect(() => {function tick() {savedCallback.current();}
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Map1 = () => {

  const [mapy, setMapy] = useState(true)

  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  const [alti, setAlti] = useState(0)

  const zoom = 4
  let numLat= (lat).toFixed(4)
  let numLong= (long).toFixed(4)
  const positionL= [lat, long]
  const positionR = Cartesian3.fromDegrees(long, lat, alti)

  const icon= L.icon({
    iconUrl: require("./../../img/ICONMarker.png"),
    iconSize: [50,50],
    iconAnchor: [25,25],
  })

  const [orbit, setOrbit] = useState({
    "@id": "https://data.ivanstanojevic.me/api/tle/25544",
    "@type": "TleModel",
    "satelliteId": 25544,
    "name": "ISS (ZARYA)",
    "date": "2019-11-12T14:57:06+00:00",
    "line1": "1 25544U 98067A   19316.62299738  .00004810  00000-0  92183-4 0  9996",
    "line2": "2 25544  51.6451 345.3171 0006141 272.0902 233.9416 15.50005371198285"
  })

  useEffect(() => {
    axios.get('https://data.ivanstanojevic.me/api/tle/25544')
    .then(res => setOrbit(res.data))
  }, [])

  useInterval(() => {
    axios.get('https://api.wheretheiss.at/v1/satellites/25544')
      .then(res => {
        setLat(res.data.latitude); setLong(res.data.longitude); setAlti(res.data.altitude)
      })
      .catch(err => console.log(err))
  }, 3000);

  let tleArr = [orbit.line1, orbit.line2];
  let track = tlejs.getGroundTrackLngLat(tleArr);
  let positions = track[1].map(arr => Cartesian3.fromDegrees(arr[0], arr[1]));

  return (
    <div className='mapBackground' id='mainContainer'>
      {mapy ?
        <>
          <p className='mapStatistics'>latitude : {numLat}° <br/> longitude : {numLong}°</p>
          <Map className="map" center={positionL} zoom={zoom}>
            <TileLayer
              url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <TileLayer
              url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-labels/{z}/{x}/{y}{r}.png"
            />
            <Marker icon={icon}position={positionL}>
              <Popup>ISS is HERE</Popup>
            </Marker>
          </Map>
        </>
        :
        <>
          <p className='mapStatistics'>latitude : {numLat}° <br/> longitude : {numLong}°</p>
          <Viewer className='map' vrButton={false} timeline={false} animation={false} creditContainer={'Boop'} >
            <Globe enableLighting /> 
            <Entity position={positionR} name="ISS (Zarya)">
              <BillboardGraphics image={Zarya} scale={1}/>
              <PolylineGraphics positions={positions} material={Color.RED}/>
            </Entity>
          </Viewer>
          <div id='Boop'></div>
        </>
      }
      <div className='button'><button className='buttonVocal' onClick={() => setMapy(!mapy)}>{mapy? <span className="textbutton">View 3D</span> : <span className="textbutton">View 2D</span>}</button></div>
      <Arty lat={numLat} long={numLong} /> 

    </div>
  )
}

export default Map1