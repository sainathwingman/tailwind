import React from 'react'
import classNames from 'classnames'
import { PrimaryText ,SecondaryText} from 'designSystem/Typography'

export default function DateColumn(props) {
    
    return (
        <div className={classNames('dateColumn',props.className)}>
              <PrimaryText >
                  17 Oct,2020
              </PrimaryText>
              <SecondaryText>
                  06:41 PM
              </SecondaryText>
        </div>
    )
}
