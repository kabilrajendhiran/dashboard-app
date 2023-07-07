import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import TodaySales from "../components/Widgets/TodaySales.jsx";
import VisitorsInsights from "../components/Widgets/VisitorsInsights.jsx";

import "./Dashboard.css";
import TotalRevenue from "../components/Widgets/TotalRevenue.jsx";
import CustomerSatisfaction from "../components/Widgets/CustomerSatisfaction.jsx";
import TargetVsReality from "../components/Widgets/TargetVsReality.jsx";
import TopProducts from "../components/Widgets/TopProducts.jsx";
import VolumeVsService from "../components/Widgets/VolumeVsService.jsx";
import SalesMapping from "../components/Widgets/SalesMapping.jsx";

ChartJS.register(ArcElement, Tooltip, Legend);
const Dashboard = () => {
    return(
        <section className="dashboard">
            <div className="container-fluid w-100 p-4">
                <div className="row mb-4">
                    <div className="col-7">
                        <div style={{height:"100%"}} className="card">
                            <TodaySales/>
                        </div>
                    </div>
                    <div className="col">
                        <div style={{height:"100%"}} className="card">
                            <VisitorsInsights/>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-5">
                        <div style={{height:"100%"}} className="card">
                            <TotalRevenue/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div style={{height:"100%"}} className="card">
                            <CustomerSatisfaction/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div style={{height:"100%"}} className="card">
                            <TargetVsReality/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <div style={{height:"100%"}} className="card">
                            <TopProducts/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div style={{height:"100%"}} className="card">
                            <SalesMapping/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div style={{height:"100%"}} className="card">
                            <VolumeVsService/>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Dashboard;