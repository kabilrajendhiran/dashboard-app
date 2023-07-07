import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highmaps';
import worldMap from '@highcharts/map-collection/custom/world.geo.json';
import {useRef} from "react";
const SalesMapping = () => {

    const chartRef = useRef(null);

    let data2 = {
        chart: {
            map: worldMap,
            height: "300px"
        },
        title: undefined,
        legend: {
            enabled: false,
        },
        mapNavigation: {
            enabled: false,
        },

        series: [
            {
                name: 'Product 1',
                states: {
                    hover: {
                        color: '#FFA800',
                    },
                },
                dataLabels: {
                    enabled: false,
                    // format: '{point.name}',
                },
                allAreas: true,
                color: '#FFA800',
                data: [
                    ['us', 180],
                    ['nz', 202],
                    ['cu', 203],
                    ['ec', 204],
                    ['kg', 211],
                    ['np', 212],
                ],
            },
            {
                name: 'Product 2',
                states: {
                    hover: {
                        color: '#8950FC',
                    },
                },
                dataLabels: {
                    enabled: false,
                    // format: '{point.name}',
                },
                allAreas: false,
                color: '#8950FC',
                data: [
                    ['in', 212],
                    ['ru', 212],
                ],
            },
            {
                name: 'Product 3',
                states: {
                    hover: {
                        color: '#F64E60',
                    },
                },
                dataLabels: {
                    enabled: false,
                    // format: '{point.name}',
                },
                allAreas: false,
                color: '#F64E60',
                data: [
                    ['au', 205],
                    ['cn', 205],
                ],
            },
            {
                name: 'Product 4',
                states: {
                    hover: {
                        color: '#00AB9A',
                    },
                },
                dataLabels: {
                    enabled: false,
                    // format: '{point.name}',
                },
                allAreas: false,
                color: '#00AB9A',
                data: [
                    ['gl', 205],
                ],
            },
        ],
    };

    return(
        <div>
            <h6 className="r-chart-head" style={{color:"#05004e"}}>Sales Mapping</h6>
            <div>
                <div style={{padding:"16px"}}>
                    <div style={{height:"316px", width:"100%", position: "relative"}}>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={data2}
                            constructorType={'mapChart'}
                            ref={chartRef}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesMapping;