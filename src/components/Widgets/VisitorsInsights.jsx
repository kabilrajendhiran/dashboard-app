import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const VisitorsInsights = () => {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
              radius: 0
          }
        },
        scales: {
            y: {
                beginAtZero: true,
                border: {
                    display: false,
                },
                ticks: {
                    stepSize: 100,
                    font: {
                        size: 12,
                        family: "'Poppins', Inter, Helvetica, Arial, sans-serif"
                    },
                    color: "#7B91B0"
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: "#464E5F"
                }
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12,
                    boxHeight: 12,
                    font: {
                        size: 12,
                        family: "'Epilogue', sans-serif",
                        weight: 500,
                        color: "#464E5F"
                    }
                },

            },
            title: {
                display: false,
            },
        },
    };

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


    const data = {
        labels,
        datasets: [
            {
                label: 'Loyal Customers',
                data: [400,354,250,146,50,50,146,250,354,400,354,250],
                borderColor: '#A700FF',
                backgroundColor: '#A700FF',
                tension: 0.3,
            },
            {
                label: 'New Customers',
                data: [150,205,250,295,340,340,295,250,205,150,205,210],
                borderColor: '#EF4444',
                backgroundColor: '#EF4444',
                tension: 0.3,
            },
            {
                label: 'Unique Customers',
                data: [250,250,200,150,100,200,300,400,300,200,100,150],
                borderColor: '#3CD856',
                backgroundColor: '#3CD856',
                tension: 0.3,
            },
        ],
    }


    return(
        <div style={{height:"100%"}} className="visitor-insights">
            <h6 style={{color:"#05004e"}}>Visitors Insights</h6>
            <div style={{padding:"16px"}}>
                <div style={{height:"250px"}}>
                    <Line data={data} options={options}/>
                </div>
            </div>
        </div>
    )
}

export default VisitorsInsights;