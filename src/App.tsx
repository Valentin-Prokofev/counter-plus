import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Input} from "./components/Input";
import {Display} from "./components/Display";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./state/store";
import {
    changeErrorAC,
    incCounterValueAC,
    pressSetChangeAC,
    resetCounterValueAC,
    setValueAC
} from "./state/counterReducer";
import {changeStartValueAC} from "./state/counterReducer";
import {changeMaxValueAC} from "./state/counterReducer";


function App() {

    let currentValue = useSelector<AppStateType, number>(state=>state.counter.currentValue)
    let startValue = useSelector<AppStateType, number>(state=>state.counter.startValue)
    let maxValue = useSelector<AppStateType, number>(state=>state.counter.maxValue)
    let pressSet = useSelector<AppStateType, boolean>(state=>state.counter.pressSet)
    let error = useSelector<AppStateType, boolean>(state=>state.counter.error)

    const dispatch = useDispatch()

    // useEffect(() => {
    //     let maxValueAsString = localStorage.getItem("maxValue")
    //     if (maxValueAsString) {
    //         // setMaxValue(JSON.parse(maxValueAsString))
    //         // dispatch(changeMaxValueAC(JSON.parse(maxValueAsString)))
    //     }
    //
    //     let startValueAsString = localStorage.getItem("startValue")
    //     if (startValueAsString) {
    //         // setStartValue(JSON.parse(startValueAsString))
    //         // dispatch(changeStartValueAC(JSON.parse(startValueAsString)))
    //     }
    //
    // }, [])

    useEffect(() => {
        if ((maxValue < 0 || startValue < 0) || maxValue <= startValue) {
            dispatch(changeErrorAC(true))
        } else if ((maxValue > 0 || startValue > 0) || maxValue >= startValue) {
            dispatch(changeErrorAC(false))
            dispatch(pressSetChangeAC(true))
        }
        // localStorage.setItem("maxValue", JSON.stringify(maxValue))
        // localStorage.setItem("startValue", JSON.stringify(startValue))
    }, [maxValue, startValue])

    const incrementHandler = () => {
        dispatch(incCounterValueAC())
    }

    const resetHandler = () => {
        dispatch(resetCounterValueAC(startValue))
    }

    const changeNumberMaxValue = (value: string) => {
        dispatch(changeMaxValueAC(+value))
    }

    const changeNumberStartValue = (value: string) => {
        dispatch(changeStartValueAC(+value))
    }

    const settingValue = () => {
        currentValue = startValue
        dispatch(setValueAC(currentValue))
        dispatch(pressSetChangeAC(false))
    }

    return (
        <div className="App">
            <div className={"window2"}>
                <div className={"window2_title1"}>
                    <div className={"window_input1"}>
                        <span className={"span"}>Max value</span>
                        <Input type="number"
                               value={maxValue}
                               onChange={changeNumberMaxValue}
                               error={error}
                        />
                    </div>
                    <div className={"window_input1"}>
                        <span className={"span"}>Start value</span>
                        <Input type="number"
                               value={startValue}
                               onChange={changeNumberStartValue}
                               error={error}
                        />
                    </div>
                </div>
                <div className={"window2_button"}>
                    <Button
                        name={"set"}
                        callback={settingValue}
                        isDisabled={error || !pressSet}
                    />
                </div>
            </div>
            <div className={"window2"}>
                <Display
                    error={error}
                    currentValue={currentValue}
                    pressSet={pressSet}
                />
                <div className={"window2_button"}>
                    <Button name={"inc"}
                            callback={incrementHandler}
                            isDisabled={currentValue >= maxValue || error}
                    />
                    <Button
                        name={"reset"}
                        callback={resetHandler}
                        isDisabled={currentValue === startValue || error}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
