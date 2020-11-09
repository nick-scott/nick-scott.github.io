import React from "react";
import TabSelector from "../components/TabSelector";
import ProjectPanel from "../components/ProjectPanel";
import Project from "../components/Project";
import AttachedToMouse from "../components/AttachedToMouse";

export default class Main extends React.Component {
    render() {
        return <div>
            {/*<AttachedToMouse>*/}
            {/*    <div className={"circleBackground"}/>*/}
            {/*</AttachedToMouse>*/}
            <TabSelector>
                <ProjectPanel title={"Professional"}>
                    <Project json={'kale.json'}/>
                    <Project json={'vertica.json'}/>
                    <Project json={'scooby.json'}/>
                </ProjectPanel>
                <ProjectPanel title={"Personal"}>
                    <Project json={'g14_control.json'}/>
                    <Project json={'wow-rotations.json'}/>
                    <Project json={'popup.json'}/>
                    <Project json={'gamo.json'}/>
                </ProjectPanel>
            </TabSelector>
        </div>
    }
}