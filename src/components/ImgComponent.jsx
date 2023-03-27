
import { Component } from "react";

class ImgComponent extends Component {
    render() {
        console.log(this);
        return <img src={this.props.src} alt={this.props.alt}/>;
    }
}

export default ImgComponent;