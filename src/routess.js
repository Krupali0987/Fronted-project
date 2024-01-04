import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/login';
import Programs from './pages/Programs/programs';
import Agencies from './pages/agencies/agencies';

const Routess = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/agencies" element={<Agencies />} />
           
        </Routes>
    );
};

export default Routess;
