import classNames from 'classnames'
import { SecondaryText } from 'designSystem/Typography'
import React from 'react'
import { ReactComponent as SortIcon } from 'assets/svg/sort.svg'
export default function CallTableHeader(props) {
    const isSortIconEnabled=props.isSortIconEnabled||false
    return (
        <th className={classNames('callTableHeaderCell','pl-6','py-4 bg-blue-50 border-b border-coolGray-200 ',props.className)} colSpan={props.colSpan||1}>
        <div className="flex items-center">
            <SecondaryText>
                {props.children}    
            </SecondaryText>
            {
                isSortIconEnabled&&(
                    <SortIcon className="ml-1"/>                    
                )
            }
            </div>
        </th>
    )
}
