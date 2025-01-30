import { useState } from "react";
import CardFilter from "./CardFilter";
import RecentActivityItem from "./RecentActivityItem";
import recentActivity from "../../data/recentActivityData";
import './RecentActivity.css'

function RecentActivity() {

  const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
      setFilter(filter);
    }

  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body">
        <h5 className="card-title">
          Recent Activity<span>| {filter}</span>
        </h5>

        <div className="activity">
          {
            recentActivity && recentActivity.length > 0 &&
            recentActivity.map(activity => (
              <RecentActivityItem key={activity._id} activity={activity} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default RecentActivity;