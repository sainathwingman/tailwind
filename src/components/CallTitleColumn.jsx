import React from 'react'
import classNames from 'classnames'
import { PrimaryText } from 'designSystem/Typography'
import { SecondaryText } from 'designSystem/Typography'
export default function CallTitleColumn(props) {
    return (
        <div className={classNames('callTitleColumn',props.className)}>
            <PrimaryText>                
            Pranav Kumar Varshney and Muralidharan Venkatasubramanian
            </PrimaryText>
            <SecondaryText>
                Louis Vuitton
            </SecondaryText>

        </div>
    )
}
