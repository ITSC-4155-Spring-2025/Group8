import LoginForm from '../components/LoginForm';
import SignUp from '../components/SignUp';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {


    const [isSignUp, setIsSignUp] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUp(true);
    }

    const handleLoginClick = () => {
        setIsSignUp(false);
    }

    let content;

    if (isSignUp) {
        content = <SignUp handleLoginClick={handleLoginClick}/>;
    }
    else {
        content = <LoginForm handleSignUpClick={handleSignUpClick}/>;
    }



    return(
        <div className='min-h-screen bg-gradient-to-b from-green-100 to-white'>
         
            <Link to="/" className=' top-4 left-4'>
                <img src='/back.png' className=' w-[40px] ml-5 pt-5'/>
            </Link>

            <div className='flex w-full h-screen items-center justify-center mt-[-80px]'>
                {content}
            </div>
        </div>
    );
}

export default Login;
