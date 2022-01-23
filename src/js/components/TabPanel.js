import "../../css/TabPanel.css"

import React from "react";

export default class TabPanel extends React.Component {
    render() {
        return <div className={"TabPanel"}>
            {this.props.children}
        </div>
    }
}