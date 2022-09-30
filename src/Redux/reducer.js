import {DATA_SUCCESS} from "./action";

// initState of the Store
const initState = {
    mainData : [] ,
    dataAvailable : false ,
}

// DataReducer Update the Store
export const dataReducer = (store=initState , {type , payload}) => {
    switch(type){
        case DATA_SUCCESS:
            return{
                ...store ,
                mainData:[...payload] ,
                dataAvailable : true ,
            }
        default:
            return store;
    }
}
