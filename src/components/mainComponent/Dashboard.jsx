import './Dashboard.css';
import Report from './reportComponents/Report';
import RecentSales from './salesComponents/RecentSales';
import TopSelling from './topSellingComponents/TopSelling';
import RecentActivity from './activityComponents/RecentActivity';
import BudgetReport from './budgetComponents/BudgetReport';
import WebTraffic from './trafficComponents/WebTraffic';
import News from './newsComponents/News';
import Cards from './cardComponents/Cards';

// Dashboard component
function Dashboard() {
  return (
    <section className="dashboard">
      <div className="row">
        <div className="col-lg-8">
          <div>
            <Cards /> {/* Cards component */}
            <div className="col-12">
              <Report /> {/* Report component */}
            </div>
          </div>
          <div className="col-12">
            <RecentSales /> {/* RecentSales component */}
          </div>
          <div className="col-12">
            <TopSelling /> {/* TopSelling component */}
          </div>
        </div>
        <div className="col-lg-4">
          <RecentActivity /> {/* RecentActivity component */}
          <BudgetReport /> {/* BudgetReport component */}
          <WebTraffic /> {/* WebTraffic component */}
          <News /> {/* News component */}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
