import * as d3 from 'd3';
import { getData } from './api';

document.addEventListener('DOMContentLoaded', () => {
  app().catch((err) => console.error(err));
});

const width = 507;
const height = 300;
const padding = 50;

async function app() {
  d3.select('#chart')
    .append('svg')
    .attr('width', width + 2 * padding)
    .attr('height', height + 2 * padding);


  const dataUrl = '/api/v1/data';
  const data = await getData(dataUrl);

  if (data == null) {
    return;
  }

  d3.select('#title')
    .text('Monthly Global Land-Surface Temperature');

  d3.select('#description')
    .text('1753 - 2015: base temperature 8.66℃');
}
