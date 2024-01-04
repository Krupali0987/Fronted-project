import { Tabs } from "antd";
import React from "react";
import { CreateAgencies } from "../createAgencies";

const AgenciesTabs = () => (
    <Tabs defaultActiveKey="Agencies">
        <Tabs.TabPane tab="Agencies" key="Agencies">
            <CreateAgencies />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Agents" key="Agents">
            Agents{''}
        </Tabs.TabPane>
    </Tabs>
   
)

export default AgenciesTabs;

