import React, {useState} from "react";
import Style from 'styled-components';
import { buttonColor, bgColor, borderColor, labelColor, mainFont, loginButtonText } from './styles/variables'
import { UserSession } from 'blockstack';
import { appConfig } from '../config/appConfig.js'


const Login = () => {

    const userSession = new UserSession({ appConfig })


    const handleSignIn = (e) => {
        e.preventDefault();
        userSession.redirectToSignIn();
    }



    const handleSignOut = (e) => {
        e.preventDefault();
        userSession.signUserOut(window.location.origin);
    }

    return (
    <div className ="intro">
        <div className="panel-landing" id="section-1">
            <h1 className="landing-heading">To-Do List</h1>
            <p>A decentralized To-do app built on <a href="https://blockstack.org" target="_blank" rel="noopener noreferrer">Blockstack</a></p>
            <button
                className="btn btn-primary btn-lg"
                id="signin-button"
                onClick={handleSignIn}
            >
                Sign In with Blockstack
          </button>
        </div>
      </div >
    )
}


const LoginContainer = Style.div`
    margin-top: 50px;
    width: 486px;
    height: 326px;
    background: ${bgColor};
    border: 1px solid ${borderColor};
    border-radius: 15px;
    display:flex;
    flex-flow: column nowrap;
    justify-content:center;
    align-items:center;
`
const LoginForm = Style.form`
    width: 395px;
    height: 233px;
    display:flex;
    justify-content:center;
    flex-flow: column nowrap;
`

const LoginInput = Style.input`
    background: ${bgColor};
    border: 1px solid ${labelColor};
    border-radius: 5px;
    width: 395px;
    height: 47px;
`
const LoginLabel = Style.label`
    font-family: ${mainFont};
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 21px;
    margin: 10px 0px;
    color: ${labelColor};
`

const InputContainer = Style.div`
    display:flex;
    justify-content:center;
    flex-flow: column nowrap;
`

const SubmitButton = Style.button`
    margin: 10px 0 0 0;
    width: 145.84px;
    height: 37px;
    background: ${buttonColor};
    border: 5px solid ${buttonColor};
    box-sizing: border-box;
    border-radius: .2rem;
    font-family: ${mainFont};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: ${loginButtonText};
    transition: 1s;
    &:hover{
        cursor:pointer;
        border: 2px solid #4169E1;
    }
`
const LoginHeader = Style.h1`
      font-size: 30px
    font-color: black;
`

export default Login;