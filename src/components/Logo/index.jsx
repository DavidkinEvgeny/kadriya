import './index.scss'
import logo from '../../logo.png'

export default function Logo({myClass}) {
  const classes = ['Logo', myClass]
  return(
    <div className={classes.join(' ')}>
      <a href="/"><img src={logo} alt='logo' /></a>
    </div>
  )
}