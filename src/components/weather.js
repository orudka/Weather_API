import React from "react";

class Weather extends React.Component {
    render(){
        return (
            <div className="infoWeath">
            { this.props.city &&
            <div>
                <p>Location: {this.props.city}, {this.props.country}</p>
                <p>Temperature: {this.props.temp}</p>
                <p>Sunset time: {this.props.sunset}</p>
                <p>Sunrise time: {this.props.sunrise}</p>
            </div>
            }

            <p className="error"> {this.props.error} </p>
            </div>
        )
    }
}

export default Weather;