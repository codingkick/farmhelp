export const changeName = (name) => {
    console.log("hey")
    return {
        type : "CHANGENAME",
        payload:{
            name : name
        }
    }
}
export const putData = (data)=>{
    console.log("receiving")
    return{
        type : "PUTDATA",
        payload : data
    }
}

export const makeDefault = ()=>{
    console.log("sign out default")
    return{
        type: "MAKEDEFAULT"
    }
}