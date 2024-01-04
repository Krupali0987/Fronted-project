import React from 'react';
import './Tabs.scss';
import Applications from '../../application';
import Agency from '../../agency';
import { Tabs } from 'antd';
import { CreateProgramme } from '../createProgramme';


const ProgramsTabs = () => (
    <Tabs defaultActiveKey="Programs">
        <Tabs.TabPane tab="Programs" key="Programs">
            <CreateProgramme />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Applications" key="Applications">
            <Applications />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Authorized Agency" key="Authorized Agency">
            <Agency />
        </Tabs.TabPane>{' '}
        <Tabs.TabPane tab="Authorized MGA" key="Authorized MGA">
            Authorized{' '}
        </Tabs.TabPane>{' '}
        <Tabs.TabPane tab="Commision" key="Commision">
            Commision{' '}
        </Tabs.TabPane>
    </Tabs>
);
export default ProgramsTabs;
