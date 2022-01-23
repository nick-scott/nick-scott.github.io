import React from "react";
import TabSelector from "../components/TabSelector";
import Project from "../components/Project";
import Markdown from "../components/Markdown";
import TabPanel from "../components/TabPanel";
import OverviewPanel from "../components/OveriewPanel";

export default class Main extends React.Component {
    render() {
        return <div>
            <TabSelector>
                <TabPanel title={"Overview"}>
                    <OverviewPanel/>
                </TabPanel>
                <TabPanel title={"Professional Projects"}>
                    <Project json={'forex.json'}/>
                    <Project json={'transactionMicroservice.json'}/>
                    <Project json={'kale.json'}/>
                    <Project json={'vertica.json'}/>
                    <Project json={'scooby.json'}/>
                </TabPanel>
                <TabPanel title={"Personal Projects"}>
                    <Project json={'g14_control.json'}/>
                    <Project json={'wow-rotations.json'}/>
                    <Project json={'popup.json'}/>
                    <Project json={'gamo.json'}/>
                </TabPanel>
            </TabSelector>
        </div>
    }
}