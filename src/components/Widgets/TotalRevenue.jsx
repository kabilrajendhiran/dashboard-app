import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            border: {
                display: false,
            },
            ticks: {
                font: {
                    size: 12,
                    family: "'Poppins', Inter, Helvetica, Arial, sans-serif"
                },
                callback: function (val) {
                    return val/1000+"k";
                }
            }
        }
    },
    datasets: {
        bar: {
            barPercentage: 0.8,
            categoryPercentage: 0.4
        }
    },
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                boxWidth: 10,
                boxHeight: 10,
                usePointStyle: true,
                font: {
                    size: 12,
                    family: "'Epilogue', sans-serif",
                    weight: 500,
                    color: "#464E5F"
                }
            }
        },
        title: {
            display: false,
        },
    },
};

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const data = {
    labels,
    datasets: [
        {
            label: 'Online Sales',
            data: labels.map(() => faker.number.int({ min: 0, max: 25000 })),
            backgroundColor: '#0095FF',
        },
        {
            label: 'Offline Sales',
            data: labels.map(() => faker.number.int({ min: 0, max: 25000 })),
            backgroundColor: '#00E096',
        },
    ],
};


const TotalRevenue = () => {
    return(
        <div>
            <h6 className="r-chart-head" style={{color:"#05004e"}}>Total Revenue</h6>
            <div style={{padding:"16px"}}>
                <div style={{height:"316px"}}>
                    <Bar options={options} data={data} />
                </div>
            </div>
        </div>
    )
}

export default TotalRevenue;