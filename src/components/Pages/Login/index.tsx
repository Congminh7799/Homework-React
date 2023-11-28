import { Navigate } from "react-router-dom";
import Login from "../../forms/Login";

const LoginForm = () => {
    const token = window.localStorage.getItem('authToken')
    if (token) {
        return <Navigate to="/home" replace />;
    }

    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <div className="border flex flex-col justify-center items-center p-20 round-">
                <h1 className="text-2xl font-extrabold text-white tracking-widest mb-2">Login</h1>
                <Login />
            </div>
        </main>
    );
};

export default LoginForm;