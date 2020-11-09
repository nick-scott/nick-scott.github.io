import "../../css/Project.css"

import React from "react";

export default class Project extends React.Component {
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
        if (this.state.expanded) {
            let links = []
            for (let link of this.state.data.links) {
                links.push(<div key={link.label} className={"projectLink clickableLink"}
                                onClick={() => document.location = link.link}>
                    {link.label}
                </div>)
            }
            return <div className={"extendedDescription"}>
                <div className={"description"}>
                    {this.state.data.longDescription}
                </div>
                <div className={"projectLinks"}>{links}</div>
            </div>
        }
        return this.state.data.shortDescription
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
        return <div className={"ProjectContainer"}>
            {this.renderProject()}
        </div>
    }
}