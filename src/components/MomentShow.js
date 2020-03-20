import React from 'react';
import {useActions, useSelector, useDispatch} from 'react-redux';
const { useEffect, useState, useRef } = React

const MomentShow = ()=>{
    const moment = useSelector(state => state.moment);

    return (
    
        <p className="moment-show">Moment Now: {moment}</p>
      
    );
}//M

export default MomentShow;
