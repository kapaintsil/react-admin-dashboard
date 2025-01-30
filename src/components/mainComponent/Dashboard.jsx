import './Dashboard.css';
import Report from './reportComponents/Report';
import RecentSales from './salesComponents/RecentSales';
import TopSelling from './topSellingComponents/TopSelling';
import RecentActivity from './activityComponents/RecentActivity';
import BudgetReport from './budgetComponents/BudgetReport';
import WebTraffic from './trafficComponents/WebTraffic';
import News from './newsComponents/News';
import Cards from './cardComponents/Cards';

function Dashboard() {
  return (
    <section className="dashboard">
      <div className="row">
        <div className="col-lg-8">
          <div>
            <Cards />
            <div className="col-12">
              <Report />
            </div>
          </div>
          <div className="col-12">
            <RecentSales />
          </div>
          <div className="col-12">
            <TopSelling />
          </div>
        </div>
        <div className="col-lg-4">
          <RecentActivity />
          <BudgetReport />
          <WebTraffic />
          <News />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
