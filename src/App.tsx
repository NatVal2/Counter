import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Counter} from "./counter/Counter";
import {Settings} from "./settings/Settings";


function App() {
    const [min, setMin] = useState<number>(0)
    const [max, setMax] = useState<number>(0)
    const initialCount = min ? min : parseInt(localStorage.getItem('count')!);
    const [count, setCount] = useState<number>(initialCount)

    return (
        <div className='app-wrapper'>


            <Routes>
                <Route path={"/*"} element={<Settings count={min}
                                                     setCount={setCount}
                                                     setMax={setMax}
                                                     setMin={setMin}
                                                     max={max}
                                                     min={min}
                />}/>
                <Route path={"counter"} element={<Counter min={min}
                                                          max={max}
                                                          count={count}
                                                          setCount={setCount}
                />}/>

            </Routes>
        </div>
    );
}

export default App;

