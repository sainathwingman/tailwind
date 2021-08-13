import classNames from 'classnames'
import React from 'react'
import { SecondaryText } from './Typography'

import {ReactComponent as ArrowDown } from "assets/svg/arrowDown.svg"
export default function Dropdown(props) {
    return (
        <div className={classNames('dropdown bg-coolGray-50 rounded-5xl py-3 px-4 gap-2 flex items-center border-coolGray-500 border',' hover:cursor-pointer',props.className)}>
                <SecondaryText>
                Muralidharan Venkatasubramanian +1
                </SecondaryText>
                <ArrowDown/>

                

        </div>
    )
}
