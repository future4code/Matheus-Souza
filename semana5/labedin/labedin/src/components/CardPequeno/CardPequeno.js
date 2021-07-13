import React from 'react';

function CardPequeno (props){
    return(
        <div>
            <p>{props.email}</p>
            <p>{props.endereço}</p>
        </div>
    )
}

export  default CardPequeno;