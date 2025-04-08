import { useEffect, useRef, useState } from "react";
import "./App.css";
import Button from './Button';

const App = () => {
    const [time, setTime] = useState(0); 
    const [running, setRunning] = useState(false);

    const intervalRef = useRef(null);

   
    useEffect(() => {
        if (running) {
            intervalRef.current = setInterval(() => {
                setTime(prev => prev + 10);
            }, 10);
        } else {
            clearInterval(intervalRef.current);
        }

        
        return () => clearInterval(intervalRef.current);
    }, [running]);

    const formatTime = (ms) => {
        const milliseconds = Math.floor((ms % 1000) / 10);
        const seconds = Math.floor((ms / 1000) % 60);
        const minutes = Math.floor((ms / 60000) % 60);
        const hours = Math.floor(ms / 3600000);

        const pad = (num) => String(num).padStart(2, '0');
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
    };

    const handleStart = () => setRunning(true);
    const handleStop = () => setRunning(false);
    const handleReset = () => {
        setRunning(false);
        setTime(0);
    };

    return (
        <div className="parent">
            <div className="child">
                <div className="tabs">
                    <h3>StopTimer</h3>
               
                </div>
                <div className="output">
                    <div className="stop-out">
                        <input type="text" disabled value={formatTime(time)} />
                        <Button onStart={handleStart} onStop={handleStop} onReset={handleReset} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
