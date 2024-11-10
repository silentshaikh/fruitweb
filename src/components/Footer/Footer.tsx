import {FaInstagram} from 'react-icons/fa';
import {PiYoutubeLogoDuotone} from 'react-icons/pi';
import {BsFacebook} from 'react-icons/bs';
import '../../styles/footer.css'
import { Divider } from 'antd';
function Footer() {
  return (
    <footer style={{paddingTop:'40px'}}>
      <div className="footCont">
      <div className="footOne">
      <div className="logo">
        <img src='/images/favicon (1).png' alt="footImage" />
        <h3>Fruits</h3>
        </div>
        <p className='par'>Eat Healthy and Delcious Fruits</p>
      </div>
    <div className="footTwo">
      <h3>Address</h3>
      <p>Nottingham, UK</p>
      <p>6AM - 10PM</p>
    </div>
    <div className="footThree">
    <h3>Social Media</h3>
    <div className="icons">
    <FaInstagram className='icn' />
      <PiYoutubeLogoDuotone className='icn'/>
      <BsFacebook className='icn'/>
    </div>
    </div>
      </div>
      <Divider/>
      <p className='fot' style={{textAlign:'center', paddingBottom:'5px',}}>Copyright ©️ 2023 | <strong style={{color:'#34e7e4',}}>Fruits</strong> | All Right Reserved</p>
    </footer>
  )
}

export default Footer