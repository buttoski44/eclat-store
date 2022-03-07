import React from "react";
import { Forminput } from "../forminput/Forminput.component";
import { Button } from "../button/Button.component";
import "./signin.styles.scss";



class Signin extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email : "",
            password : ""
        }
    }

    handleSubmit = e =>{
        e.preventDefault();

        this.setState({email: "", password: ""})
    }

    handleChange = e =>{
        const {value , name} = e.target;

        this.setState({ [name]: value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have account</h2>
                <span>Sign in with your Gmail and Password</span>

                <form action="" onSubmit={this.handleSubmit}>
                    <Forminput label="EMAIL" type="email" name="email" value={this.state.email} handleChange={this.handleChange} required />
                    <Forminput label="PASSWORD" type="password" name="password" value={this.state.password} handleChange={this.handleChange} required/>
                    <Button type="submit" Children="SIGN IN"/>   
                </form>
            </div>
        )
    }
}

export default Signin;