import { Button } from "@material-ui/core"
import { useState } from "react";

const UserLogin = () =>{

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const loginData = {
            userId: userId,
            password: password
        }
        console.log(loginData)
        setUserId('');
        setPassword('')
    }

    const onUserChangeHandler = (event) => {
        // console.log(event.target.value);
        setUserId(event.target.value);
    }

    const onPasswordChangeHandler = event => {
        // console.log(event.target.value);
        setPassword(event.target.value);
    }

    return(
        <div>
            <form onSubmit = {onSubmitHandler}> 
                <div>
                    <div style = {{padding:'10px'}}>
                        <input type = 'text' placeholder = 'User Id' name = 'userId' onChange = {onUserChangeHandler} value = {userId}/>
                    </div>
                    <div style = {{padding:'10px'}}>
                        <input type = 'Password' placeholder = 'Password' name = 'password' onChange = {onPasswordChangeHandler} value = {password}/>
                    </div>
                    <div style = {{padding:'10px'}}>
                        <Button variant="contained" color = "primary" type = "Submit"> Login </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserLogin;