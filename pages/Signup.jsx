import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !password) {
            setError(" Please enter all the fields");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "users", userCredential.user.uid), {
                firstName,
                lastName,
                email
            });
            navigate("/login");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-grey-300" style={{width: '100vw'}}>
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Create Account</h2>
                
                <form onSubmit={handleSignUp} className="space-y-3">
                    <input
                        type="text" placeholder="First Name"
                        value={firstName} onChange={(e) => setFirstName(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                    <input
                        type="text" placeholder="Last Name"
                        value={lastName} onChange={(e) => setLastName(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                    <input
                        type="email" placeholder="Email"
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                    <input
                        type="password" placeholder="Password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded-md"
                    />
                    <button type="submit" className="w-full bg-teal-400 text-black py-2 rounded-md hover:bg-teal-500 transition">
                        Sign Up
                    </button>
                </form>
                {error && <p className="text-red-500 mt-3">{error}</p>}

                <p className="mt-4 text-sm text-center">
                    Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
}

export default SignUp;
