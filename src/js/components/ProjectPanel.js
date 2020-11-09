import "../../css/ProjectPanel.css"

import React from "react";

export default class ProjectPanel extends React.Component {
    render() {
        return <div className={"ProjectPanel"}>
            {this.props.children}
        </div>
    }
}