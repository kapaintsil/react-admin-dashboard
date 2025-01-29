import PropTypes from 'prop-types';

function RecentSalesTable({ recentSales }) {
  
  const handleStatus = (status) => {
    switch (status) {
      case 'Approved':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Rejected':
        return 'danger';
      default:
        return 'success';
    }
  };
  
  return (
    <table className="table table-borderless data-table">
      <thead className="table-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Customer</th>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {
          recentSales && recentSales.length > 0 &&
          recentSales.map(item => (
            <tr key={item._id}>
              <th scope="row">
                <a href="#">{item.number}</a>
              </th>
              <td>{item.customer}</td>
              <td>
                <a href="#" className="text-primary">
                  {item.product}
                </a>
              </td>
              <td>GH₵{item.price.toFixed(2)}</td>
              <td>
                <span className={`badge bg-${handleStatus(item.status)}`}>
                  {item.status}
                </span>
              </td>
            </tr> 
          ))
        }
      </tbody>
    </table>
  )
}

// Prop validation
RecentSalesTable.propTypes = {
  recentSales: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      customer: PropTypes.string.isRequired,
      product: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      status: PropTypes.oneOf(['Approved', 'Pending', 'Rejected']).isRequired,
    })
  ).isRequired,
};

export default RecentSalesTable;
