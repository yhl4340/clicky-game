import React from 'react';
import'./card.css';
function Cards (props) {
    return (
        <div className="card" onClick = {() => props.newFriend(props.id)}>
            <div className="img-container">
              <button><img alt={props.name} src={props.image} clicked={ props.clicked}/></button>
            </div>
      </div>
    
    )
}

export default Cards;