/**
 * redux-saga 异步获取数据
 */

import { connect } from "react-redux";
import AsyncList from "../components/AsyncList";
import { getSagaListAsync } from '../actions'
import React, { Component, Fragment } from 'react'

class ShowSagalist extends Component {
    componentDidMount() {
        this.props.getSagaListAsync(1)
    }
    render() {
        return (
            <Fragment>
                <AsyncList listArray={this.props.sagaList}></AsyncList>
            </Fragment>
        );
    }
}
const mapStateToProps=state=>({
    sagaList:state.sagaList
})
const mapDispatchToProps=dispatch=>({
    getSagaListAsync:(id,func)=>dispatch(getSagaListAsync(id,func))
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowSagalist)