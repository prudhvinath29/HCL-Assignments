import React from 'react'
import './card.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
 
function card({title,imageurl,body}) {
    return(
        <div className="card-container">
            <div className="image-container">
                <img src={imageurl} alt={title} />
            </div>
            <div className="card-content">
                <div className="card-title">
                  <h3>{title}</h3>
                </div>
                <div className="card-body">
                <p>{body}</p>
                </div>
            </div>
          <div className="btn">
          <span className="btn1">
            <FavoriteIcon/>
          </span>
          <span className="btn2">
            <CommentIcon/>
          </span>
          <span className="btn3">
            <ShareIcon/>
          </span>
          </div>
        </div>
    )
}
export default card