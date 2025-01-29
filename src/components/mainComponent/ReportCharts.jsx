import Chart from 'react-apexcharts';
import reportData from '../../data/reportData';

function ReportCharts() {

  return (
    <Chart
      options={reportData.options}
      series={reportData.series}
      type={reportData.options.chart.type}
      height={reportData.options.chart.height}
    />
  )
}

export default ReportCharts