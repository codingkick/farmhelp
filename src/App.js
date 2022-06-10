import './App.css';
import {useSelector,useDispatch} from "react-redux";
import { NameForm } from './components/NameForm';
import { useState } from 'react';

function App() {
  const myState1 = useSelector((state)=>state.userReducer);
  console.log("state::"+myState1.name);
  



  return (
    <div>
      hello guys!!
      <NameForm></NameForm>
    </div>
  );
}

export default App;
