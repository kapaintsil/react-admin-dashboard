import { useState } from 'react';
import CardFilter from './CardFilter';
import RecentSalesTable from './RecentSalesTable';
import recentSales from '../../data/recentSalesData';
import './RecentSales.css';

function RecentSales() {

  // const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter);
  }

  return (
    <div className='card recent-sales overflow-auto'>
      <CardFilter filterChange={handleFilterChange} />

      <div className='card-body'>
        <h5 className='card-title'>
          Recent Sales<span>| {filter}</span>
        </h5>
        <RecentSalesTable recentSales={recentSales} />
      </div>
    </div>
  )
}

export default RecentSales