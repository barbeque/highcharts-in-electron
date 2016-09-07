const $ = jQuery = require('jquery')
const Highcharts = require('highcharts')
// Load highcharts data module (for CSV) into Highcharts - this is how you do it
require('highcharts/modules/data')(Highcharts)

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