import { useState, useEffect } from 'react';

import './Dashboard.css'
import Card from './Card';
import Report from './Report';
import RecentSales from './RecentSales';
import TopSelling from './TopSelling';


function Dashboard() {

  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3000/cards');
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setCards(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        </div>
      </div>
    </section>
  )
}

export default Dashboard;