import { useState } from "react";

const CreateThreads = () => {
    const[name, setName] = useState('');

    const handleCreateThread = (e) => {
        const N = {name};
        e.preventDefault();
        fetch('http://localhost:8000/threads', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(N)
        });
    }

    return (
        <div id="disp-msg-cont">
            <div className="dm-title">New Thread</div>
            <form onSubmit={handleCreateThread}>
                <input 
                    type="text"
                    required
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    className="dm-new-msg"
                />
                <button className="dm-button">Create</button>
            </form>
        </div>
    );
}
 
export default CreateThreads;