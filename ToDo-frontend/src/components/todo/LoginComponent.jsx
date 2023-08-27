import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./security/AuthContext"

function LoginComponent() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const navigate = useNavigate();
    const authContext = useAuth()

    function handleUsernameChange(event) {
        //console.log(event)
        //console.log(event.target.value)
        setUsername(event.target.value)
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if(authContext.login(username, password)){
           // authContext.setAuthenticated(true)
            navigate(`/welcome/${username}`)
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
        } else {
            //authContext.setAuthenticated(false)
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    // function SuccessMessageComponent() {
    //     if (showSuccessMessage)
    //         return <div className="SuccessMessage">Authenticated Successfully!!</div>
    //     return null
    // }  true && "Output">>Output


    // function ErrorMessageComponent() {
    //     if (showErrorMessage)
    //         return <div className="ErrorMessage">Authentication Failed!!. Check your Credentials carefully!!</div>
    //     return null
    // } false && "Output">>false

    return (
        <div className="Login">
            <h1>Time To Login!</h1>
            {showSuccessMessage && <div className="SuccessMessage">Authenticated Successfully!!</div>}
            {showErrorMessage && <div className="ErrorMessage">Authentication Failed!!. Check your Credentials carefully!!</div>}
            <div className="LoginForm">
                <div>
                    <label>Username: </label>
                    <input type="text" name="username" placeholder="Enter a Username here" value={username} onChange={handleUsernameChange}></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" placeholder="Enter password here" value={password} onChange={handlePasswordChange}></input>
                </div>
                <div className="ForgetPassword" >
                    <a href="Forget Password">Forget your Password?</a>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>


            </div>
        </div>
    )

}
export default LoginComponent