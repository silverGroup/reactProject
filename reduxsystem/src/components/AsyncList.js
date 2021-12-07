import React from 'react'
import PropTypes from 'prop-types'

const AsyncList=({listArray=[]})=>(
    <div 
    className="list-item"
    >
        {listArray.map((item)=>(item.name))}
    </div>
)
AsyncList.propTypes={
    listArray:PropTypes.array.isRequired
}
export default AsyncList