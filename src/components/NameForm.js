//just learning form handling

import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useState,useEffect } from 'react';
import { changeName } from '../actions/index';

export const NameForm = () => {
    const dispatch = useDispatch();
    const myState = useSelector((state)=>{return state.userReducer});
    const [userName, setuserName] = useState(myState.name);
    console.log(userName);
    const [age, setage] = useState(myState.age);
    const changeNameFunc = (event)=>{
        setuserName(event.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(changeName(userName));

    }
    // useEffect(() => {
    //   console.log("use effect is running");
    // }, [userName])
    

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="user" value={userName} onChange={changeNameFunc}></input><br/>
            <input type="number" name="age" value={age} onChange={(e)=>setage(e.target.age)}></input><br/>
            <button type="submit" name="submitBtn">Click Here!!</button>
        </form>
    </div>
  )
}
