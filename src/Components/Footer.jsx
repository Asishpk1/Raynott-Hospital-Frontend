import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='container-fluid shadow'>
                <div className='row d-flex justify-content-between p-md-5 p-3 gap-4' style={{ backgroundColor: 'white' }}>
                    <div className="col-md-4">
                        <h2 className='fw-bold subHead' style={{ color: '#3473d8ff' }}> <i className="fa-solid fa-circle-h"></i> Raynott <span className='brandName2' style={{ fontSize: '20px' }}>Multi Speciality Hospital</span>  </h2>
                        <p style={{ fontSize: '15px' }} className='text-secondary opacity-75 contents'>Leading healthcare provider committed to excellence in medical services and patient care.</p>
                        <div className='d-flex justify-content-between gap-2'>
                            <Link className='p-2 rounded-5' style={{ backgroundColor: 'rgba(82, 78, 78, 0.2)' }} to={'https://www.instagram.com/asish.p_/'}><i className="fa-brands fa-facebook fa-lg" ></i></Link>
                            <Link className='p-2 rounded-5' style={{ backgroundColor: 'rgba(82, 78, 78, 0.2)' }} to={'https://www.instagram.com/asish.p_/'}><i className="fa-brands fa-twitter fa-lg " ></i></Link>
                            <Link className='p-2 rounded-5' style={{ backgroundColor: 'rgba(82, 78, 78, 0.2)' }} to={'https://www.instagram.com/asish.p_/'}><i className="fa-brands fa-instagram fa-lg" ></i></Link>
                            <Link className='p-2 rounded-5' style={{ backgroundColor: 'rgba(82, 78, 78, 0.2)' }} to={'https://www.linkedin.com/in/asish-krishna-p/'}><i className="fa-brands fa-linkedin fa-lg" ></i></Link>
                            <Link className='p-2 rounded-5' style={{ backgroundColor: 'rgba(82, 78, 78, 0.2)' }} to={'https://www.instagram.com/asish.p_/'}><i className="fa-solid fa-phone fa-lg" ></i></Link>
                        </div>
                    </div>
                    <div className="col-md-2 d-flex flex-column">
                        <h5 className='fw-bold subHead' style={{ color: '#3473d8ff' }}>Quick Links</h5>
                        <Link to={'/departments'} className='text-decoration-none contents' style={{ fontSize: '14px' }}>Departments</Link>
                        <Link to={'/doctors'} className='text-decoration-none contents' style={{ fontSize: '14px' }}>Our Doctors</Link>
                        <Link to={'/appointment'} className='text-decoration-none contents' style={{ fontSize: '14px' }}>Book Appointment</Link>
                        <Link to={'/about'} className='text-decoration-none contents' style={{ fontSize: '14px' }}>About Us</Link>
                    </div>
                    <div className="col-md-3">
                        <h5 className='fw-bold subHead' style={{ color: '#3473d8ff' }}>Contact Info</h5>
                        <p style={{ fontSize: '15px' }} className='text-secondary opacity-75 contents'>
                            📍 123 Medical Center Drive
                            Healthcare City, HC 12345 <br />

                            📞 +1 (555) 123-4567 <br />

                            ✉️ info@raynotthospital.com
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer