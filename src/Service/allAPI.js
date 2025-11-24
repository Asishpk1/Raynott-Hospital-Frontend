import commonAPI from "./commonAPI"
import SERVER_URL from "./serverUrl"


//API Call Registering Appointment
export const addAppointmentAPI = async (reqBody) =>{
   return await commonAPI("POST",`${SERVER_URL}/add-appointment`,reqBody)
}