import React from 'react'
import Apps from '../portofolio/apps'
import Ecommerce from '../portofolio/ecommerce'
import LogoSection from '../portofolio/logo'
import Website from '../portofolio/website'
import './tabsComponent.css'
import { Tabs } from "antd";

const { TabPane } = Tabs;
const onChange = (key) => {
    console.log(key);
  };
export default function TabsComponent() {
  return (
    <div>
        
        
        
        <Tabs className="media-tab" defaultActiveKey="1" onChange={onChange}>
    <TabPane tab="Apps" key="1">
      <Apps />
    </TabPane>
    <TabPane tab="Website" key="2">
      <Website/>
    </TabPane>
    <TabPane tab="Ecommerce" key="3">
      <Ecommerce/>
    </TabPane>
    <TabPane tab="Logo" key="4">
      <LogoSection/>
    </TabPane>
  </Tabs>
        
        
        
        
        
        </div>
  )
}
