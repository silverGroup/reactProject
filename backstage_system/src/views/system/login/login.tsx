import { Button,Card,Form, Input, } from 'antd';
import './index.less'
const Login=()=>{
    return (
        <div className="login-page">
            <table></table>
            <Card className="box-card">
            <div className="card-header-box">
                <div className="card-header">
                    <span>系统登录</span>
                </div>
            </div>
            <Form  name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off">
                <Form.Item  >
                    <Input />
                </Form.Item>
                <Form.Item >
                    <Input />
                </Form.Item>
            </Form>
            <div className="test-box">
                <h3></h3>
                <p></p>
                <p></p>
            </div>
            <div className="flex">
                {/* <Button type="primary" onClick={handelLogin} className="btn"></Button> */}
                {/* <Button type="default" onClick={resetForm} className="btn"></Button> */}
            </div>
            </Card>
        </div>
    )
}
export default Login;