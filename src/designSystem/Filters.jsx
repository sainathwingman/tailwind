import classNames from 'classnames'
import React from 'react'
import { SecondaryText } from './Typography'
import {ReactComponent as FiltersIcon} from "assets/svg/filters.svg"
export default function Filters(props) {
    return (
        <div className={classNames('dropdown bg-coolGray-50 rounded-5xl py-3 px-4 gap-2 flex items-center border-coolGray-500 ',' hover:cursor-pointer',props.className)}>
                <FiltersIcon/>
                <SecondaryText>
                All Filters
                </SecondaryText>
                

                

        </div>
    )
}
