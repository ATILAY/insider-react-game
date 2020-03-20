
import React from 'react';
import TT from "../TT";
import  FallingObj from '../FallingObj'
import  MomentShow from '../MomentShow'

import {useActions, useSelector, useDispatch} from 'react-redux';

const { useEffect, useState, useRef } = React

const restart =()=>{
    window.location.reload(false);
};

const TTContainer = () =>{
    const gameOver = useSelector(state=> state.game_over);
    const dispatchGameOver = useDispatch();
    //const divStyle = null;



        const divStyle = {
            position: 'absolute',
            display: gameOver?'block':'none',
            zIndex: 6,
            height: 200,
            width: 200,
            left: '70%',
            top: '60%',
            color: 'white'
            
          };


 return (
        <div className="ttContainer">
            <MomentShow/>
            <FallingObj/>
            
            <div style={divStyle}>
                <p className="g-o">GAME OVER</p>
                <button onClick={restart} className="btn-res">RESTART</button>
                </div>
            
            <TT/>
        </div>
    )
}//TTCon

export default TTContainer;

// useEffect(() => {
//     const interval = setInterval(() => {
//     console.log('This will run every second!');
//     }, 1000);
//     return () => clearInterval(interval);
//     }, []);

//rect1 ve rect2 degisicek
// const detectCollision=(rect1, rect2) =>{
//     if (rect1.left < rect2.left + rect2.width &&
//     rect1.left + rect1.width > rect2.left &&
//     rect1.top < rect2.top + rect2.height &&
//     rect1.top + rect1.height > rect2.top) {
//         console.log("COLLISION");
//         return true;
//     }
//     return false;
//     }//detectColl