import classNames from "classnames";
import Dropdown from "designSystem/Dropdown";
import Duration from "designSystem/Duration";
import Filters from "designSystem/Filters";
import RangePicker from "designSystem/RangePicker";
import { ReactComponent as DownloadCallsIcon } from "assets/svg/downloadCalls.svg";
import CallTable from "components/CallTable";
function TeamCalls(props) {
  return (
    <div
      className={classNames(
        "teamCalls",
        "pl-11",
        "pr-13",
        // "h-full",        
        "overflow-y-scroll",
        props.className
      )}
    >
      <div className="py-10 px-2.5 flex  items-center justify-between">
        <div className="flex gap-x-5 items-center">
          <Dropdown />
          <Duration />
          <Filters />
        </div>

        <div className="flex gap-x-4 items-center">
          <RangePicker />
          <DownloadCallsIcon />
        </div>
      </div>

      <CallTable />
    </div>
  );
}

export default TeamCalls;
