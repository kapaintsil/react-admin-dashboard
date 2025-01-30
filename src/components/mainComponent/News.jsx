import { useState } from 'react';
import CardFilter from './CardFilter';
import news from '../../data/newsData';
import './News.css'
import NewsPostItem from './NewsPostItem';

function News() {

  const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
      setFilter(filter);
    }

  return (
    <div className='card'>
      <CardFilter filterChange={handleFilterChange} />

      <div className='card-body'>
        <h5 className='card-title'>
          News<span>| {filter}</span>
        </h5>
        <div className='news'>
          {
            news && news.length > 0 &&
            news.map(item => (
              <NewsPostItem key={item._id} item={item} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default News;