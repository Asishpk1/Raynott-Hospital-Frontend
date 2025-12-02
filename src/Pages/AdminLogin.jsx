import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { AdminLoginAPI } from "../Service/allAPI";

const AdminLogin = () => {

    const [data, setData] = useState({ email: "", password: "" });
    const navigate = useNavigate()

    const handleLogin = async () => {
        if (!data.email || !data.password) {
            toast.warning("Enter all fields");
            return;
        }
        
        try {
            const result = await AdminLoginAPI(data)
            console.log(result);
            if(result.status==200){
                setData({ email: "", password: "" })
                toast.success("Successfully Logged in")
                setTimeout(() => {
                    navigate('/dashboard')
                }, 1500);
            }
        }
        catch (err) {
            console.log(err);

        }

    };

    return (
        <div
            style={{ backgroundColor: "whitesmoke", minHeight: "100vh" }}
            className="d-flex justify-content-center align-items-center p-3">
            <div
                className="shadow rounded-5 p-md-5 p-4"
                style={{ width: "450px", backgroundColor: "white" }}>

                <h5 style={{ color: "#3473d8ff" }} className="mb-1 contents fw-semibold contents2"> <i className="fa-solid fa-hospital"></i> Welcome Back</h5>

                <h1 className="fw-bold subHead" style={{ fontSize: "38px", color: "#3473d8ff" }}>Login</h1>

                <p className="text-secondary contents mb-4 contents">
                    Access your patient portal and manage appointments.
                </p>

                <div className="mb-3">
                    <label className="contents fw-semibold">Email Address</label>
                    <input type="email" className="form-control p-md-3 contents rounded-2" style={{ border: "1px solid #c4c4c4" }} placeholder="Enter your email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="contents fw-semibold">Password</label>
                    <input type="password" className="form-control rounded-2 p-md-3 contents" style={{ border: "1px solid #c4c4c4" }} placeholder="Ente your password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}
                    />
                </div>

                {/* Login Button */}
                <Button
                    className="w-100 rounded-5 contents" style={{ backgroundColor: "#3473d8ff", fontWeight: "500", padding: "12px", fontSize: "16px" }} onClick={handleLogin}
                >
                    Login <i className="fa-solid fa-arrow-right ms-1"></i>
                </Button>

            </div>
        </div>
    )
}

export default AdminLogin