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
            display: false,
            stacked: true
        },
        y: {
            display: false,
            ticks: {
                stepSize: 250
            },
            stacked: true
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
            display: false,
        },
        title: {
            display: false,
        },
    },
};

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const data = {
    labels,
    datasets: [

        {
            label: 'Service',
            data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
            backgroundColor: '#00E096',
        },
        {
            label: 'Volume',
            data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
            backgroundColor: '#0095FF',
        },
    ],
};


const VolumeVsService = () => {
    return(
        <div>
            <h6 className="r-chart-head" style={{color:"#05004e"}}>Volume vs Service Level</h6>
            <div style={{padding:"16px"}}>
                <div style={{height:"216px"}}>
                    <Bar options={options} data={data} />
                </div>
                <div style={{height:"100px"}}>
                    <div className="legend-divider d-flex align-items-center justify-content-center">
                        <div style={{borderRight: "1px solid #EDF2F6"}} className="px-3 d-flex flex-column align-items-center">
                            <div style={{gap:"8px"}} className="d-flex align-items-center">
                                <div style={{backgroundColor:"#0095FF", width:"10px", height:"10px", borderRadius:"50%"}}/>
                                <p style={{color:"#96A5B8"}}>Volume</p>
                            </div>
                            <p style={{fontSize:"12px", color:"#222B45", fontWeight:600}}>
                                1,135
                            </p>
                        </div>
                        <div className="px-3 d-flex flex-column align-items-center">
                            <div style={{gap:"8px"}} className="d-flex align-items-center">
                                <div style={{backgroundColor:"#00E096", width:"10px", height:"10px", borderRadius:"50%"}}/>
                                <p style={{color:"#96A5B8"}}>Services</p>
                            </div>
                            <p style={{fontSize:"12px", color:"#222B45", fontWeight:600}}>
                                635
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VolumeVsService;