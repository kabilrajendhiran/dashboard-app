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

import reality_sales from "../../assets/reality_sales.svg"
import target_sales from "../../assets/target_sales.svg"

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
                display: false
            },
            border: {
                display: false
            }
        },
        y: {
            display: false,
        },
    },
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
        title: {
            display: false,
        },
    },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const data = {
    labels,
    datasets: [
        {
            label: 'Reality Sales',
            data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
            backgroundColor: '#4AB58E',
        },
        {
            label: 'Target Sales',
            data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
            backgroundColor: '#FFCF00',
        },
    ],
};


const TargetVsReality = () => {
    return(
        <div>
            <h6 className="r-chart-head" style={{color:"#05004e"}}>Target vs Reality</h6>
            <div style={{padding:"16px"}}>
                <div style={{height:"216px"}}>
                    <Bar options={options} data={data} />
                </div>
                <div style={{height:"100px"}}>
                    <div className="mt-2 d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                            <img style={{width:"36px", height:"36px"}} src={reality_sales} alt="Reality Sales" />
                            <div className="ps-2 d-flex flex-column justify-content-center">
                                <p style={{fontSize:"12px", fontWeight:"600"}}>Reality Sales</p>
                                <p style={{fontSize:"10px", fontWeight:"400"}}>Global</p>
                            </div>
                        </div>
                        <p style={{fontSize:"14px", fontWeight:"500", color:"#27AE60"}}>8.823</p>
                    </div>
                    <div className="mt-2 d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                            <img style={{width:"36px", height:"36px"}} src={target_sales} alt="Target Sales" />
                            <div className="ps-2 d-flex flex-column justify-content-center">
                                <p style={{fontSize:"12px", fontWeight:"600"}}>Target Sales</p>
                                <p style={{fontSize:"10px", fontWeight:"400"}}>Commercial</p>
                            </div>
                        </div>
                        <p style={{fontSize:"14px", fontWeight:"500", color:"#FFA412"}}>12.122</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TargetVsReality;