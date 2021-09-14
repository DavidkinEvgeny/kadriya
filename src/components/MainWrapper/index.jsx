import Footer from '../Footer'
import Header from '../Header'
import './index.scss'


export default function MainWrapper({children}) {
  return (
    <div >
      <Header />
      {children}
      <Footer />
    </div>
  )
}