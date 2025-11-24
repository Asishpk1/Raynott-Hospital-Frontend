import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addAppointmentAPI } from '../Service/allAPI';

const Appointment = () => {

    const [appointmentDetails,setAppointmentDetails] = useState({name:"",number:"",email:"",date:"",department:"",message:""})
    console.log(appointmentDetails);

    const registerAppointment = async () =>{
        const {name,number,email,date,department,message} = appointmentDetails

        if(name && number && email && date && department){
            try{
                const result = await addAppointmentAPI(appointmentDetails)
                console.log(result);
                if(result.status == 200){
                    toast.success("Appointment booked")
                    setAppointmentDetails({name:"",number:"",email:"",date:"",department:"",message:""})
                }
                if(result.status == 401){
                    console.log(result.response.data);
                    
                }
                
            }
            catch(err){
                console.log(err);
                
            }
        }
        else{
            toast.warning("Enter all Fields")
        }
    }
    
    return (
        <>
            <div className='p-md-5 p-3' style={{ backgroundColor: '#3473d8ff' }}>
                <h1 className='fw-bold text-center pt-md-5 text-light mainHead' style={{ letterSpacing: '1px' }}>Book An Appointment</h1>
                <p className='text-center text-light opacity-75 m-0 pb-md-5 pb-3 contents'>Schedule your visit with our expert doctors today</p>
                <div className='d-flex justify-content-center'>
                    <div className='d-flex flex-column shadow bg-light p-md-5 p-3 rounded-5 appointmentBox' style={{ width: '40%' }}>
                        <span className='mb-2 contents' style={{ color: '#3473d8ff', fontWeight: '500' }}>Full Name</span>
                        <input onChange={(e)=>setAppointmentDetails({...appointmentDetails,name:e.target.value})} value={appointmentDetails.name} type="text" className='form-control rounded-4 opacity-50 mb-4 contents' style={{ border: 'solid 2px #3473d8ff' }} placeholder='Enter your name' />
                        <span className='mb-2 contents' style={{ color: '#3473d8ff', fontWeight: '500' }}>Phone Number</span>
                        <input onChange={(e)=>setAppointmentDetails({...appointmentDetails,number:e.target.value})} value={appointmentDetails.number} type="number" className='form-control rounded-4 opacity-50 mb-4 contents' style={{ border: 'solid 2px #3473d8ff' }} placeholder='Enter your Phone number' />
                        <span className='mb-2 contents' style={{ color: '#3473d8ff', fontWeight: '500' }}>Email Address</span>
                        <input onChange={(e)=>setAppointmentDetails({...appointmentDetails,email:e.target.value})} value={appointmentDetails.email} type="email" className='form-control rounded-4 opacity-50 mb-4 contents' style={{ border: 'solid 2px #3473d8ff' }} placeholder='john@example.com' />
                        <span className='mb-2 contents' style={{ color: '#3473d8ff', fontWeight: '500' }}>Preferred Date</span>
                        <input onChange={(e)=>setAppointmentDetails({...appointmentDetails,date:e.target.value})} value={appointmentDetails.date} type="date" className='form-control rounded-4 opacity-50 mb-4 contents' style={{ border: 'solid 2px #3473d8ff' }} />
                        <span className='mb-2 contents' style={{ color: '#3473d8ff', fontWeight: '500' }}>Department</span>
                        <Form.Select onChange={(e)=>setAppointmentDetails({...appointmentDetails,department:e.target.value})} className='form-control rounded-4 opacity-50 mb-4 contents' style={{ border: 'solid 2px #3473d8ff' }}  aria-label="Default select example">
                            <option value="">Open this select menu</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Neurology">Neurology</option>
                            <option value="Orthopedics">Orthopedics</option>
                            <option value="Pediatrics">Pediatrics</option>
                            <option value="General Medicine">General Medicine</option>
                        </Form.Select>
                        <span className='mb-2 contents' style={{ color: '#3473d8ff', fontWeight: '500' }}>Message (Optional)</span>
                        <input onChange={(e)=>setAppointmentDetails({...appointmentDetails,message:e.target.value})} value={appointmentDetails.message}  type="text" className='form-control rounded-4 opacity-50 mb-4 contents' style={{ border: 'solid 2px #3473d8ff' }} placeholder='Brief description of your health concern' />
                        <button onClick={registerAppointment} className='btn text-light py-md-3 px-4 rounded-5 mt-md-4 contents' style={{ backgroundColor: '#3473d8ff', fontWeight: '500' }}>Book Appoinment <i className='fa-solid fa-arrow-right'></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appointment