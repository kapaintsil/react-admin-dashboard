import { useState } from 'react';
import './TopSelling.css';
import CardFilter from '../cardComponents/CardFilter';
import TopSellingItem from './TopSellingItem';
import topSelling from '../../../data/topSellingData';

function TopSelling() {
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="card top-selling overflow-auto">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body pb-0">
        <h5 className="card-title">
          Top Selling<span>| {filter}</span>
        </h5>

        <table className="table table-borderless">
          <thead className="table-light">
            <tr>
              <th scope="col">Preview</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Solid</th>
              <th scope="col">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {topSelling &&
              topSelling.length > 0 &&
              topSelling.map((item) => (
                <TopSellingItem key={item._id} item={item} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopSelling;
