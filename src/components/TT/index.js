import React from 'react';
import {useActions, useSelector, useDispatch} from 'react-redux';

import MovingObj from '../MovingObj'
const { useEffect, useState, useRef } = React


const TT =()=>{
    //GATTING STATE FROM REDUX VIA HOOKS 
    const ttRef = useRef();
    const ttTop = useSelector(state => state.tt_obj_top);
    const dispatchTTINITIAL =  useDispatch();
    const ttRotate = useSelector(state => state.tt_obj_rotate);
    const dispatchROTATE =  useDispatch();
    const fallingObjKiss = useSelector(state => state.falling_obj_kiss);
    const ttWidth = useSelector(state => state.tt_obj_width);
    const tt_obj_left = useSelector(state => state.tt_obj_left);

    const [rotation, setRotation] = useState(-40);
    //const ttWidth = 800;
    //1 deg = 0.0174532925 radyan
    // Math.cos(value) --> value has to be radian unit
    const initialTTtop = 500; //parseInt(ttRef.current.style.top);
    const divStyle = {
        left:  tt_obj_left || 100,
        top: initialTTtop,
        width: ttWidth,
        WebkitTransform : 'rotate('+ttRotate+'deg)'
        //backgroundImage: 'url(' + imgUrl + ')',
      };
      //TEETTOR DISTANCE FROM TOP
    dispatchTTINITIAL({type:'TT_INITIAL', payload:initialTTtop})
    

    return (
        
        <div
        style={divStyle}
        onClick={() => {
            console.log("style_TTdiv ",ttRef.current.style);
         //ttRef.current.style.webkitTransform = `rotate(${rotation}deg)`;
          
        }}
        ref={ttRef} className="tt">
            {/* <FallingObj/> */}
            <MovingObj />
        </div>
        
    )
}//TT

export default TT;