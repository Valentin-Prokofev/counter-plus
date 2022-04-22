import React, {useEffect, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Input} from "./components/Input";
import {Display} from "./components/Display";


function App() {
    let [startValue, setStartValue] = useState(0)
    let [maxValue, setMaxValue] = useState(4)
    let [currentValue, setCurrentValue] = useState(0)
    let [pressSet, setPressSet] = useState(false)
    let [error, setError] = useState(false)

    useEffect(() => {
        let maxValueAsString = localStorage.getItem("maxValue")
        if (maxValueAsString) {
            setMaxValue(JSON.parse(maxValueAsString))
        }

        let startValueAsString = localStorage.getItem("startValue")
        if (startValueAsString) {
            setStartValue(JSON.parse(startValueAsString))
        }

    }, [])

    useEffect(() => {
        if ((maxValue < 0 || startValue < 0) || maxValue <= startValue) {
            setError(true)
        } else if ((maxValue > 0 || startValue > 0) || maxValue >= startValue) {
            setError(false)
            setPressSet(true)
        }
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
        localStorage.setItem("startValue", JSON.stringify(startValue))
    }, [maxValue, startValue])

    const incrementHandler = () => {
        setCurrentValue(currentValue = currentValue + 1)
    }

    const resetHandler = () => {
        setCurrentValue(startValue)
    }

    const changeNumberMaxValue = (value: string) => {
        setMaxValue(+value)
    }

    const changeNumberStartValue = (value: string) => {
        setStartValue(+value)
    }

    const settingValue = () => {
        currentValue = startValue
        setCurrentValue(currentValue)
        setPressSet(false)
    }

    console.log(error)

    return (
        <div className="App">
            <div className={"window2"}>
                <div className={"window2_title1"}>
                    <div className={"window_input1"}>
                        <span className={"span"}>Max value  </span>
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
                        isDisabled={error}
                    />
                </div>
            </div>
            <div className={"window2"}>
                <Display
                    error={error}
                    currentValue={currentValue}
                    pressSet={pressSet}/>
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
