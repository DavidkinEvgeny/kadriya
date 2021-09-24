import Logo from '../Logo'
import MainMenu from '../MainMenu'
import Social from '../Social'
import './index.scss'


export default function Header() {
  return(
    <div className='Header'>
      <Logo myClass='header'/>
      <Social block='header' />
      <MainMenu />
    </div>
  )
}