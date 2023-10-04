import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAuth from "../Hooks/useAuth";
const SocialLogin = () => {

    // destructure authentications
    const { googleLogin } = useAuth();

    // click handler to call the authentication

    const handleSocialLogin = (media) => {
        media()
            .then(result => {
                toast('login successfull')
            })
            .catch(error => {
                toast('login failed');
        })
    }

    return (
        <div>
            <div className="flex gap-4 flex-col">
                <div onClick={()=>handleSocialLogin(googleLogin)}  className="flex btn">
                    <p>Log in with Google</p>
                    <FcGoogle className="text-3xl"></FcGoogle>
                </div>
                <div className="flex btn bg-green-800 text-white">
                    <p>Log in with BsFacebook</p>
                    <BsFacebook className="text-3xl"></BsFacebook>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default SocialLogin;