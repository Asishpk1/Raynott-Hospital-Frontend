import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"


//API Call Registering Appointment
export const addAppointmentAPI = async (reqBody) =>{
   return await commonAPI("POST",`${SERVER_URL}/add-appointment`,reqBody)
}

//API Call to get Appointments
export const getAllAppointmentsAPI = async () =>{
   return await commonAPI("GET",`${SERVER_URL}/appointments`,{})
}

//API Call for Admin Login
export const AdminLoginAPI = async (reqBody) =>{
   return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}