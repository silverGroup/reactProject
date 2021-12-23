import { Button } from "antd"
import { Fragment } from "react"
import { useTranslation } from "react-i18next"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toggleUserInfo } from "../../store/actions"

const LoginBtnLayout=(props:any) =>{
    const [t]=useTranslation()
    const navigate=useNavigate()
    const logout =() =>{
        props.toggleUserInfo({ticket:'',token:''})
        navigate('/system/login',{replace:true})
    }
    const loginFun=()=>{
        props.submit(props.toggleUserInfo)
    }
    return(
        <Fragment>
            {
                props.login?
                <Button  type="primary"  onClick={loginFun} className="btn">{t('common.login')}</Button>
                :
                <li onClick={logout}>{t('common.logout')}</li>
            }
        </Fragment>
    )
}
const mapStateToProps=(state: { userinfo: object; })=>({
    state:state.userinfo
})
const mapDispatchToProps=(dispatch: (arg0: { type: string; payload: object; }) => any)=>({
    toggleUserInfo:(payload: object)=>dispatch(toggleUserInfo(payload))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginBtnLayout)