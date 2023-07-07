import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

import last_month from "../../assets/last_month_legend.svg";
import this_month from "../../assets/this_month_indicator.svg";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


const CustomerSatisfaction = () => {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          point: {
              radius: 4,
          }
        },
        scales: {
            y: {
                display: false
            },
            x: {
                display : false
            }
        },
        plugins: {
            fill: {
                propagate: false,
            },
            legend: {
                display: false
            },
            title: {
                display: false,
            },
        },
    };

    const labels = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5', 'Product 6', 'Product 7'];


    const data = {
        labels,
        datasets: [
            {
                label: 'Last Month',
                data: [243,162,171,205,175,256,202],
                fill: true,
                backgroundColor: (context)=>{
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                    gradient.addColorStop(0, "rgba(0,157,255,31)");
                    gradient.addColorStop(1, "rgba(250,149,255,0.01)");
                    return gradient;
                },
                borderColor: '#0095FF',
                tension: 0.3,
            },
            {
                label: 'This month',
                data: [343,262,271,305,275,356,302],
                fill: true,
                backgroundColor: (context)=>{
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                    gradient.addColorStop(0, "rgba(0,224,150,32)");
                    gradient.addColorStop(1, "rgba(255,255,255,0.01)");
                    return gradient;
                },
                borderColor: '#07E098',
                tension: 0.3,
            },
        ],
    }


    return(
        <div>
            <h6 className="r-chart-head" style={{color:"#05004e"}}>Customer Satisfaction</h6>
            <div style={{padding:"16px"}}>
                <div style={{height:"216px"}}>
                    <Line data={data} options={options}/>
                </div>
                <div style={{height:"100px"}}>
                    <div className="legend-divider d-flex align-items-center justify-content-center">
                        <div style={{borderRight: "1px solid #EDF2F6"}} className="px-3 d-flex flex-column align-items-center">
                            <div className="d-flex">
                                <img src={last_month} alt="last month" />
                                <p style={{color:"#96A5B8"}}>Last Month</p>
                            </div>
                            <p style={{fontSize:"12px", color:"#222B45", fontWeight:600}}>
                                $3004
                            </p>
                        </div>
                        <div className="px-3 d-flex flex-column align-items-center">
                            <div className="d-flex">
                                <img src={this_month} alt="this_month" />
                                <p style={{color:"#96A5B8"}}>This Month</p>
                            </div>
                            <p style={{fontSize:"12px", color:"#222B45", fontWeight:600}}>
                                $4504
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerSatisfaction;