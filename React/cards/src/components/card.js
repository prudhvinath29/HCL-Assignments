import React from 'react'
import './card.css'
 
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
 
import LinearProgress from '@material-ui/core/LinearProgress';
 
function card({title,imageurl,value}) {
    return(
        <div className="card-container">
            <div className="image-container">
                <img src={imageurl}  alt={title} />
            </div>
            <div className="card-content">
                <div className="card-title">
                  <h3>Welcome Back</h3> 
                  <h2>{title}</h2>
                 <button>Upgrade Now</button>
                  </div>
                <div className="card-body">
                <p>Set Up Your Account
                <LinearProgress variant="determinate" value={value} /></p>
                </div>
            </div>
         </div>
    )
}
export default card