import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    return(
        <div classname='container'>
            <div className="form-container">
                <div className="form-toggle">
                    <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>SignUp</button>
                    <button onClick={() => navigate("/productivity")}>new</button>
                    <button onClick={() => navigate("/form")}>n</button>
                    <button onClick={() => navigate("/mantine")}>f</button>
                </div>
                {isLogin ? <div className="form">
                    <h2>Login Form</h2>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder="Password"/>
                    <a href="#">Forgot Password?</a>
                    <button onClick={() => navigate("/todo")}>Login</button>
                    <p>Not a Member? <a href="#" onClick={() => setIsLogin(false)}>SignUp now</a></p>
                </div> : <div className="form">
                    <h2>SignUP Form</h2>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder="Password"/>
                    <input type='password' placeholder="Confirm Password"/>
                    <button onClick={() => navigate("/todo")}>SignUp</button>
                    </div>}
            </div>
        </div>
    )
}

export default AuthForm;