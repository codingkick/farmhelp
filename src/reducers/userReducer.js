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
        case "PUTDATA":
            console.log("rec at reducer")
            return {
                ...state,
                name:action.payload.name,
                age:action.payload.age,
                reviewAsFarmer:action.payload.reviewAsFarmer,
                reviewasConsumer:action.payload.reviewasConsumer,
                dealsAsFarmer:action.payload.dealsAsFarmer,
                dealsasConsumer:action.payload.dealsasConsumer
            }
        default:
            return state;
    }
}
