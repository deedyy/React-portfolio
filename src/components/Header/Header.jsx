import './Header.css'
import Action from './Action'
import pic3 from '../../assets/pic3.png'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
       <h5>Hello My Name is</h5>
       <h1>Patience Udeh</h1>
       <h5 className='text-light'>Frontend Developer </h5>
      <Action/>
      
      
      
      </div>
      <div className='me'>
        <img src={pic3} alt= "potrait" />

      </div>
    </header>
  )
}

export default Header
