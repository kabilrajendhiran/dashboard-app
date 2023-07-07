import "./Progress.css";
const Progress = (props) => {
    return(
        <div style={{backgroundColor:`${props.bg}`}} className="custom-progress-bar">
            <div style={{backgroundColor:`${props.value_bg}`, width:`${props.value}%`}} className="custom-progress-bar-value" />
        </div>
    )
}

export default Progress;