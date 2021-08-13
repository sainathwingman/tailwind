import React from 'react'
import classNames from 'classnames'
import  RepPicSample from  "assets/svg/repPicSample.png"
export default function RepColumn(props) {
    return (
        <div className={classNames('repColumn relative',props.className)}>
                <div className="flex">
                <img src={RepPicSample} alt="rep avatar" className="relative right-0"/>
                <img src={RepPicSample} alt="rep avatar" className="relative right-4"/>
                <img src={RepPicSample} alt="rep avatar" className="relative right-8"/>
                </div>         
        </div>
    )
}
