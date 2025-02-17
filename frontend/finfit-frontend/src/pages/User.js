import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export function User() {
    const [username, setUsername] = useState('User');

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow p-6 max-w-2xl mx-auto space-y-6 text-center">
                <h1 className="text-4xl font-bold text-green-600">Here is your Profile, {username}!</h1>
                <p className="text-gray-700 text-lg">More features will be added soon.</p>

                <form className="flex flex-col gap-4 bg-white shadow-md rounded-2xl p-6 mt-6">
                    <input 
                        type="text" 
                        placeholder="Update your username" 
                        className="border p-3 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300">
                        Set Username
                    </button>
                </form>

                <div className="bg-white shadow-md rounded-2xl p-6 mt-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profile Overview</h2>
                    <p className="text-gray-600">Manage your profile settings here.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
