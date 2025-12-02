import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div>
        <Navbar expand='lg' className='shadow py-md-4'>
      <Container className='px-md-0'>
        <Link to={'/'}  className='text-decoration-none'><Navbar.Brand style={{background: 'linear-gradient(to right, #3473d8ff, #29ccc0)', WebkitBackgroundClip: 'text', color: 'transparent',fontSize:'28px'}} className='fw-bold brandName'> <i className="fa-solid fa-circle-h"></i> Raynott <span className='brandName2' style={{fontSize:'20px'}}>Multi Speciality Hospital</span>  </Navbar.Brand></Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className=' d-flex justify-content-center gap-sm-5 gap-2 flex-wrap' style={{fontWeight:'500'}}>
            <Link to={'/'} className=' text-decoration-none brandName2' style={{color:'#3b7eeaff'}}>Home</Link>
            <Link to={'/departments'} className=' text-decoration-none brandName2' style={{color:'#3b7eeaff'}}>Departments</Link>
            <Link to={'/doctors'} className=' text-decoration-none brandName2' style={{color:'#3b7eeaff'}}>Doctors</Link>
            <Link to={'/about'} className=' text-decoration-none brandName2' style={{color:'#3b7eeaff'}}>About Us</Link>
            <Link to={'/login'} className=' text-decoration-none brandName2' style={{color:'#3b7eeaff'}}>Admin</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}

export default Header