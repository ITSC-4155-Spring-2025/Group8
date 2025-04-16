import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <div className='border-b'>
            <div className="flex justify-between items-center h-24 mx-auto max-w-[1400px] px-10 ">
                <h1 className="w-full text-4xl font-bold text-green-600">FinFit</h1>
                <ul className="flex items-center">

                    <li>
                    <Link to ="/login" className="p-4 cursor-pointer font-semibold hover:text-lime-500">Learn</Link>
                    </li>
                    <li>
                        <Link to ="/login" className="p-4 cursor-pointer font-semibold hover:text-lime-500">Login</Link>
                    </li>
                    <Link to="/login"><button className="p-4 mx-2 font-semibold bg-lime-500 
                    text-white rounded-lg shadow-md hover:bg-white hover:text-[#359c32] transition-all duration-300 ease-in-out whitespace-nowrap">
                        Get Started
                    </button>
                    </Link>

                </ul>
            </div>
        </div>
    );
}

export default Navbar;
 