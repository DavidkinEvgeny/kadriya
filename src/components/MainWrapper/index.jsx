import Footer from '../Footer'
import Header from '../Header'
import './index.scss'


export default function MainWrapper({children}) {
  return (
    <div >
      <Header myClass='header'/>
      {children}
      <Footer myClass='footer'/>
    </div>
  )
}