import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between p-6 bg-gray-500 text-white'>
            <h2 className='text-xl font-bold'>Login Page</h2>
            <div className='flex gap-2'>
                <Link to="/" className='btn btn-outline'>Home</Link>
                <Link to="/login" className='btn btn-outline'>Login</Link>
                <Link to="/register" className='btn btn-outline'>Register</Link>
            </div>
        </nav>
    );
};

export default Header;