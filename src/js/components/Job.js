import "../../css/Job.css"

import React from "react";

export default class Job extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
            expanded: false
        }
    }

    componentDidMount = () => {
        $.getJSON('/src/static/jobs/' + this.props.json, (json) => {
            this.setState({
                data: json
            })
        })
    }

    getDescription = () => {
        if (this.state.expanded) {
            return <div className={"extendedDescription"}>
                {this.state.data.longDescription}
            </div>
        }
        return this.state.data.shortDescription
    }

    handle_expandClicked = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }
    getTechnologies = () => {
        let ret = []
        let columns = 2
        let row = []
        for (let tech of this.state.data.technologies) {
            row.push(<td>{tech}</td>)
            if (row.length >= columns) {
                ret.push(<tr>{row}</tr>)
                row = []
            }
        }
        return <table className={"technologyTable"}>
            <tbody>
            {ret}
            </tbody>
        </table>
    }

    renderJob = () => {
        if (!this.state.data) {
            return
        }
        return <div>
            <div className={"header"} onClick={this.handle_expandClicked}>
                <h2 className={"companyName"}>{this.state.data.name}</h2>
                <h4 className={"duration"}>{this.state.data.duration}</h4>
                <h6 className={"location"}>{this.state.data.location}</h6>
            </div>

            <div className={"descriptionBlock"}>
                <div className={"expansionIcon"} onClick={this.handle_expandClicked} key={this.state.expanded}>
                    <i className={this.state.expanded ? "fas fa-chevron-down" : "fas fa-chevron-right"}/>
                </div>
                <div className={"description"}>
                    {this.getDescription()}
                </div>
            </div>
            <div className={"technologyBlock"}>
                <h3 className={"technologyHeader"}>Notable Technologies</h3>
                {this.getTechnologies()}
            </div>
        </div>
    }

    render() {
        return <div className={"JobContainer " + (this.state.expanded ? "expanded" : "collapsed")}>
            {this.renderJob()}
        </div>
    }
}