import './Main.css'
import Dashboard from './mainComponent/Dashboard'
import PageTitle from './mainComponent/PageTitle'

function Main() {
  return (
    <main id='main' className='main'>
      <PageTitle />
      <Dashboard/>
    </main>
  )
}

export default Main