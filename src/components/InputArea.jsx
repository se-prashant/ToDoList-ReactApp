import React, { useState } from "react";

function InputArea(props) {

    const [userInput, setInputText] = useState("");

    function handleChange(event) {
        const newVal = event.target.value;
        setInputText(newVal);
    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" value={userInput} />
            <button onClick={() => {
                props.addItem(userInput);
                setInputText(" ")
            }
            }>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;
