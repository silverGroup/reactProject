/**
 * redux-thunk 异步获取数据
 */

import { connect } from "react-redux";
import AsyncList from "../components/AsyncList";
import {getHttpAction,getInitTodoItemAction} from '../actions'
import React, { Component, Fragment } from 'react';

const mapStateToProps=state=>({
    asyncList:state.asyncList
})
const mapDispatchToProps=dispatch=>({
    getHttpAction:(id,func)=>dispatch(getHttpAction(id,func))
})

class Showasynclist extends Component {
    componentDidMount() {
        this.props.getHttpAction(1,getInitTodoItemAction)
    }
    render() {
        return (
            <Fragment>
                <AsyncList listArray={this.props.asyncList}></AsyncList>
            </Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Showasynclist)