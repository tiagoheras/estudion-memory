import React, { useEffect } from 'react';

function Scoreboard({score, highScore}) {
    return (
        <div id='scoreboard'>
            <h3>Max: {highScore}</h3>
            <h3>Score: {score}</h3>
        </div>
    );
}

export default Scoreboard;