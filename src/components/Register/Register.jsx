import { NavLink } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../Hooks/useAuth";
const Register = () => {
    const { createUser } = useAuth()
    
    const handleCreateUser = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        
        createUser(email, password)
            .then(result => {
                toast('Account Created Succesfully')
            })
            .catch(error => {
                toast(error.message)
                console.log(error)
        })
    }


    return (
        <div className="max-w-screen-xl mx-auto px-2">
            
            <div className="border-2 border-cyan-900  lg:max-w-md mx-auto mt-4 p-2  ">
                <form onSubmit={handleCreateUser} className="flex flex-col gap-3">
                    <h1 className="text-center text-3xl font-bold"> Create a Account</h1>
                    <input name="name" type="name" placeholder="Enter Your name" className="input input-bordered input-info w-full" required />
                    <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered input-info w-full" required/>
                    <input name="password" type="password" placeholder="Enter your Password" className="input input-bordered input-info w-full" required />
                    <button className="btn btn-success w-1/3 mx-auto">Submit</button>
                </form>

                <p className="text-red-400 font-medium"> Forgot Password</p>
                <p className="font-medium">Have a Account? <NavLink to='/login'><span className="btn-primary btn btn-xs">Login</span></NavLink></p>

                <div className="mt-2">
                    <SocialLogin></SocialLogin>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;