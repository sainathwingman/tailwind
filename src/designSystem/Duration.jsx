import classNames from 'classnames'
import React from 'react'
import { SecondaryText } from './Typography'
import {ReactComponent as ArrowDown } from "assets/svg/arrowDown.svg"
export default function Duration(props) {
    return (
        <div className={classNames('duration bg-coolGray-50 rounded-5xl py-3 px-4 gap-2 flex items-center ',' hover:cursor-pointer',props.className)}>
                <SecondaryText>
                    Duration
                </SecondaryText>
                <ArrowDown/>

                

        </div>
    )
}
