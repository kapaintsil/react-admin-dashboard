const reportData = {
  series: [
    {
      name: "Sales",
      data: [31, 40, 28, 51, 42, 82, 56]
    },
    {
      name: "Revenue",
      data: [11, 32, 45, 32, 34, 52, 41]
    },
    {
      name: "Customer",
      data: [15, 11, 32, 18, 18, 24, 11]
    },
    {
      name: "Profit",
      data: [5, 10, 7, 12, 9, 15, 11] 
    }
  ],
  options: {
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false
      }
    },
    marker: {
      size: 4,
    },
    colors: ['#4154f1', '#2eca6a', '#ff771d', '#e74c3c'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.4,
        stops: [0, 90, 100]
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2025-09-19T00:00:00.000Z',
        '2025-09-19T01:30:00.000Z',
        '2025-09-19T02:30:00.000Z',
        '2025-09-19T03:30:00.000Z',
        '2025-09-19T04:30:00.000Z',
        '2025-09-19T05:30:00.000Z',
        '2025-09-19T06:30:00.000Z',
      ]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy'
      }
    }
  }
};

export default reportData;
