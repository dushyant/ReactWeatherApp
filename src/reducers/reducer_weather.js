import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

    switch(action.type){
        case FETCH_WEATHER:
            // state.push --- will manipulate existing array
            // instead use concat new entry for city will return new array
            // return state.concat([action.payload.data]);
            // instead concate ES6 syntax can be used
            return [action.payload.data, ...state];
    }

    return state;
}