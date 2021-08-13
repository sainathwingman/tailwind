import React from "react";
import classNames from "classnames";
 function Typography(props) {
  let type = props.type || "primary";
  
  return (
    <div
      className={classNames(
        "content",
        {
          "text-base leading-5 font-medium text-coolGray-900" : type === "primary",
        },
        {
          "text-base leading-5 font-medium text-coolGray-500": type === "secondary",
        },
        {
        "text-xl leading-5 font-normal text-coolGray-900": type === "pageHeader",
        },
        {
        "text-sm leading-4 font-normal text-coolGray-800": type === "searchText",
        }        
        ,
      props.className
      )}
    >
      {props.children}
    </div>
  );
}
const PrimaryText=(props)=>{
    
    return <Typography type="primary"  {...props} >
        
    </Typography>
    
}
const SecondaryText=(props)=>{
    return <Typography type="secondary"  {...props}/>
    
}
const PageHeader=(props)=>{
    return <Typography type="pageHeader" {...props}/>

    
}


export {
    PrimaryText,
    SecondaryText,
    PageHeader   
}

export default Typography