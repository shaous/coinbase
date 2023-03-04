import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

import { Wrapper } from './BalanceStyle'

const data = {
    labels: [
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'Jan',
    ],
    datasets: [
        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#0a0d11',
            borderColor: '#00adb5',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#00adb5',
            pointBackgroundColor: '#00adb5',
            pointBorderWidth: 5,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: '#00adb5',
            pointHoverBorderColor: '#00adb5',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 20,
            data: [65000, 62000, 81000, 59000, 72000, 65000, 77000, 90000, 70000, 80000, 100000, 85000],
        },
    ],
}

const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
}

function BalanceChart()
{
    return (
        <Wrapper>
            <Line data={data} options={options} width={600} height={260} />
        </Wrapper>
    )
}

export default BalanceChart