import React, {useState} from "react";
const RegistrationPage = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSignUpClick = () => {
        console.log(name, email, password)
    }

    return (
        <div className="col-sm-6 offset-sm-6">
            <h1>User Sign Up</h1>
            <input type="text" value={name} onChange={(name)=>setName(name.target.value)} className="form-control"></input>
            <br/>
            <input type="text" value={email} onChange={(email)=>setEmail(email.target.value)} className="form-control"></input>
            <br/>
            <input type="password" value={password} onChange={(password)=>setPassword(password.target.value)} className="form-control"></input>
            <br/>
            <button onClick={onSignUpClick} className="btn btn-primary">Sign Up</button>
        </div>
    )
}

export default RegistrationPage;