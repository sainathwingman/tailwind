import classNames from "classnames";
import React from "react";
import CallCommentColumn from "./CallCommentColumn";
import CallDurationColumn from "./CallDurationColumn";
import CallTableCell from "./CallTableCell";
import CallTableHeaderCell from "./CallTableHeaderCell";
import CallTitleColumn from "./CallTitleColumn";
import DateColumn from "./DateColumn";
import RepColumn from "./RepColumn";
import TalkListenRationColumn from "./TalkListenRatioColumn";
export default function CallTable(props) {
  let tableData =
    props.tableData || Array.from({ length: 15 }, () => "prefilled 20 items");
  return (
    <div className={classNames("callTable w-full border-coolGray-200 border rounded-t-2xl overflow-hidden", props.className )}>
      <table className=" border-collapse  w-full ">
        <thead>
        <tr>
          <CallTableHeaderCell isSortIconEnabled={true} >
            Date & Time
          </CallTableHeaderCell>
          <CallTableHeaderCell >
          Rep
          </CallTableHeaderCell>
          <CallTableHeaderCell isSortIconEnabled={true} >
            Call Title
          </CallTableHeaderCell>
          <CallTableHeaderCell >
            {/* Comments */}
          </CallTableHeaderCell>
          
          
          <CallTableHeaderCell >Call Duration</CallTableHeaderCell>
          <CallTableHeaderCell >Talk/Listen Ratio</CallTableHeaderCell>
          </tr>
        </thead>

        <tbody>
          
            {tableData.map((row,index) => {
              return (
                <tr key={index} className="hover:bg-coolGray-50 cursor-pointer">
                  <CallTableCell>
                    <DateColumn />
                  </CallTableCell>
                  <CallTableCell>
                    <RepColumn />
                  </CallTableCell>
                  <CallTableCell >
                    <CallTitleColumn  />
                  </CallTableCell>
                  <CallTableCell > 
                    <CallCommentColumn />
                  </CallTableCell>
                  <CallTableCell>
                    <CallDurationColumn />
                  </CallTableCell>
                  <CallTableCell>
                    <TalkListenRationColumn/>
                  </CallTableCell>
                </tr>
              );
            })}
          
        </tbody>
      </table>
    </div>
  );
}
