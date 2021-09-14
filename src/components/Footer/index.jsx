import './index.scss'
import Logo from './../Logo/index';
import Social from './../Social/index';


export default function Footer() {
  return(
    <div className='Footer'>
      <Logo />
      <Social block='footer' />
    </div>
  )
}