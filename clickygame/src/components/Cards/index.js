import React from 'react';
import'./card.css';
function Cards (props) {
    return (
        <div onClick = {()=> props.newFriend(props.id)} className="card" >
            <div className="img-container">
              <img alt={props.name} src={props.image} id={props.id}/>
            </div>
      </div>
    
    )
}

export default Cards;