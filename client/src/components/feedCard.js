// import style package here with specific style components



function feedCard(props){
    // space for any variables like useState



    return(
        <div className="card">
            <div className="feed-container">
                <img alt={props.username} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                        {/* firstName.lastName */}
                    </li>
                    <li>
                        <strong>Date:</strong> {props.date}
                    </li>
                    <li>
                        <strong>Status:</strong> {props.status}
                    </li>
                </ul>
            </div>
        </div>
    )
}
module.exports = feedCard