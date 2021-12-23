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
    let toggleUserInfo: ((arg0: { token?: string | undefined; ticket?: string | undefined; }) => void) | null=()=>{}
    const submit=(callback: any)=> {
        console.log('submit',callback)
        toggleUserInfo=callback
        form.submit()
    }
    const handelLogin=async (name: string, { values, forms }: any) => {
        console.log('login',name,values,forms)
        if (name === 'userForm') {
            let result=await LoginPost(values)
            if(result.data?.token&&result.data?.ticket){
                await (toggleUserInfo&&toggleUserInfo(result.data))
                navigate('/dashborad/home', {state:{username:"admin"},replace:true});
            }else{
                message.error(result.message) 
            }
        }
    }
    return (
        <div className="login-page">
            <Card className="box-card" bordered={false} headStyle={{color:'#FFF',borderBottom:'none'}} title={t('login.page')}
            extra={<LangLayout></LangLayout>}>
                <Form.Provider onFormFinish={handelLogin}>
                    <Form 
                        form={form}
                        initialValues={{ remember: true }}
                        // onFinish={handelLogin}
                        name="userForm"
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
                                <LoginBtnLayout login={true} submit={submit}></LoginBtnLayout>
                                {/* <Button  type="primary"  htmlType="submit" className="btn">{t('common.login')}</Button> */}
                            </div>
                        </Form.Item>
                    </Form>
                </Form.Provider>
            </Card>
        </div>
    )
}
export default Login


