import "../../css/TabSelector.css"

import React from "react";

export default class TabSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChild: this.props.children[0]
        }
    }

    getChildTitle = (child) => {
        let title = 0
        if (child.props.title) {
            title = child.props.title
        } else {
            for (let childIndex in this.props.children) {
                let childNode = this.props.children[childIndex];
                if (childNode === child) {
                    title = childIndex
                }
            }
        }
        return title
    }

    handle_selectTab = (child) => {
        this.setState({
            selectedChild: child
        })
    }

    renderTabs = () => {
        let ret = []
        for (let childIndex in this.props.children) {
            let child = this.props.children[childIndex]
            let title = this.getChildTitle(child)
            let selectedClass = this.state.selectedChild === child ? "active" : "inactive"
            ret.push(<div key={title} className={"TabTitle " + selectedClass}
                          onClick={() => this.handle_selectTab(child)}>{title}</div>)
        }
        return ret
    }

    render() {
        return <div className={"TabSelector"}>
            {this.renderTabs()}
            <div key={this.getChildTitle(this.state.selectedChild)}>
                {this.state.selectedChild}
            </div>
        </div>
    }
}