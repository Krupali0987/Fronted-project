import React from 'react';
import logo from '../../../assets/dreamSpot.png';
import CustomButton from '../../../Components/Buttons/Button';

const LoginHeader = () => {
    return (
        <div className=" flex justify-between items-center m-auto	">
            <img src={logo} alt="imagggggg" style={{width:"400px",paddingBottom:"20px"}} />
            <CustomButton type="primary" title="Create Account"/>
        </div>
    );
};

export default LoginHeader;
