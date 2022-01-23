import "../../css/OverviewPanel.css"

import React from "react";
import Job from "./Job";

export default class OverviewPanel extends React.Component {
    render() {
        return <div className={"OverviewPanel"}>
            <div className={"OverviewContainer"}>
                <div className={"SummaryContainer"}>
                    I am an experienced developer with a demonstrated history of solving problems across all levels of
                    the technology stack. <br/><br/>
                    Skilled in Scala, Java, Javascript, Web Technologies such as ReactJS and FastAPI, a
                    broad range of AWS technologies including serialization technologies like GBP and Avro. <br/><br/>
                    I communicate effectively to all levels of the company and mentor fellow developers to share
                    knowledge and techniques. Among other things, in my free time I enjoy archery, rock climbing,
                    running, and gaming.
                </div>
                <table className={"SummaryTable"}>
                    <tr>
                        <td className={"tableCategory"}>Education:</td>
                        <td>University of Canterbury, Christchurch<br/>
                            B.Sc. Computer Science
                        </td>
                    </tr>
                    <tr>
                        <td className={"tableCategory"}>Training:</td>
                        <td>Holocracy Training<br/>
                            Rapid Software Testing with Michael Bolton<br/>
                            Agile Facilitation course with Soft Ed.<br/>
                            Non-Violent Communication<br/>
                            Certified Scrum Master Level-1<br/>
                        </td>
                    </tr>
                    <tr>
                        <td className={"tableCategory"}>References:</td>
                        <td>Available on request</td>
                    </tr>
                </table>
            </div>
            <Job json={'4-westpac.json'}/>
            <Job json={'3-tasktop.json'}/>
            <Job json={'2-linewize.json'}/>
            <Job json={'1-cerebralFix.json'}/>
            <Job json={'0-adscale.json'}/>
        </div>
    }
}