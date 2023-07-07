import united from "../../assets/united.svg";
import chevron_down from "../../assets/chevron_down.svg";
import notification from "../../assets/clarity_notification_line.svg"
import avatar from "../../assets/avatar.png";
import search from "../../assets/magnifier.svg";
import "./Navbar.css";

const Navbar = () => {
    return(
        <nav style={{gap:"40px"}} className="navigation-bar d-flex">
            <div style={{width:"55%"}} className="d-flex justify-content-between align-items-center">
                <h3 style={{color:"#151D48"}}>Dashboard</h3>
                <div className="search d-flex align-items-center">
                    <img src={search} alt="search"/>
                    <input placeholder="Search here.."/>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between" style={{width:"45%"}}>
                <div style={{width:"50%", gap:"5px"}} className="d-flex align-items-center justify-content-center">
                    <img style={{width:"20px", height:"20px"}} src={united} alt="united"/>
                    <p style={{fontSize:"16px", color:"#374557", fontWeight:"600"}}> Eng (US) </p>
                    <img src={chevron_down} alt="chevron_down"/>
                </div>
                <div style={{width:"50%", gap:"20px"}} className="d-flex justify-content-end align-items-center">
                    <div className="notification-widget d-flex align-items-center justify-content-center">
                        <img style={{width:"24px", height:"24px"}} src={notification} alt="notification"/>
                    </div>
                    <div style={{gap:"10px", width:"65%"}} className="d-flex align-items-center">
                        <img style={{width:"60px", height:"60px"}} src={avatar} alt="Musfiq"/>
                        <div style={{width:"100%"}}>
                            <div className="d-flex align-items-center justify-content-between">
                                <p style={{fontSize:"14px", fontWeight:"500", color:"#151D48"}}>Musfiq</p>
                                <img src={chevron_down} alt="chevron_down"/>
                            </div>

                            <p style={{fontSize:"14px", fontWeight:"400", color:"#737791"}}>Admin</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;