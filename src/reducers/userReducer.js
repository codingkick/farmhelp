const initialState = {
    name:"rahul",
    age:0
}

export const userReducer = (state = initialState,action)=>{
    switch(action.type){
        case "CHANGENAME":
            console.log(action.payload.name)
            return {...state,name:action.payload.name}
        default:
            return state;
    }
}