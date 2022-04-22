import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
    isDisabled?: boolean
}

export const Button = (props: ButtonPropsType) => {


    const onClickButtonHandler = () => {
        props.callback()
    }
    let className = props.isDisabled ? "button_disabled" : ""

    return (
        <div>
            <button className={`button ${className}`}
                    onClick={onClickButtonHandler}
                    disabled={props.isDisabled}
            >
                {props.name}
            </button>
        </div>
    );
};
