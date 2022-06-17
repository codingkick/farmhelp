import React from 'react'
import './login.css'
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
export const Login = () => {
    const auth = getAuth();
    const history = useHistory();
    const provider = new GoogleAuthProvider();

        const popup = ()=>{
            signInWithPopup(auth, provider)
                    .then((result) => {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        const credential = GoogleAuthProvider.credentialFromResult(result);
                        const token = credential.accessToken;
                        // The signed-in user info.
                        const user = result.user;
                        // ...
                    }).catch((error) => {
                        // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // The email of the user's account used.
                        const email = error.customData.email;
                        // The AuthCredential type that was used.
                        const credential = GoogleAuthProvider.credentialFromError(error);
                        // ...
                    });

        }
      
        useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  const uid = user.uid;
                  console.log("uid"+uid);
                } else {

                    popup();
                }
                history.push("/uid");
              });
              
        }, [])
        
  return (
    <div>
        <img className="wave" src="https://i.postimg.cc/sDG8zyXM/wave.png"/>
        <div className="container">
        <div className="img">
            <img src="https://svgshare.com/i/JcM.svg"/>
        </div>
        <div className="login-content">
            <form>
            <img src="https://svgshare.com/i/Jcf.svg"/>
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
                <div className="i">
                <i className="fas fa-user"></i>
                </div>
                <div className="div">
                <input type="text" className="input" placeholder="Username"/>
                </div>
            </div>
            <div className="input-div pass">
                <div className="i">
                <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                <input type="password" className="input" placeholder="Password"/>
                </div>
            </div>
            <a href="#">Forgot Password?</a>
            <input type="submit" className="btn" value="Login" onClick={popup}/>
            </form>
        </div>
        </div>
        {/* google login button */}
        {/* <button type="button" className="login-with-google-btn" >
        Sign in with Google
        </button>

        <button type="button" className="login-with-google-btn" disabled>
        Sign in with Google
        </button> */}
    </div>
  )
}
