import logo from "../../assets/dummy logo.svg"
import MenuItem from "./MenuItem.jsx";
import {useState} from "react";
import "./Sidebar.css";


const Sidebar = () => {

    const menu = [
        {
            id: 1,
            img: "dashboard-icon",
            title: "Dashboard"
        },
        {
            id: 2,
            img: "leaderboard",
            title: "Leaderboard"
        },
        {
            id: 3,
            img: "cart",
            title: "Order"
        },
        {
            id: 4,
            img: "shopping",
            title: "Products"
        },{
            id: 5,
            img: "sales",
            title: "Sales Report"
        },{
            id: 6,
            img: "message",
            title: "Messages"
        },{
            id: 7,
            img: "cog",
            title: "Settings"
        },
        {
            id: 8,
            img: "exit",
            title: "Sign Out"
        }
    ]

    const [activeItem, setActiveItem] = useState(1);

    const setActive = (i) => setActiveItem(i);

    return(
        <nav className="side-nav">
            <div className="logo-container">
                <img className="logo" src={logo} alt={"Dabang"}/>
                <h4 style={{color:"#151D48"}} className="remove-margin">Dabang</h4>
            </div>
            <div className="side-nav-content">
                {menu.map((item)=>{
                    return(<MenuItem onClick={setActive} id={item.id} key={item.id} img={item.img} title={item.title} active={item.id===activeItem}/>)
                })}
            </div>
        </nav>
    )
}

export default Sidebar;