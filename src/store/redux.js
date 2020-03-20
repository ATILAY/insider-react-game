import {createStore} from 'redux'

const initialState = {
    //FALLING OBJ DISTANCE FROM TOP
    falling_obj_top: 0,
    //FALLING OBJ DISTANCE FROM LEFT SIDE
    falling_obj_left: 100, //ARRANGE
    falling_obj_weight: Math.floor(Math.random()*100),
    falling_obj_shape: Math.floor(Math.random() *100)%3,
    falling_obj_speed: Math.random() *10,
    //WHEN THE  FALLING OBJ FACES THE TEETER TOTTER WE CONTROL THEIR STICKNESS WITH KISS
    falling_obj_kiss: 1000,
    //TOOTER TOTTER  MEANS tt_obj
    tt_obj_top: 600,
    tt_obj_left: 50,
    tt_obj_rotate: 1,
    tt_obj_rotate_speed: 50,
    tt_obj_width: 700,
    //SLIDER OBJ MEANS THE DIV THAT YOU CONTROL WITH ARROW KEYS
    slide_obj_top: 600,
    slide_obj_left:500,
    slide_obj_weight: Math.floor(Math.random()*100),
    slide_obj_shape: (Math.random() *10)%3,
    slide_obj_speed: Math.random() *10,


    
    moment: 0,
    forceY_left: 0,
    forceY_right: 0,
    //WHEN NEW OBJ CREATED THIS DATAS BELOG TO ITS
    new_obj_top: 0,
    new_obj_left: 200, //ARRANGE
    new_obj_weight: Math.random() *10,
    new_obj_shape: (Math.random() *10)%3,

    game_over: false



};//in


//CONTROLL THE STATE FLOW   WITH REDUCER
function reducer(state = initialState, {type, payload}){
    switch(type){
        case 'FALL':
            return {
                ...state,
                falling_obj_top: payload
            };
        case 'TOUCH':
            return {
                ...state,
                falling_obj_top: payload
            };
        case 'MOMENT_CALC':
            return {
                ...state,
                moment: payload
            };
        case 'ROTATE':
            return {
                ...state,
                tt_obj_rotate :  payload
            };
        case 'SLIDE':
            return {
                ...state,
                slide_obj_left:payload
            };
        case 'NEW_OBJ_CREATE':
            return {
                ...state,
                
            };
        case 'TT_INITIAL':
            return {
                ...state,
                tt_obj_top:payload
            };
        //KEEP STICK TOGETHER THE DROPPED ELEMENT AND THE TEETER TOTTER AFTER FIRST TOUCHING EACHOTHER 
        case 'KISS':
            return {
                ...state,
                falling_obj_kiss:payload.fallingObjKissNew,
                forceY_left: payload.fallingWeight
            };
        //CALCULATING THE MOMENT OF FORCES
        case 'KISSING_MOMENT':
            return {
                ...state,
                moment:payload
            };
        case 'GAME_OVER':
            return {
                ...state,
                game_over:payload
            };
        default: 
        return state;
    }//sw

}//re


export const store = createStore(
    reducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
);

