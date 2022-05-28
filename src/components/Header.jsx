import React from 'react';
import Scoreboard from './Scoreboard';

function Header({ score, highScore }) {
    return (
        <header>
            <div className='logo-container'>
                <h1>Estudiantes Memory</h1>
                <img height={80} src="https://1.bp.blogspot.com/-bh9WZswR69c/XiOu25n3psI/AAAAAAABXD0/lCjn3LuyeRgQzWwdYJD9ZRO1X1nOweblACLcBGAsYHQ/s1600/Club%2BEstudiantes%2Bde%2BLa%2BPlata256x.png" alt="" />
            </div>
            <Scoreboard score={score} highScore={highScore} />
        </header>
    );
}

export default Header;