import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function Login({ setIsAuthenticated }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleEmailLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError(" enter both fields");
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setIsAuthenticated(true);
            navigate("/dashboard");
        } catch (err) {
            setError(" Invalid Email or Password");
        }
    };

    

    return (
        <div className="flex justify-center items-center h-screen bg-grey-300" style={{width: '100vw'}}>
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-4"> Login Page</h2>

                <form onSubmit={handleEmailLogin} className="space-y-3">
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                    <button type="submit" className="w-full bg-grey-400 text-black py-2 rounded-md hover:bg-grey-500 transition">
                        Login
                    </button>
                </form>

                

                <p className="mt-4 text-sm text-center">
                    Do not have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
