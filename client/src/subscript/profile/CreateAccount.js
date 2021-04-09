import { useState } from "react";

const CreateAccount = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleCreateAccount = (e) => {
        const EP = {email, password};

        fetch('http://localhost:8000/account', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(EP)
        });
    }

    return (
        <form className="login-form" onSubmit={handleCreateAccount}> 
            <div className="input-field-container">
                <input
                className="input-field"
                type = "email"
                placeholder = "Email"
                required
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="login-divider" />

            <div className="input-field-container">
                <input
                className="input-field"
                type = "password"
                placeholder = "Password"
                required
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="login-button">Create Account</button>
        </form>
    );
}
export default CreateAccount;