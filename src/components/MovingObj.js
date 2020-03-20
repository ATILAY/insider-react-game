import React from 'react';
import {useActions, useDispatch, useSelector} from 'react-redux';


const { useEffect, useState, useRef } = React

const useKey= (key,cb)=>{
   //USING REF FOR HOOKINING CALLBACK
  const callbackRef =  useRef(cb);

  useEffect(()=>{
    //STORE CALLBACK REFERANS TO  REF
    callbackRef.current =cb;
  }); //useE

  useEffect(()=>{
    
    const handleKeyPress = (e)=>{
      //console.log("Working");
      //console.log(String.fromCharCode(e.keyCode));
      if(e.code === key){
        //cb(e){}//cb
        //USING REF FOR HOOKINING CALLBACK
        callbackRef.current(e);
      }//if
    }//handleK
    //LISTEN TO THE KEYBOARD
    document.addEventListener("keydown", handleKeyPress);
    return ()=> document.removeEventListener("keydown", handleKeyPress);
  },[key]); //useEf
  //WHEN KEY CHANGE, RE-RENDER VIA HOOK
    
}//useKey


const MovingObj = () => {
  //BRING REDUX STATES TO USE THEM

  // WEIGHT THE SLIDING OBJECT HORIZONTALLY
  const slideWeight = useSelector(state => state.slide_obj_weight);
  // THE DISTANCE FROM LEFT, WHICH BELONGS TO THE SLIDING OBJECT HORIZONTALLY
  const slideFromLeft = useSelector(state => state.slide_obj_left);
  //CREATE DISPATCH METHOD FOR SPECIFIC REDUX STATE
  const dispatchSlideFromLeft = useDispatch();
   // THE DISTANCE FROM LEFT, WHICH BELONGS TO THE TEETER TOTTER HORIZONTALLY
  const tt_obj_left = useSelector(state => state.tt_obj_left);
  const tt_obj_width = useSelector(state => state.tt_obj_width);

  
//CREATE REF FOR  FALLING OBJ
const divRef = useRef();
  //WHEN RIGHT ARROW PRESSED HANDLE THAT
  const handleRight = ()=>{
    console.log("ArrowRight Pressed");
    if(slideFromLeft < (tt_obj_left + tt_obj_width - 30)){
      dispatchSlideFromLeft({type:'SLIDE', payload: slideFromLeft + 4 });}//if
  }//handleRightLeft
  
  const handleLeft = ()=>{
    console.log("ArrowLeft Pressed");
    dispatchSlideFromLeft({type:'SLIDE', payload: slideFromLeft - 4 });


  }//handleRightLeft
  useKey("ArrowRight",handleRight);
  useKey("ArrowLeft",handleLeft);
  // useEffect(()=>{
  //   console.log("render"); 
  // },[]);
  const divStyle = {
    color: 'blue',
    left: slideFromLeft
  };
  return(
     
      <div
        style={divStyle}
        ref={divRef}
        className="animate kg">
          {/* { ()=>divRef.current.style.left=moveHorizontal+'px'} */}
          {slideWeight}
       </div>
       
    
  );
}
export default MovingObj;
