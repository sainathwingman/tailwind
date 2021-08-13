import classNames from 'classnames'
import React from 'react'
export default function callTableCell(props) {
    
    return (
        <td className={classNames('callTableCell','pl-6','py-6 border-b border-t border-coolGray-200',props.className)}>
                {props.children}
        </td>
    )
}
