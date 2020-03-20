import React from 'react';
import {useActions, useSelector, useDispatch} from 'react-redux';
import {NewObjCreateAction, SlideAction, RotateAction, MomentCalcAction, TouchAction, FallAction} from "../../store/redux";
const { useEffect, useState, useRef } = React

let randomArr = [1,1,1];
randomArr = randomArr.map(arg =>{return parseInt(arg*((Math.random()*100/3)%10))} );
console.log('RANDOMARR',randomArr);
const randomNum = Math.floor(Math.random() * 10) + 1;
//const [randomObjWeight, setRandomObjWeight] = useState([...randomArr]);

const  renderShape= ()=>{

switch (randomNum%4) {
case 3:
    return "dot falling";
case 2:
    return "oval falling";
case 1:
    return "rectangle falling";
default:
    return "rectangle falling";
}
};//renderS

//element.current.clientHeight

//const elemRender = renderShape();
// const Falling = (element,cb) => {
//     //
     
//     const callbackRef =  useRef(cb);

//     useEffect(()=>{
        
//         callbackRef.current =cb;
//     }); //useE

//     //
//     //element.current.style.top = fallingfromTop;

// }//Fallin
  




const FallingObj = (props)=>{
    //REDUX STATES  VIA HOOKS DISPATCHING TO UPDATE STATE AND USESELECTOR TO GET STATE TO USE
    const fallingfromTop = useSelector(state => state.falling_obj_top);
    const dispatchFall =  useDispatch();
    const dispatchTouch =  useDispatch();
    const ttTop = useSelector(state => state.tt_obj_top);
    const ttRotate = useSelector(state => state.tt_obj_rotate);
    const fallingObjKiss = useSelector(state => state.falling_obj_kiss);
    const dispachKiss = useDispatch();
    const fallingFromLeft = useSelector(state=> state.falling_obj_left);
    const fallingWeight = useSelector(state => state.falling_obj_weight);
    const forceY_left = useSelector(s => s.forceY_left);
    const slide_obj_weight =useSelector(s => s.slide_obj_weight);
    const ttWidth = useSelector(state => state.tt_obj_width);
    const slide_obj_left = useSelector(state => state.slide_obj_left);
    const dispatchKissingMomentCalc = useDispatch();
    const moment = useSelector(state => state.moment);
    const dispatchRotate = useDispatch();
    const slideWeight = useSelector(state => state.slide_obj_weight);
    const slideFromLeft = useSelector(state => state.slide_obj_left);
    const tt_obj_left = useSelector(state => state.tt_obj_left);
    const dispatchGameOver = useDispatch();



    //REFERANCE TO CREATED DIV TO MANAGE IT
    const element = useRef();
    //REFERANCE TO INTERVAL TO MANAGE IT
    const intervalRef = useRef();
    //FOR  DYNAMIC VISUALITY VIA REDUX STATES BELOW
    const divStyle = {
        left: fallingFromLeft,
        top: fallingfromTop,
      
      };

      //HANDLE THE FALLING OBJ WHILE  ITS FALLING
      const handleFromTop = ()=>{ 

        if(ttTop> fallingfromTop+20 && fallingfromTop !== fallingObjKiss ){
        dispatchFall({ type:'FALL', payload: fallingfromTop+5 })
           }else{
            //dispatchTouch({ type:'ROTATE', payload: 40 });
            //GAME OVER ROTATION DEGREES
            if(ttRotate <50 && ttRotate >-50){

              if(moment <= 0) dispatchRotate({ type:'ROTATE', payload: ttRotate - 0.3 });
              if(moment > 0) dispatchRotate({ type:'ROTATE', payload: ttRotate + 0.3 });
          }else{
            dispatchGameOver({ type:'GAME_OVER', payload: true });
          }//if else
            //const ttWidth = 800;
            //1 deg = 0.0174532925 radyan
            const ttRotateRadian = ttRotate * 0.0174532925;
            // Math.cos(value) --> value has to be radian unit
            const fallingObjKissNew = ttTop - ttWidth* Math.sin(ttRotateRadian) / 2;
            dispachKiss({type:'KISS', payload: {fallingObjKissNew, fallingWeight} });
            const cosRadianian = Math.cos(ttRotateRadian);
            //const instantMoment =  (slide_obj_weight * slide_obj_left )-(forceY_left + slide_obj_weight)*(fallingFromLeft +cosRadianian* ttWidth / 2);
            const instantMoment = slideWeight * slideFromLeft - forceY_left * (tt_obj_left + ttWidth/2 - fallingFromLeft);
            const parsedMoment = parseInt(instantMoment);
            dispatchTouch({ type:'TOUCH', payload: fallingObjKissNew });
            dispatchKissingMomentCalc({ type:'KISSING_MOMENT', payload: parsedMoment });
            
              console.log("moment::",moment);
              
           

            
           }//else
      //}//while
      
    }//handle
    
    
    useEffect(() => {
         intervalRef.current = setInterval(() => {
          //element.current.style.top = `${fT}px`;
          //console.log("ELEM",element.current.style);
          //setfallingfromTop(fallingfromTop :fallingfromTop + 1);
          
          handleFromTop();
          
          //console.log(divStyle.top);
          //callbackRef.current();
        }, 50);
        return () => clearInterval(intervalRef.current);
      }, [fallingfromTop]);


      // button TAG onClick{()=>clearInterval(intervalRef.current)}
    return (
        <>
           <div style ={divStyle} className={ renderShape()} ref={element}>
             <p className="kg">{fallingWeight}</p>
             </div>
        </>
    );

}//FallingObj

export default FallingObj;