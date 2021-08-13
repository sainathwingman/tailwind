import classNames from "classnames"
import {ReactComponent as DashboardIcon} from "assets/svg/dashboard.svg"
import {ReactComponent as TeamCallsIcon} from "assets/svg/teamCalls.svg"
import {ReactComponent as MyCallsIcon} from "assets/svg/myCalls.svg"
import {ReactComponent as DealCentralIcon} from "assets/svg/dealCentral.svg"
import {ReactComponent as GameTapesIcon} from "assets/svg/gameTapes.svg"
import {ReactComponent as CueCardsIcon} from "assets/svg/cueCards.svg"
import {ReactComponent as SupportIcon} from "assets/svg/support.svg"
import {ReactComponent as ActivityDashboardIcon} from "assets/svg/activityDashboard.svg"
function SideBar(props)

{
    return (
        <div className={classNames('sideBar flex-col flex','px-2.5','pt-6','gap-y-6','border-coolGray-200', 'border-r', props.className)}>
            
            <DashboardIcon/>
            <TeamCallsIcon/>
            <MyCallsIcon/>
            <DealCentralIcon/>
            <GameTapesIcon/>
            <CueCardsIcon/>
            <SupportIcon/>
            <ActivityDashboardIcon/>
            
        </div>
    )
}

export default SideBar