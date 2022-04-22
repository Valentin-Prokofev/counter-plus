import React from 'react';

type DisplayPropsType = {
    currentValue:number
    pressSet:boolean
    error:boolean
}

export const Display = (props:DisplayPropsType) => {
    let display
    if (props.error) {
        display = <div className={"span_title_text_error"}>Incorrect value!</div>
    }else if(!props.error && props.pressSet) {
       display =  <div className={"span_title_text"}>enter values and press SET</div>
    } else if (!props.error && !props.pressSet) {
        display = <div className={"span_title"}>{props.currentValue}</div>
    }

    return (
        <div className={"window2_title2"}>
            {display}
        </div>
    );
};
