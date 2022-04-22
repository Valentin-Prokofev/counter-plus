import React, {ChangeEvent} from 'react';

type PropsType = {
    onChange: (value: string) => void
    type: string
    value: number
    error: boolean
}

export const Input = (props: PropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value)
    }

    const className = `${props.error ? "input_error" + " input" : "input"}`

    return (
        <div>
            <input
                type={props.type}
                className={className}
                onChange={onChangeHandler}
                value={props.value}
            />
        </div>
    )
}

