import React from 'react' ;
import { Link, useNavigate } from 'react-router-dom' ;
import useAuth from '../hooks/useAuth';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, Logout } = useAuth();

    const handleLogout = () => {
        Logout();
        navigate('/login');
    }

    return (
        <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-8">
                        <h1 className="text-white text-2xl font-bold">HealthTrack</h1>
                        {user && (
                            <ul className="flex space-x-6">
                                <li>
                                    <Link to="/" className="text-white hover:text-blue-100 transition duration-300 font-medium">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard" className="text-white hover:text-blue-100 transition duration-300 font-medium">
                                        Water Tracker
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                    {user && (
                        <button 
                            onClick={handleLogout}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </nav>
    ) ;
} ;

export default Navbar ;