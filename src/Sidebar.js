import {DesktopOutlined,FileOutlined,PieChartOutlined,} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import MainHeader from './Components/Header/Header';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Routess from './routess';
import logo from './assets/dreamSpot.png';
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Programs', 'programs', <PieChartOutlined />),
    getItem('Agencies', 'agency', <DesktopOutlined />),
    getItem('MGAs', 'MGAs', <DesktopOutlined />),
    getItem('Quote Requests', 'Quote Requests', <DesktopOutlined />),
    getItem('Network Updates', 'Network Updates', <DesktopOutlined />),

    getItem('Files', '7', <FileOutlined />),
];
const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    return (
        <Layout>
            <Sider
                width="15%"
                breakpoint="md"
                theme="light"
                collapsible
                collapsed={collapsed}
                onCollapse={value => setCollapsed(value)}
            >
                <div className="logo my-5">
                    <img src={logo} alt="imagggggg" style={{height:"50px"}} />
                </div>
                <Menu
                    onClick={e => {
                        navigate(`/${e.key}`);
                        // console.log('clicked');
                    }}
                    theme="light"
                    mode="inline"
                    items={items}
                />  
            </Sider>

            <Layout>
                <Header
                    className="my-5 rounded-md"
                    style={{
                        padding: 0,
                        backgroundColor: 'white',
                    }}
                >
                    <MainHeader />
                </Header>

                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                        }}
                    >
                        <Routess />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};
export default Sidebar;
