import Progress from "../UI/ProgressBar/Progress.jsx";

const TopProducts = () => {
    return(
        <div>
            <h6 className="r-chart-head" style={{color:"#05004e"}}>Top Products</h6>
            <div className="mt-2">
                <table className="total-revenue-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Sales</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>Home Decor Range</td>
                            <td>
                                <Progress bg="#CDE7FF" value_bg="#0095FF" value="45" />
                            </td>
                            <td>
                                <div className="status-indicator blue">
                                    45%
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>Office Decor Range</td>
                            <td>
                                <Progress bg="#8CFAC7" value_bg="#00E096" value="45" />
                            </td>
                            <td>
                                <div className="status-indicator green">
                                    45%
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>Disney Princess Pink Bag 18&apos;</td>
                            <td>
                                <Progress bg="#C5A8FF" value_bg="#884DFF" value="18" />
                            </td>
                            <td>
                                <div className="status-indicator purple">
                                    18%
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>Apple Smartwatches</td>
                            <td>
                                <Progress bg="#FFD5A4" value_bg="#FF8F0D" value="25" />
                            </td>
                            <td>
                                <div className="status-indicator orange">
                                    25%
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TopProducts;