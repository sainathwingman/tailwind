import classNames from 'classnames'
import React from 'react'
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg'
import Typography from 'designSystem/Typography'

export default function OmniSearchBar(props) {
    return (
        <div  className={classNames('omniSearchBar flex py-4 items-center',props.className)}>
            <SearchIcon/>
            <Typography type="searchText" className="ml-4">
                Search  ...
            </Typography>
            
        </div>
    )
}
