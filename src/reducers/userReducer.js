const initialState = {
    name:"maiVKisaan",
    age:0,
    reviewAsFarmer:10,
    reviewasConsumer:10,
    dealsAsFarmer:0,
    dealsasConsumer:0
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