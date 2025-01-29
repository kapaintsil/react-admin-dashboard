import PropTypes from 'prop-types';

function RecentActivityItem({ activity }) {
  
  return (
    <div className="activity-item d-flex">
      <div className='activity-label'>{activity.time}</div>
      <i
        className={`bi bi-circle-fill activity-badge ${activity.color} align-self-start`}
      >
      </i>
      {activity.highlight === '' ? (
        <div className='activity-content'>{activity.content}</div>
      ) : (
          <div className='activity-content'>
            {activity.content.substring(0, activity.content.indexOf(activity.highlight))}
            <a href="#" className='fw-bold text-dark'>
              {activity.highlight}
            </a>
            {activity.content.slice(
                activity.content.indexOf(activity.highlight) + activity.highlight.length
              )}
          </div>
      )}
    </div>
  );
}

// **Prop Validation**
RecentActivityItem.propTypes = {
  activity: PropTypes.shape({
    time: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired, 
  }).isRequired,
};

export default RecentActivityItem;
