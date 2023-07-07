const SalesSummaryCard = (props) => {
    return(
        <div style={{width:"21.5%"}} className={`sales-summary-card ${props?.className}`}>
            <div>
                <img style={{marginBottom:"16px"}} src={props.data.icon} alt={props.data.title} />
                <h5 style={{lineHeight:"32px"}}>{props.data.value}</h5>
                <p className="summary-title">{props.data.title}</p>
                <p className="summary-insight">{props.data.insight}</p>
            </div>
        </div>
    )
}

export default SalesSummaryCard;