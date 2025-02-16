import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

function Login() {
    return(
        <div className='min-h-screen bg-gradient-to-b from-green-100 to-white'>
         
            <Link to="/" className=' top-4 left-4'>
                <img src='/back.png' className=' w-[40px] ml-5 pt-5'/>
            </Link>

            <div className='flex w-full h-screen items-center justify-center mt-[-80px]'>
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;