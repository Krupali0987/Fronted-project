import React from 'react';
import { Typography } from 'antd';
import './SubHeading.scss';

const SubHeading = props => {
    const { Title } = Typography;

    return (
        <div className="SubHeading-custom">
            <Title level={4} {...props} />
        </div>
    );
};

export default SubHeading;
