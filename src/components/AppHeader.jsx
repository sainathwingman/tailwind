import React from 'react'
import classNames from "classnames"
import {ReactComponent as WingmanLogo} from "assets/svg/wingman.svg"
import {PageHeader} from "designSystem/Typography"
import OmniSearchBar from './OmniSearchBar'
import {ReactComponent as NotificationIcon } from "assets/svg/notification.svg"
import ProfilePicImage from "assets/svg/profilePicSample.png"
import {ReactComponent as ArrowDown } from "assets/svg/arrowDown.svg"

export default function AppHeader(props) {
    return (
        <div className={classNames('appHeader','h-15','flex','flex-row','items-center','pl-4','pr-8',props.className)} >
        <div className="flex items-center">
            <WingmanLogo/>            
            <PageHeader className="ml-16">
                Team Calls
            </PageHeader>
            </div>
            <OmniSearchBar className="ml-96"/>
            <div className="flex items-center gap-x-4 ml-auto">
            <NotificationIcon className="cursor-pointer"/>
            <div className="cursor-pointer flex items-center gap-x-4">
            <img  src={ProfilePicImage} alt="your profile"/>
            <ArrowDown/>
            </div>
            </div>
                                    

        </div>
        
    )
}
