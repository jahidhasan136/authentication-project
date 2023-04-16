import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex justify-center mt-16'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;