'use client';
import { useRef } from 'react';
import { useEffect } from 'react';
import { select, pie, scaleOrdinal, arc, schemeCategory10 } from 'd3';
import './donutChart.css';

export default function DonutChart({ caseStats }) {
  let donutChartContainer = useRef();
  const svgRef = useRef();

  useEffect(() => {
    if (!Object.keys(caseStats).length) {
      return;
    }

    // Data for the donut chart
    const data = [
      { label: 'In Process', value: caseStats['0'] },
      { label: 'Finished', value: caseStats['1'] },
      { label: 'Postponed', value: caseStats['2'] },
      { label: 'Stop Temporarily', value: caseStats['3'] },
      { label: 'Separated', value: caseStats['4'] },
      { label: 'Draft', value: caseStats['5'] }
    ];

    // Dimensions and radius
    // const width = donutChartContainer.current.offsetWidth-2;
    // const height = donutChartContainer.current.offsetWidth-2;

    const width = 150;
    const height = 150;

    const radius = Math.min(width, height) / 1.5;

    // Create an SVG container
    const svg = select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', `0 20 ${width - 40} ${height - 40}`)
      .append('g')
      .attr('transform', `translate(${width / 2 - 25}, ${height / 2 - 5})`);

    // Create a color scale
    const color = scaleOrdinal(schemeCategory10);

    // Create a pie function
    const pie1 = pie()
      .value((d) => d.value)
      .sort(null);

    // Create an arc function
    const arc1 = arc()
      .innerRadius(radius - 70)
      .outerRadius(radius - 50);

    // Append arcs to the SVG
    const path = svg
      .selectAll('path')
      .data(pie1(data))
      .enter()
      .append('path')
      .attr('d', arc1)
      .attr('fill', (d) => color(d.data.label))
      .on('mouseover', function (event, d) {
        let bounds = event.currentTarget.getBoundingClientRect();
        tooltip.transition().duration(200).style('opacity', 1);
        tooltip
          .html(`${d.data.label}: ${d.data.value}`)
          .style('left', bounds.left + 'px')
          .style('top', bounds.top + 'px');
      })
      .on('mouseout', function (d) {
        tooltip.transition().duration(500).style('opacity', 0);
      });

    // Append labels with values beneath the chart
    const labelsContainer = select('.labels');

    labelsContainer
      .selectAll('.label')
      .data(data)
      .enter()
      .append('div')
      .attr('class', 'label')
      .style('top', (d) => {
        return (data.indexOf(d) + 1) * 20 + 'px';
      })
      .style('color', (d) => color(d.label))
      .text((d) => `${d.label}: ${d.value}`);

    // Create tooltip div
    const tooltip = select(donutChartContainer.current).append('div').attr('class', 'tooltip');
  }, [caseStats]);

  return (
    <div
      id="donutChartContainer"
      ref={donutChartContainer}
    >
      <svg
        ref={svgRef}
        width="400"
        height="400"
      ></svg>
      <div class="labels"></div>
    </div>
  );
}
