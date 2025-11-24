import Card from 'react-bootstrap/Card';
import heart from '../assets/heart.png'
import brain from '../assets/brain.png'
import bone from '../assets/bone.png'
import child from '../assets/child.png'
import lab from '../assets/lab.png'
import sur from '../assets/sur.png'
import doctor from '../assets/doctor.png'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ backgroundColor: 'whitesmoke' }}>

            {/* First Section */}
            <div style={{ backgroundColor: '#3473d8ff' }}>
                <div className='text-light p-md-5 p-3'>
                    <h1 className='fw-bold pt-3 mainHead' style={{ letterSpacing: '1px' }}>Advanced Healthcare Excellence</h1>
                    <p className='mt-3 mb-4 contents'>Raynott Multi Speciality Hospital delivers world-class medical care backed by advanced technology.
                        Our team of highly skilled and compassionate professionals ensures every patient receives personalized attention. <br />
                        We focus on accurate diagnosis, effective treatment, and continuous support throughout the recovery process. <br />
                        The hospital is equipped with modern facilities designed to provide safe and comfortable care.
                        Our commitment is to enhance your wellbeing with excellence, integrity, and trust.</p>
                    <div className='d-flex align-items-center '>
                        <Link to={'/appointment'}><button className='btn bg-light py-md-3 px-md-4 rounded-5 me-4 contents' style={{ color: '#3473d8ff', fontWeight: '500' }}>Book Appointment</button></Link>
                        <Link to={'/departments'}><button className='btn py-md-3 px-md-4 rounded-5 text-light border border-light border-3 contents' style={{ fontWeight: '500' }}>Our Services</button></Link>
                    </div>

                    <div className='text-center mt-4'>
                        <h1 className='fw-bold'>50+</h1>
                        <h6 className='fw-light mb-4 contents'>Specialist Doctors</h6>
                        <h1 className='fw-bold'>15+</h1>
                        <h6 className='fw-light  mb-4 contents'>Departments</h6>
                        <h1 className='fw-bold'>24/7</h1>
                        <h6 className='fw-light  mb-4 contents'>Emergency Care</h6>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className='p-md-5 p-3'>
                <h1 className='text-center pt-3 fw-bold mt-md-4 subHead' style={{ color: '#3473d8ff' }}>Why Choose Raynott Hospital</h1>
                <p className='text-secondary px-md-5 contents' style={{ textAlign: 'center' }}>Experience comprehensive healthcare services supported by state of the art facilities and advanced medical technology.
                    Our expert professionals deliver accurate diagnosis and effective treatment across multiple specialties.
                    We prioritize patient safety, comfort, and individualized care at every step.
                    From preventive health to critical care, our team ensures seamless support throughout your journey.
                    Your wellbeing remains our highest commitment.</p>

                <div>
                    <div className='mt-5 d-flex flex-wrap justify-content-around gap-5'>
                        <Card style={{ width: '20rem' }} className='shadow border-0 rounded-5 p-md-4 p-2'>
                            <Card.Body>
                                <div className='mb-4 rounded-4 d-flex justify-content-center' style={{ background: "radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.15), transparent 60%), linear-gradient(90deg, #328df5ff 0%, #21aee2ff 40%, #38aef2ff 100%)", width: '35%', padding: '32px 20px' }}>
                                    <i className="fa-regular fa-hospital text-light fa-2xl"></i>
                                </div>
                                <Card.Title className='subHead' style={{ fontWeight: '600' }}>Advanced Technology</Card.Title>
                                <Card.Text className='text-secondary contents' style={{ fontSize: '14px' }}>
                                    Equipped with the latest medical equipment and diagnostic tools for accurate diagnosis and effective treatment.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem' }} className='shadow border-0 rounded-5 p-md-4 p-2'>
                            <Card.Body>
                                <div className='mb-4 rounded-4 d-flex justify-content-center' style={{ background: "radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.15), transparent 60%), linear-gradient(90deg, #328df5ff 0%, #21aee2ff 40%, #38aef2ff 100%)", width: '35%', padding: '32px 20px' }}>
                                    <i class="fa-solid fa-user-doctor text-light fa-2xl"></i>
                                </div>
                                <Card.Title className='subHead' style={{ fontWeight: '600' }}>Expert Doctors</Card.Title>
                                <Card.Text className='text-secondary contents' style={{ fontSize: '14px' }}>
                                    Board-certified specialists with extensive experience in their respective fields of medicine.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem' }} className='shadow border-0 rounded-5 p-md-4 p-2'>
                            <Card.Body>
                                <div className='mb-4 rounded-4 d-flex justify-content-center' style={{ background: "radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.15), transparent 60%), linear-gradient(90deg, #328df5ff 0%, #21aee2ff 40%, #38aef2ff 100%)", width: '35%', padding: '32px 20px' }}>
                                    <i class="fa-solid fa-truck-medical text-light fa-2xl"></i>
                                </div>
                                <Card.Title className='subHead' style={{ fontWeight: '600' }}>24/7 Emergency</Card.Title>
                                <Card.Text className='text-secondary contents' style={{ fontSize: '14px' }}>
                                    Round-the-clock emergency services with immediate medical attention and ambulance facilities.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20rem' }} className='shadow border-0 rounded-5 p-md-4 p-2'>
                            <Card.Body>
                                <div className='mb-4 rounded-4 d-flex justify-content-center' style={{ background: "radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.15), transparent 60%), linear-gradient(90deg, #328df5ff 0%, #21aee2ff 40%, #38aef2ff 100%)", width: '35%', padding: '32px 20px' }}>
                                    <i class="fa-solid fa-capsules text-light fa-2xl"></i>
                                </div>
                                <Card.Title className='subHead' style={{ fontWeight: '600' }}>Comprehensive Care</Card.Title>
                                <Card.Text className='text-secondary contents' style={{ fontSize: '14px' }}>
                                    Complete healthcare solutions from diagnosis to treatment and post-operative care.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Third Section */}
            <div className='p-md-5 p-3 mt-5' style={{ backgroundColor: 'white' }}>
                <h1 className='fw-bold text-center mt-md-5 subHead' style={{ letterSpacing: '1px', color: '#3473d8ff' }}>Our Departments</h1>
                <p className='text-center text-secondary contents'>Specialized medical services across multiple disciplines</p>
                <div className='d-flex flex-wrap justify-content-center mt-5'>
                    <div className='d-flex flex-wrap justify-content-around gap-4 w-75'>
                        <div className='py-md-5 p-3 rounded-5 dprtmntBox' style={{ backgroundColor: '#3473d8ff', width: '27%' }}>
                            <div className='d-flex justify-content-center'><img src={heart} alt="" style={{ width: '70px' }} /></div>
                            <h4 className='text-light text-center mt-md-4 subHead' style={{ fontWeight: '600' }}>Cardiology</h4>
                            <p className='text-light fw-light text-center opacity-75 contents'>Heart Care</p>
                        </div>
                        <div className='py-md-5 p-3 rounded-5 dprtmntBox' style={{ backgroundColor: '#3473d8ff', width: '27%' }}>
                            <div className='d-flex justify-content-center'><img src={brain} alt="" style={{ width: '70px' }} /></div>
                            <h4 className='text-light text-center mt-md-4 subHead' style={{ fontWeight: '600' }}>Neurology</h4>
                            <p className='text-light fw-light text-center opacity-75 contents'>Brain & Nervous System</p>
                        </div>
                        <div className='py-md-5 p-3 rounded-5 dprtmntBox ' style={{ backgroundColor: '#3473d8ff', width: '27%' }}>
                            <div className='d-flex justify-content-center'><img src={bone} alt="" style={{ width: '70px' }} /></div>
                            <h4 className='text-light text-center mt-md-4 subHead' style={{ fontWeight: '600' }}>Orthopedics</h4>
                            <p className='text-light fw-light text-center opacity-75 contents'>Bone & Joint Care</p>
                        </div>
                        <div className='py-md-5 p-3 rounded-5 dprtmntBox' style={{ backgroundColor: '#3473d8ff', width: '27%' }}>
                            <div className='d-flex justify-content-center'><img src={child} alt="" style={{ width: '70px' }} /></div>
                            <h4 className='text-light text-center mt-md-4 subHead' style={{ fontWeight: '600' }}>Pediatrics</h4>
                            <p className='text-light fw-light text-center  opacity-75 contents'>Child HealthCare</p>
                        </div>
                        <div className='py-md-5 p-3 rounded-5 dprtmntBox' style={{ backgroundColor: '#3473d8ff', width: '27%' }}>
                            <div className='d-flex justify-content-center'><img src={lab} alt="" style={{ width: '70px' }} /></div>
                            <h4 className='text-light text-center mt-md-4 subHead' style={{ fontWeight: '600' }}>Pathology</h4>
                            <p className='text-light fw-light text-center  opacity-75 contents'>Lab Services</p>
                        </div>
                        <div className='py-md-5 p-3 rounded-5 dprtmntBox' style={{ backgroundColor: '#3473d8ff', width: '27%' }}>
                            <div className='d-flex justify-content-center'><img src={sur} alt="" style={{ width: '70px' }} /></div>
                            <h4 className='text-light text-center mt-md-4 subHead' style={{ fontWeight: '600' }}>Surgery</h4>
                            <p className='text-light fw-light text-center  opacity-75 contents'>Surgical Care</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fourth Section */}
            <div className='p-md-5 p-3 mt-3 mt-md-0'>
                <h1 className='fw-bold text-center mt-md-5 subHead' style={{ letterSpacing: '1px', color: '#3473d8ff' }}>Our Expert Doctors</h1>
                 <p className='text-center text-secondary contents'>Meet our highly qualified and experienced medical professionals</p>
                <div className='d-flex flex-wrap justify-content-around mt-md-5 gap-3'>
                    <Card className='border-0 shadow rounded-5 p-3' style={{ width: '18rem' }}>
                        <div className='d-flex justify-content-center'>
                            <Card.Img variant="top" src={doctor} className='w-50' />
                        </div>
                        <Card.Body>
                            <Card.Title className='subHead'>Dr. Sarah Johnson</Card.Title>
                             <Card.Subtitle className="mb-2 contents" style={{color:'#3473d8ff'}}>Cardiologist</Card.Subtitle>
                            <Card.Text className='text-secondary fw-light' style={{fontSize:'13px',textAlign:'justify'}}>
                                15+ years experience in cardiac care and interventional cardiology. MBBS, MD, DM Cardiology
                            </Card.Text>
                            <Link to={'/appointment'}><Button className='rounded-5 w-100 contents ' style={{backgroundColor:'#3473d8ff',fontWeight:'500',fontSize:'14px'}}>Book Appointment</Button></Link>
                        </Card.Body>
                    </Card>
                    <Card className='border-0 shadow rounded-5 p-3' style={{ width: '18rem' }}>
                        <div className='d-flex justify-content-center'>
                            <Card.Img variant="top" src={doctor} className='w-50' />
                        </div>
                        <Card.Body>
                            <Card.Title className='subHead'>Dr. Michael Chen</Card.Title>
                             <Card.Subtitle className="mb-2 contents" style={{color:'#3473d8ff'}}>Neurologist</Card.Subtitle>
                            <Card.Text className='text-secondary fw-light' style={{fontSize:'13px',textAlign:'justify'}}>
                                Expert in treating neurological disorders with 12+ years experience. MBBS, MD, DM Neurology
                            </Card.Text>
                            <Link to={'/appointment'}><Button className='rounded-5 w-100 contents' style={{backgroundColor:'#3473d8ff',fontWeight:'500',fontSize:'14px'}}>Book Appointment</Button></Link>
                        </Card.Body>
                    </Card>
                    <Card className='border-0 shadow rounded-5 p-3' style={{ width: '18rem' }}>
                        <div className='d-flex justify-content-center'>
                            <Card.Img variant="top" src={doctor} className='w-50' />
                        </div>
                        <Card.Body>
                            <Card.Title className='subHead'>Dr. Emily Rodriguez</Card.Title>
                             <Card.Subtitle className="mb-2 contents" style={{color:'#3473d8ff'}}>Pediatrician</Card.Subtitle>
                            <Card.Text className='text-secondary fw-light' style={{fontSize:'13px',textAlign:'justify'}}>
                              Specialized in child healthcare with 10+ years of expertise, MBBS, MD Pediatrics, precise patient focused and experienced
                            </Card.Text>
                            <Link to={'/appointment'}><Button className='rounded-5 w-100 contents' style={{backgroundColor:'#3473d8ff',fontWeight:'500',fontSize:'14px'}}>Book Appointment</Button></Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            {/* Fifth Section */}
            <div className='mt-5'>
                <div className='p-md-5 p-3 d-flex flex-column align-items-center' style={{backgroundColor:'#3473d8ff'}}>
                    <h1 className='fw-bold text-center mt-md-5 text-light subHead' style={{ letterSpacing: '1px'}}>Book An Appointment</h1>
                 <p className='text-center text-light opacity-75 contents'>Schedule your visit with our expert doctors today</p>
                 <Link to={'/appointment'}><button className='btn bg-light py-md-3 px-4 rounded-5 mt-md-4 contents' style={{ color: '#3473d8ff', fontWeight: '500' }}>Book Appoinment <i className='fa-solid fa-arrow-right'></i></button></Link>
                </div>
            </div>

        </div>
    )
}

export default Home