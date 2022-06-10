export const changeName = (name) => {
    console.log("hey")
    return {
        type : "CHANGENAME",
        payload:{
            name : name
        }
    }
}