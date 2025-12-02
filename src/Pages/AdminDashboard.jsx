import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllAppointmentsAPI } from "../Service/allAPI";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const [appointments, setAppointments] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate()

    const loadAppointments = async () => {
        try {
            const result = await getAllAppointmentsAPI();
            if (result.status === 200) {
                setAppointments(result.data);
            } else {
                toast.error("Failed to load appointments");
            }
        } catch (err) {
            console.log(err);
            toast.error("Server error");
        }
    };

    useEffect(() => {
        loadAppointments();
    }, []);

    const filtered = appointments.filter(a =>
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.department.toLowerCase().includes(search.toLowerCase())
    );

    const Logout = () =>{
        toast.success("Logged Out Successfully")
        setTimeout(() => {
            navigate('/')
        }, 1500);
    }

    return (
        <>
            <div className="p-md-5 p-3" style={{ backgroundColor: '#3473d8ff', minHeight: "100vh" }}>
                <h6 className="text-end"><button onClick={Logout} className="btn bg-light rounded-5">Logout</button></h6>
                <h1 className="fw-bold text-center pt-md-3 text-light headings"
                    style={{ letterSpacing: '1px' }}>
                    Admin Dashboard
                </h1>
                <p className="text-center text-light opacity-75 m-0 pb-md-4 pb-3 contents">
                    Manage all booked appointments from one place
                </p>

                <div className="d-flex justify-content-center mb-4">
                    <input
                        type="text"
                        className="form-control rounded-4 contents border-0 appointmentBox"
                        style={{ width: "40%", border: "solid 2px #fff" }}
                        placeholder="Search by name or department..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>

                <div className="d-flex justify-content-center">
                    <div
                        className="shadow bg-light p-md-4 p-3 rounded-5"
                        style={{ width: "90%" }}
                    >
                        <h4 className="mb-3 headings" style={{ color: '#3473d8ff', fontWeight: "600" }}>
                            Appointment Records
                        </h4>

                        <div style={{ overflowX: "auto" }}>
                            <table className="table table-bordered rounded-4" style={{ borderColor: '#3473d8ff' }}>
                                <thead className="text-center" style={{ background: "#3473d8ff", color: "#fff" }}>
                                    <tr>
                                        <th className="contents">Name</th>
                                        <th className="contents">Phone</th>
                                        <th className="contents">Email</th>
                                        <th className="contents">Date</th>
                                        <th className="contents">Department</th>
                                        <th className="contents">Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filtered.length === 0 ? (
                                        <tr>
                                            <td colSpan="6" className="text-center py-3">
                                                No appointments found
                                            </td>
                                        </tr>
                                    ) : (
                                        filtered.map((a, i) => (
                                            <tr key={i}>
                                                <td className="contents2">{a.name}</td>
                                                <td className="contents2">{a.number}</td>
                                                <td className="contents2">{a.email}</td>
                                                <td className="contents2">{new Date(a.date).toDateString("en-US")}</td>
                                                <td className="contents2">{a.department}</td>
                                                <td className="contents2">{a.message || "—"}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AdminDashboard;
