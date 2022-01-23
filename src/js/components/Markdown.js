import "../../css/Project.css"

import React from "react";
import ReactMarkdown from "react-markdown";

export default class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
            expanded: false
        }
    }

    componentDidMount = () => {
        $.get('/src/static/markdowns/' + this.props.file, (file) => {
            this.setState({
                data: file
            })
        })
    }

    render() {
        return <ReactMarkdown>{this.state.data}</ReactMarkdown>
    }
}