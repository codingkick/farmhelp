export const changeName = (name) => {
    return {
        type : "CHANGENAME",
        payload:{
            name : name
        }
    }
}