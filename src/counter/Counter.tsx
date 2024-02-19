import React from 'react';
import {Button} from "../button/Button";
import {NavLink} from "react-router-dom";


export type CounterProps = {
    min: number
    max: number
    count: number
    setCount: (count:number)=> void
}
export const Counter: React.FC<CounterProps> = (props) => {
    const {min, max, setCount, count} = props;




    const addCount = () => {
        if (max === undefined || count < max) {
           const newCount = count + 1;
           setCount(newCount);
           localStorage.setItem('count', newCount.toString());
        }
    }

    const resetCount = () => {
        setCount(min);
      localStorage.setItem('count', min.toString());
    }


    const buttonIncDisabled = min === max && count > max;

    return (
        <div className={"body"}>
            <div className={count === max ? "countMax" : "number"}>
                {count}
            </div>

            <div className={"control"}>
                <Button
                    name={"inc"}
                    callback={addCount}
                   disabled={buttonIncDisabled}
                    classes={"button"}
                />

                <Button
                    name={"reset"}
                    callback={resetCount}
                    classes={"button"}
                />

                <NavLink to={"/settings"}>
                    <Button callback={() => {}}
                            name={"settings"}
                            classes={"button"}/></NavLink>
            </div>
        </div>
    );
};

