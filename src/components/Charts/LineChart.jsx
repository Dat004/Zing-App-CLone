import { memo, useEffect, useRef, useState } from 'react';
import { Chart as ChartJS, LineElement, LinearScale, CategoryScale, PointElement, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';
import classNames from 'classnames';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

function LineChart({ width, height, minScore = 0, maxScore, dataCharts = [], dataInfoTooltip = [], dataLabels = [] }) {
    const chartRef = useRef();
    const toolTipRef = useRef(null);
    const [tooltipOptions, setTooltipOptions] = useState({
        data: {},
        options: {},
    });
    const [tooltipCustom, setTooltipCustom] = useState({
        top: 0,
        left: 0,
        opacity: 0,
        dataIndex: 0,
    });

    const lineChartClasses = classNames('relative');

    // package plugin
    const lineHover = {
        id: 'lineHover',
        afterDatasetsDraw: (chart, args, plugins) => {
            const {
                ctx,
                tooltip,
                chartArea: { top, right, bottom, left },
                scales: { x, y },
            } = chart;

            if (tooltip._active.length > 0) {
                const { dataPoints } = tooltip;
                const posX = x.getPixelForValue(tooltip.dataPoints[0].parsed.x);

                ctx.save();
                ctx.beginPath();
                ctx.lineWidth = 1;
                ctx.strokeStyle =
                    dataPoints[0].datasetIndex === 0
                        ? 'rgb(74, 144, 226)'
                        : dataPoints[0].datasetIndex === 1
                        ? 'rgb(39, 189, 156)'
                        : 'rgb(227, 80, 80)';
                ctx.moveTo(posX, top);
                ctx.lineTo(posX, bottom);
                ctx.stroke();
                ctx.closePath();
                ctx.restore();
            }
        },
    };

    // config

    const options = {
        maintainAspectRatio: false,
        aspectRatio: 1 | 4,
        interaction: {
            mode: 'nearest',
            intersect: false,
        },
        plugins: {
            tooltip: {
                enabled: false,
                external: (ctx) => {
                    const { chart, tooltip } = ctx;
                    const {
                        scales: { x, y },
                    } = chart;
                    const { dataPoints } = tooltip;

                    if (!chartRef.current) {
                        return;
                    }

                    if (tooltip._active.length > 0) {
                        const position = ctx.chart.canvas.getBoundingClientRect();
                        const posX = x.getPixelForValue(tooltip.dataPoints[0].parsed.x);

                        const top = dataPoints[0].element.y;
                        const left = dataPoints[0].element.cp1x;
                        const dataIndex = dataPoints[0].datasetIndex;

                        dataIndex === 0
                            ? (toolTipRef.current.style.backgroundColor = 'rgb(74, 144, 226)')
                            : dataIndex === 1
                            ? (toolTipRef.current.style.backgroundColor = 'rgb(39, 189, 156)')
                            : (toolTipRef.current.style.backgroundColor = 'rgb(227, 80, 80)');

                        toolTipRef.current.setAttribute('data-index', dataIndex);
                        toolTipRef.current.style.top = top + 'px';
                        toolTipRef.current.style.left = left + 'px';
                    }
                },
            },
        },
        elements: {
            point: {
                radius: 5,
                pointStyle: 'circle',
                backgroundColor: 'transparent',
                borderColor: 'transparent',
                borderWidth: 3,
                hoverRadius: 7,
                hoverBorderWidth: 3,
            },
            line: {
                borderColor: ['rgb(74, 144, 226)', 'rgb(39, 189, 156)', 'rgb(227, 80, 80)'],
                borderWidth: 1.5,
                tension: 0.35,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#979697',
                    font: {
                        size: 12,
                        weight: 400,
                    },
                },
                border: {
                    color: 'transparent',
                },
            },
            y: {
                min: minScore,
                max: maxScore,
                grid: {
                    color: 'rgb(69,63,79)',
                    tickLength: 0.5,
                },
                border: {
                    display: true,
                    dash: [2, 5],
                    color: 'transparent',
                },
                ticks: {
                    display: false,
                    maxTicksLimit: 5,
                    stepSize: maxScore / 4,
                },
            },
        },
    };

    // set up datasets
    const data = {
        labels: dataLabels.map((label, index) => (index % 2 !== 1 ? label.hour + ':00' : '')),
        datasets: [
            {
                data: dataCharts[0].map((key) => key.counter),
                pointHoverBackgroundColor: 'rgb(74, 144, 226)',
                pointHoverBorderColor: 'rgb(255, 255, 255)',
            },
            {
                data: dataCharts[1].map((key) => key.counter),
                pointHoverBackgroundColor: 'rgb(39, 189, 156)',
                pointHoverBorderColor: 'rgb(255, 255, 255)',
            },
            {
                data: dataCharts[2].map((key) => key.counter),
                pointHoverBackgroundColor: 'rgb(227, 80, 80)',
                pointHoverBorderColor: 'rgb(255, 255, 255)',
            },
        ],
    };

    // resgiter plugins
    ChartJS.register(lineHover);

    return (
        <div className={lineChartClasses} style={{ width: width, height: height }}>
            <section className="pt-[40px]">
                <Line ref={chartRef} height={300} data={data} options={options}></Line>
            </section>
            <div
                ref={toolTipRef}
                className="absolute max-w-[240px] min-w-[175px] text-white text-[14px] pointer-events-none"
            >
                <div className={`w-full h-full`}>Hello</div>
            </div>
        </div>
    );
}

export default memo(LineChart);
