import { NavLink } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";

const Login = () => {
    const [succes,setSucces]=useState('')
    const { signInWithEmail } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setSucces('');
        signInWithEmail(email, password)
            .then(result => {
                setSucces('Login successful')
                console.log(result)
            })
            .catch(error => {
                setSucces('Login Failed !!')
        })
    }

    return (
        <div className="max-w-screen-xl mx-auto px-2">
            
            <div className="border-2 border-cyan-900  lg:max-w-md mx-auto mt-4 p-2">
                <form onSubmit={handleLogin} className=" flex flex-col gap-3">
                    <h1 className="text-center text-3xl font-bold"> Please Login</h1>
                    <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered input-info w-full" />
                    <input name="password" type="password" placeholder="Enter your Password" className="input input-bordered input-info w-full" />
                    <button name="submit" className="btn btn-success w-1/3 mx-auto">Login</button>
                </form>
                <p className="text-red-400 font-medium"> Forgot Password</p>
                <p className="font-medium">New here? <NavLink to='/register'><span className="btn-primary btn btn-xs">Register</span></NavLink></p>

                <div className="mt-4">
                    <SocialLogin></SocialLogin>
                </div>
                {
                    succes && <p className="font-medium text-blue-800">{ succes}</p>
                }
            </div>
        </div>
    );
};

export default Login;