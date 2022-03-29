import React from "react";
import {Forminput} from "../forminput/Forminput.component";
import {Button} from "../button/Button.component";
import {auth, creatUserProfileDocument} from "../../firebase/firebase.utils"
import "./sign-up.styles.scss";

class Signup extends React.Component {

    constructor(){
        super();
        
        this.state ={
            displayName :"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }
    handleSubmit = async e =>{ 
        e.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password != confirmPassword){
            alert("passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)

            await creatUserProfileDocument( user, { displayName });

            this.setState({
                displayName :"",
                email:"",
                password:"",
                confirmPassword:""
            })
            
        } catch (error){
            console.log(error);
        }
    }

    handleChange = e =>{
        const {name, value} = e.target;

        this.setState({[name] : value});
    }
    render(){

        const {displayName, email, password, confirmPassword} = this.state;

        return(
            <div className="sign-up">

                <h2 className="title">I do not have a account</h2>
                <span>Sign up with Email and Password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>

                    <Forminput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="DISPLAY NAME" required/>
                    <Forminput type="email" name="email" value={email} onChange={this.handleChange} label="EMAIL" required/>
                    <Forminput type="password" name="password" value={password} onChange={this.handleChange} label="PASSWORD" required/>
                    <Forminput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="CONFIRM PASSWORD" required/>

                    <Button type="submit">SIGN UP</Button>

                </form>

            </div>
        )
    }
}

export default Signup;