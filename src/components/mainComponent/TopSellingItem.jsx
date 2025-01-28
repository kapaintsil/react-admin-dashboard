import PropTypes from 'prop-types';

function TopSellingItem({ item }) {
  return (
    <tr>
      <th scope="row">
        <a href="#">
          <img src={item.preview} alt="product image" />
        </a>
      </th>
      <td>
        <a href="#" className="text-primary fw-bold">
          {item.name}
        </a>
      </td>
      <td>${item.price.toFixed(2)}</td>
      <td className="fw-bold">
        {item.sold}
      </td>
      <td>
        ${(item.price * item.sold).toLocaleString('en-US')}
      </td>
    </tr>
  );
}

// Prop validation
TopSellingItem.propTypes = {
  item: PropTypes.shape({
    preview: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    sold: PropTypes.number.isRequired,
  }).isRequired,
};

export default TopSellingItem;
