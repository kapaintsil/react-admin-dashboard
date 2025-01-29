
import './Dashboard.css'
import Card from './Card';
import Report from './Report';
import RecentSales from './RecentSales';
import TopSelling from './TopSelling';
import cards from '../../data/cardData';
import RecentActivity from './RecentActivity';

function Dashboard() {

  return (
    <section  className='dashboard'>
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {
              cards && cards.length > 0 && 
              cards.map(card => <Card key={card._id} card={card} />)
            }
            <div className='col-12'>
              <Report />
            </div>
          </div>
          <div className='col-12'>
            <RecentSales />
          </div>
          <div className='col-12'>
            <TopSelling />
          </div>
        </div>
        <div className="col-lg-4">
          <RecentActivity />
        </div>
      </div>
    </section>
  )
}

export default Dashboard;