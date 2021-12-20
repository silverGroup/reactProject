import { Menu, Dropdown } from 'antd';
import { useTranslation} from 'react-i18next'
import './common.less'
import logo from '@/assets/images/language.svg';
import i18n from '../../language';
import { useState } from 'react';
import { connect } from "react-redux";
import {toggleLang} from '../../store/actions'

const LangLayout=(props: any)=>{
    const [t]=useTranslation()
    const [lang,setLang]=useState(props.lang||'zh')
    const handleMenuClick=(e: any)=>{
        if(e.key){
            i18n.changeLanguage(e.key);
            setLang(e.key.toString())
            props.toggleLang(e.key)
        }
    }
    const menu=(
        <Menu onClick={handleMenuClick} defaultSelectedKeys={[lang]} selectedKeys={[lang]}>
            <Menu.Item key="zh" >{t('login.local')}</Menu.Item>
            <Menu.Item key="en">English</Menu.Item>
        </Menu>
    )
    return (
        <div>
            <Dropdown overlay={menu}>
                <img src={logo} className="card-icon" alt="logo" />
            </Dropdown>
        </div>
    )
}
const mapStateToProps=(state: { lang: string; })=>({
    lang:state.lang
})
const mapDispatchToProps=(dispatch: (arg0: { type: string; payload: string; }) => any)=>({
    toggleLang:(payload: string)=>dispatch(toggleLang(payload))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LangLayout)
// export default LangLayout;