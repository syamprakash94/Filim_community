import React from "react";
import "./Admindashboard.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import {faRecycle,Font} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Admindashboard = () => {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Dashboard</title>
      </head>
      <body>
        <section id="menu">
          <div className="logoandimage">
            <img className="logo" src="https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="uuu" />
            <h2>Dynamic</h2>
          </div>
          <div className="items">
            
            <li><i><FontAwesomeIcon icon={faCoffee}/></i></li>
            <li><i><FontAwesomeIcon icon={faCoffee}/></i></li>
            <li><i><FontAwesomeIcon icon={faCoffee}/></i></li>
            <li><i><FontAwesomeIcon icon={faCoffee}/></i></li>
            <li><i><FontAwesomeIcon icon={faCoffee}/></i></li>
            <li><i><FontAwesomeIcon icon={faCoffee}/></i></li>

          </div>
         
        </section>
      </body>
    </div>
  );
};

export default Admindashboard;
