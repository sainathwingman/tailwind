import React from 'react'
import classNames from 'classnames'
import {ReactComponent as ProgressCircleIcon} from "assets/svg/progressCircle.svg"
// import { SecondaryText } from 'designSystem/Typography'
export default function TalkListenRationColumn(props) {
    return (
        <div className={classNames('talkListenRationColumnTitle flex items-center gap-3.5',props.className)}>
            <ProgressCircleIcon />
            <div className="text-base leading-5 font-medium text-red-500">
                74 %
            </div>

            
        </div>
    )
}
