

import PropTypes from 'prop-types';

function NewsPostItem({ item }) {
  return (
    <div className="post-item clearfix mt-0">
      <img src={item.img} alt="news image" />
      <h6 className='fw-800 text-success'>{item.category}</h6>
      <h4>
        <a href="#">{item.title}</a>
      </h4>
      <p>{item.subtitle}</p>
    </div>
  );
}

NewsPostItem.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsPostItem;
