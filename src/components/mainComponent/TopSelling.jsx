import { useState, useEffect } from 'react'
import './TopSelling.css'
import CardFilter from './CardFilter';
import TopSellingItem from './TopSellingItem';
import topSelling from '../../data/topSellingData';

function TopSelling() {

  // const [topSelling, settopSelling] = useState([]);
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter);
  }

  // const fetchData = async () => {
  //   try {
  //     const res = await fetch('http://localhost:3000/topselling');
  //     if (!res.ok) {
  //       throw new Error(`HTTP error! Status: ${res.status}`);
  //     }
  //     const data = await res.json();
  //     settopSelling(data);
  //   } catch (e) {
  //     console.error('Error fetching data:', e.message);
  //   }
  // };
  

  // useEffect(() => {
  //   fetchData();
  // }, [])

  return (
    <div className='card top-selling overflow-auto'>
      <CardFilter filterChange={handleFilterChange} />

      <div className='card-body pb-0'>
        <h5 className='card-title'>
          Top Selling<span>| {filter}</span>
        </h5>

        <table className='table table-borderless'>
          <thead className='table-light'>
            <tr>
              <th scope='col'>Preview</th>
              <th scope='col'>Product</th>
              <th scope='col'>Price</th>
              <th scope='col'>Solid</th>
              <th scope='col'>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {
              topSelling && topSelling.length > 0 &&
              topSelling.map(item => (
                <TopSellingItem key={item._id} item={item} />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TopSelling