import "./Button.css";

const Btn = ({ color, text, onClick }) => {
    return (
        <button
            style={{ backgroundColor: color, borderRadius: "20px" }}
            className="btn"
            onClick={onClick}
        >
            <h3 style={{ textAlign: "center", color: "white" }}>{text}</h3>
        </button>
    );
};

const Button = ({ onStart, onStop, onReset }) => {
    return (
        <div className="button-container">
            <Btn color="green" text="Start" onClick={onStart} />
            <Btn color="red" text="Stop" onClick={onStop} />
            <Btn color="orange" text="Reset" onClick={onReset} />
        </div>
    );
};

export default Button;
