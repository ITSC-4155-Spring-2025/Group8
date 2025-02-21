import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bg-green-600">
        <div className="absolute w-full overflow-hidden">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="relative block fill-white">
                </path>
            </svg>
        </div>

        <div className="grid grid-cols-3 py-28 mx-5">
            <div>
                <h2 className="text-3xl font-bold text-white">FinFit</h2>
                <p className="text-sm text-white">© {new Date().getFullYear()} FinFit. All rights reserved.</p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold text-white">Quick Links</h2>
                <ul>
                    <li>
                        <span className="text-white">Learn</span>
                    </li>
                    <li>
                        <Link to ="/login" className="text-white">Login</Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col justify-end items-center mt-4">
                <img src="/instagram.png" alt="logo" className=" mt-2 w-[30px]"/>
            </div>

        </div>
    </footer>
  );
}

export default Footer;
