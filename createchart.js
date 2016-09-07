const $ = jQuery = require('./node_modules/jquery/dist/jquery.min.js')
const Highcharts = require('./node_modules/highcharts/highcharts.js')

$(document).ready(function() {
  var chart = new Highcharts.Chart({
    chart: {
      renderTo: 'put-chart-here',
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [
      {
        name: 'Jane',
        data: [1, 0, 4]
      },
      {
        name: 'John',
        data: [5, 7, 3]
      }
    ]
  });
})