import { useState, useEffect } from 'react';
import CardFilter from './CardFilter';
import RecentSalesTable from './RecentSalesTable';
import './RecentSales.css';

function RecentSales() {

  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter);
  }

  const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:3000/recentsales');
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setItems(data);
    } catch (e) {
      console.error('Error fetching data:', e.message);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='card recent-sales overflow-auto'>
      <CardFilter filterChange={handleFilterChange} />

      <div className='card-body'>
        <h5 className='card-title'>
          Recent Sales<span>| {filter}</span>
        </h5>
        <RecentSalesTable items={items} />
      </div>
    </div>
  )
}

export default RecentSales