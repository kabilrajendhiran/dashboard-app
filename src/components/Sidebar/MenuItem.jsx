function generateUrl(fileName, active) {
    return new URL(`../../assets/${fileName}${active ? "-light" : ""}.svg`, import.meta.url).href;
}
const MenuItem = (props) => {

    return(
        <button onClick={()=>props.onClick(props.id)} style={{display:"flex", alignItems: "center", gap:"24px"}} className={`navigation-link ${props?.active ? "active": ""}`}>
            <img src={generateUrl(props.img, props.active)} alt="dashboard"/>
            <div>{props?.title}</div>
        </button>
    )
}

export default MenuItem;