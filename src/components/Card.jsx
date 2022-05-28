import React from 'react';

function Card({ jugador, index, handleClick }) {
    return (
        <div class="card" onClick={() => handleClick(index)}>
            <div className="img-container">
                <img src={jugador.imgSrc} alt="" />
            </div>
            <h2>{jugador.nombre}</h2>
        </div>
    );
}

export default Card;