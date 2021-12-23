import './index.less'
import { Button,Card,Form, Input, message, } from 'antd';
import { useTranslation} from 'react-i18next'
import LangLayout from '../../../component/common/lang'
import {LoginPost} from '../../../https/Login'
import {useNavigate} from 'react-router-dom'
import LoginBtnLayout from '../../../component/common/loginbtn'

const Login=(props: any)=>{
    const [t]=useTranslation()
    const [form] = Form.useForm();
    const navigate=useNavigate()
    const resetForm = () => {
        form.resetFields();
    };
    const submit=()=> {
        form.submit()
    }
    const handelLogin= async (values: any) => {
        let {username,password}=values
        let data:object={
            username,
            password
        }
        let result=await LoginPost(data)
        if(result.data?.token&&result.data?.ticket){
            // props.toggleUserInfo(result.data)
            navigate('/dashborad/home', {state:{username:"admin"},replace:true});
        }else{
           message.error(result.message) 
        }
    }
    return (
        <div className="login-page">
            <Card className="box-card" bordered={false} headStyle={{color:'#FFF',borderBottom:'none'}} title={t('login.page')}
            extra={<LangLayout></LangLayout>}>
                <Form  name="basic"
                    form={form}
                    initialValues={{ remember: true }}
                    // onFinish={handelLogin}
                    autoComplete="off">
                    <Form.Item  name="username" rules={[{ required: true }]} >
                        <Input 
                            placeholder={t('login.usernameholder')}
                        />
                    </Form.Item>
                    <Form.Item  name="password" rules={[{ required: true }]}>
                        <Input.Password  placeholder={t('login.passwordholder')}/>
                    </Form.Item>
                    <Form.Item >
                        <div className="flex">
                            <Button  type="default" onClick={resetForm} className="btn">{t('common.reset')}</Button>
                            <LoginBtnLayout login={true} submit={handelLogin}></LoginBtnLayout>
                            {/* <Button  type="primary"  htmlType="submit" className="btn">{t('common.login')}</Button> */}
                        </div>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}
export default Login


