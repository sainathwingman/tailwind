import React from 'react'
import classNames from 'classnames'
import {ReactComponent as ClockIcon} from "assets/svg/clock.svg"
import { SecondaryText } from 'designSystem/Typography'
export default function CallDurationColumn(props) {
    return (
        <div className={classNames('callDurationColumn flex gap-2 flex-row',props.className)}>
                <ClockIcon/>
                <SecondaryText>
                    12:34 
                </SecondaryText>
        </div>
    )
}
