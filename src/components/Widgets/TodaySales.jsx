import SalesSummaryCard from "./SalesSummaryCard.jsx";
import totalSales from "../../assets/total_sales.svg";
import totalOrders from "../../assets/total_orders.svg";
import productSold from "../../assets/product_sold.svg";
import newCustomers from "../../assets/new_customers.svg";
import export_icon from "../../assets/export_icon.svg";

const TodaySales = () => {

    const total_sales = {
        icon: totalSales,
        value:"$1k",
        title:"Total Sales",
        insight: "+8 from yesterday"
    }

    const total_order = {
        icon: totalOrders,
        value:"300",
        title:"Total Order",
        insight: "+5% from yesterday"
    }

    const product_sold = {
        icon: productSold,
        value:"5",
        title:"Product Sold",
        insight: "+1.2% from yesterday"
    }

    const new_customers = {
        icon: newCustomers,
        value:"8",
        title:"New Customers",
        insight: "+0.5% from yesterday"
    }



    return(
        <div className="today-sales-widget">
                <div className="head">
                    <div>
                        <h6 style={{color:"#05004e"}}>Today&apos;s Sales</h6>
                        <small className="sub-title">Sales Summary</small>
                    </div>
                    <div>
                        <button style={{gap:"5px"}} className="export-button d-flex align-items-center justify-content-center"><img src={export_icon} alt="export_icon"/> Export</button>
                    </div>
                </div>
                <div style={{gap:"5%"}} className="d-flex">
                    <SalesSummaryCard data={total_sales} className="red" />
                    <SalesSummaryCard data={total_order} className="yellow" />
                    <SalesSummaryCard data={product_sold} className="green" />
                    <SalesSummaryCard data={new_customers} className="purple" />
                </div>

        </div>
    )
}

export default TodaySales;