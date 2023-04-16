import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import app from '../../Firebase/firebase.config';
import { Link } from 'react-router-dom';

const Register = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const auth = getAuth(app)


    const handleRegister = event => {
        event.preventDefault()
        setError('')
        setSuccess('')
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        
        if(!/(?=.*?[A-Z])/.test(password)){
            setError('Please minimum one character use uppercase')
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setSuccess('Registration Succesfully !')
                sendVerification(result.user)
                event.target.reset()
            })
            .catch(error => {
                setError(error.message)
            })
    }



    const sendVerification = user => {
        sendEmailVerification(user)
            .then((result) => {
                console.log(result)
                alert('Please verify your email')
            })
    }


    return (
        <div>
            <h2 className='mb-6 text-2xl md:text-4xl font-bold'>Please Register !!</h2>
            <form className='grid gap-5' onSubmit={handleRegister}>
                <input className='border border-gray-500 rounded w-64 h-9 md:w-72 md:h-12 md:rounded-lg pl-2 md:text-lg' type="email" name="email" id="email" placeholder='Enter your email' required />
                <input className='border border-gray-500 rounded w-64 h-9 pl-2 md:w-72 md:h-12 md:rounded-lg md:text-lg' type="password" name="password" id="password" placeholder='Enter your password' required />
                <button className='bg-slate-500 py-2 rounded text-white font-bold'>Register</button>
            </form>
            <p><small>Already have an account? Please <Link className='text-blue-500 font-bold' to="/login">Login</Link></small></p>
            <p className='text-red-600'><small>{error}</small></p>
            <p className='text-green-600'><small>{success}</small></p>
        </div>
    );
};

export default Register;