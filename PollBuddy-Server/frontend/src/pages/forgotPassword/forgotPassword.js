import React, { Component } from 'react';
import './forgotPassword.scss'
import { MDBContainer } from 'mdbreact';
import 'mdbreact/dist/css/mdb.css';

import Header from "../../components/header/header.js"

export default class pollCode extends Component {

    componentDidMount(){
        document.title = "Forgot Password - " + document.title;
    }

    render() {
        return (
    		<MDBContainer fluid className="forgot-homepage">
    			<Header title = "forgot password" btn = "login" />
                <MDBContainer fluid className="forgot-box">
                    <h1 class="forgot-text">
                        Forgot Password?
                    </h1>
                    <p class="forgot-blurb">
                        Enter your email and we will send you a reset.
                    </p>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Enter Email" class="enterEmail"/>
                    </div>
                    <button class = "btn email-button">Reset Password</button>
                </MDBContainer>
    		</MDBContainer>
    	)
	}
}
