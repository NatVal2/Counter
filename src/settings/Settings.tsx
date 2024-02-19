import React, {ChangeEvent, useState} from 'react';
import {Button} from "../button/Button";
import {Input} from "../input/Input";
import {NavLink} from "react-router-dom";


type FromCount = {
    count: number
    min: number
    max: number
    setMin: (min: number) => void
    setMax: (max: number) => void
    setCount: (count: number) => void
}

export const Settings: React.FC<FromCount> = (props) => {
    const {min, max, setMin, setMax, setCount} = props
    let [error, setError] = useState<string | null>(null)
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.currentTarget.value, 10);
        setMin(newValue);
        localStorage.setItem('min', newValue.toString());
    };

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.currentTarget.value, 10);
        setMax(newValue);
        localStorage.setItem('max', newValue.toString());
    };

    const setMinValue = () => {
        if (min < max || min !== max || min > 0) {
            setCount(min)
            localStorage.setItem('count', min.toString());
         } else {
            setError("set a correct value")
        }
    }

    const disabled = min === max || min < 0 || min > max;
    const isInvalidInput = min === max || (max !== undefined && (min ?? 0) > max) || min < 0;
    return (
        <div className={"settings"}>
            <div className={"value"}>
                <Input onChange={onChangeMaxHandler}
                          name={"max"}
                          min={min}
                          max={max}
                />
                <Input onChange={onChangeMinHandler}
                          name={"min"}
                          min={min}
                          max={max}
                />
            </div>

            <NavLink to={"/counter"}>
                {error && <div className={"error"}>{error}</div>}
                <Button callback={setMinValue}
                        name={"set"}
                        disabled={disabled}
                        classes={isInvalidInput ? "red" : "button"}></Button>
                        {error && <div className={"error"}>{error}</div>}
        </NavLink>
        </div>
    );
};

