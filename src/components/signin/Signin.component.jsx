import React from "react";
import { Forminput } from "../forminput/Forminput.component";
import { Button } from "../button/Button.component";
import "./signin.styles.scss";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";


class Signin extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email : "",
            password : ""
        }
    }

    handleSubmit = async e =>{
        e.preventDefault();

        const {email, password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email , password)
            this.setState({email: "", password: ""})
        } catch (error) {
           console.log(error); 
        }
        
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
                    <div className="button">
                        <Button type="submit" >Sign In</Button>  
                        <Button onClick={signInWithGoogle} isGoogle>Sign In with Google</Button>  
                    </div>
                </form>
            </div>
        )
    }
}

export default Signin;