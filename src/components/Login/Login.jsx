import { getAuth, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../Firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app)

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')


    const handleLogin = event => {
        event.preventDefault()
        setError('')
        setSuccess('')
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setSuccess('Login Succesfully')
                event.target.reset()
            })
            .catch(error => {
                setError(error.message)
            })

    }


    return (
        <div>
            <h2 className='mb-6 text-2xl md:text-4xl font-bold'>Please Login !!</h2>
            <form className='grid gap-5' onSubmit={handleLogin}>
                <input className='border border-gray-500 rounded w-64 h-9 pl-2 md:w-72 md:h-12 md:rounded-lg md:text-lg' type="email" name="email" id="email" placeholder='Enter your email' />
                <input className='border border-gray-500 rounded w-64 h-9 pl-2 md:w-72 md:h-12 md:rounded-lg md:text-lg' type="password" name="password" id="password" placeholder='Enter your password' />
                <button className='bg-slate-500 py-2 rounded text-white font-bold'>Login</button>
            </form>
            <p><small>Don't have an account? Please <Link className='text-blue-500 font-bold' to="/register">Register</Link></small></p>
            <p className='text-red-500'><small>{error}</small></p>
            <p className='text-green-500'><small>{success}</small></p>

        </div>
    );
};

export default Login;