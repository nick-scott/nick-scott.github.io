import "../../css/AttachedToMouse.css"

import React from "react";

export default class AttachedToMouse extends React.Component {
    componentDidMount() {
        let attachedToMouse = $("#AttachedToMouse");
        $(document).on("mousemove", function (evt) {
            attachedToMouse.css({left: evt.pageX - 50, top: evt.pageY - 50});
        });
    }

    render() {
        return <div id={"AttachedToMouse"}>
            {this.props.children}
        </div>
    }
}