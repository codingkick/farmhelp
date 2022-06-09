const initialState = {
    name:null,
    age:0
}

const userReducer = (state = initialState,action)=>{
    switch(action.type){
        case "CHANGENAME":
            return {...state,name:action.payload.name}
    }
}
export default userReducer;