import "../../css/Project.css"

import React from "react";

export default class    Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
            expanded: false
        }
    }

    componentDidMount = () => {
        $.getJSON('/src/static/projects/' + this.props.json, (json) => {
            this.setState({
                data: json
            })
        })
    }

    getDescription = () => {
        return this.state.expanded ? this.state.data.longDescription : this.state.data.shortDescription
    }

    handle_expandClicked = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }


    renderProject = () => {
        if (!this.state.data) {
            return
        }
        return <div>
            <h2>{this.state.data.name}</h2>
            <div className={"expansionIcon"} onClick={this.handle_expandClicked} key={this.state.expanded}>
                <i className={this.state.expanded ? "fas fa-chevron-down" : "fas fa-chevron-right"}/>
            </div>
            <div className={"descriptionBlock"}>
                {this.getDescription()}
            </div>
        </div>
    }

    render() {
        return <div className={"projectContainer"}>
            {this.renderProject()}
        </div>
    }
}