import React from 'react';
import { Input } from 'antd';
import './TextField.scss';

const TextField = props => {
    return (
        <div className="input-custom">
            <Input {...props} />
        </div>
    );
};

export default TextField;
