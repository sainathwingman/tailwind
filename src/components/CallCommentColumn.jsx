import React from 'react'
import classNames from 'classnames'
import {ReactComponent as NewCommentIcon} from "assets/svg/newComment.svg"

export default function CallCommentColumn(props) {
    const commentCount=props.commentCount||1
    return (
        <div className={classNames('callCommentColumn',props.className)}>
          <div className="relative w-8 h-7">
            <NewCommentIcon/>
              <div className="bg-blue-500 text-white absolute top-0 right-0  font-semibold text-xs text-center w-4 h-4 rounded-full">
                    {commentCount}
              </div>          
          </div>
        </div>
    )
}
