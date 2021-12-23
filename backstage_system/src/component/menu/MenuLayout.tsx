import { Menu, Button } from 'antd';
import * as Icon from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import Header  from '../common/header';
import './index.less'
import React, { useEffect, useState } from 'react';
import {MenuGet} from '../../https/Menu'
import { useTranslation } from 'react-i18next';

const { SubMenu } = Menu;
type menuType={
        id: number
        resIcon: string,
        resKey: string,
        resName: string,
        children?:Array<menuType>
}
const MenuSlider=() =>{
    const [t]=useTranslation()
    const [collapsed,setCollapsed]=useState(false)
    const[menulist,setMenulist]=useState<Array<menuType>>([{id:0,resIcon: '',resKey: '',resName:''}])
    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };
    const getMenuList=async () => {
        let res=await MenuGet({token:window.localStorage.system_token})
        if(res.result&&res.data?.list){
            setMenulist(res.data.list)
        }
    }
    const getMenuIcon=(resIcon: string)=> React.createElement(Icon&&(Icon as any)[resIcon])
    
    useEffect(()=>{
        getMenuList()
    },[])
    return (
      <div className="slide-page">
        <Header/>
        <div className="content-box">
            <div className="menu-list" >
                <Menu
                defaultSelectedKeys={[menulist[0].toString()]}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                >
                <div className="collapsed">
                    <Button className="coll-btn" type="default" size="small" onClick={toggleCollapsed} style={{ marginBottom: 10 }}>
                        {React.createElement(collapsed ? Icon.MenuUnfoldOutlined : Icon.MenuFoldOutlined)}
                    </Button>
                </div>
                {menulist.map((item) => (
                    item.children?
                    <SubMenu key={item.id} icon={item.resIcon?getMenuIcon(item.resIcon):''} title={t(`menu.${item.resName}`)}>
                        {item.children.map((item1)=>(
                            <Menu.Item key={item1.id} >{t(`menu.${item1.resName}`)}</Menu.Item>
                        ))
                    }
                    </SubMenu>
                    :
                    <Menu.Item key={item.id} icon={item.resIcon?getMenuIcon(item.resIcon):''}>
                        {t(`menu.${item.resName}`)}
                    </Menu.Item>
                ))}
                </Menu>
            </div>
            <div className="slide-right">
                <Outlet />
            </div>
        </div>
      </div>
    );
}
export default MenuSlider


