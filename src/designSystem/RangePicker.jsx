import classNames from 'classnames'
import React from 'react'
import { SecondaryText } from './Typography'
import {ReactComponent as CalendarScheduleIcon} from "assets/svg/calendarSchedule.svg"
export default function RangePicker(props) {
    return (
        <div className={classNames('dropdown bg-coolGray-50 rounded-5xl py-3 px-4 gap-3 flex items-center border-coolGray-500 ',' hover:cursor-pointer',props.className)}>
                <CalendarScheduleIcon/>
                <SecondaryText>
                All Time
                </SecondaryText>
                

                

        </div>
    )
}
