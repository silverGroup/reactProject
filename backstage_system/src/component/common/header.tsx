import { Avatar, PageHeader,Image } from 'antd';
import { Link } from 'react-router-dom';
import { LStorageService } from '../../utils/storage';
import './common.less'
import LangLayout from './lang'
import LoginBtnLayout from './loginbtn'
const Header=() =>{
    const username=LStorageService.get('ticket')
    return (
        <PageHeader
            ghost={false}
            className="site-page-header"
            title={[<Link to='/dashborad/home' className="title">REACT SYSTEM</Link>]}
            extra={[
                <div className="right-header">
                    <ul>
                        <li><Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />{username}</li>
                        <li>|</li>
                        <LoginBtnLayout login={false} />
                        {/* <li onClick={logout}>{t('common.logout')}</li> */}
                        <li>|</li>
                        <li><LangLayout/></li>
                    </ul>
                </div>
            ]}
        >
        </PageHeader>
    )
}
export default Header