import * as React from "react";
import * as ReactDOM from "react-dom";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import styled from "styled-components";

import "semantic-ui-css/semantic.css";

type Props = {
    className?: string;
}
type State = {}

const MyMenuItem = styled(MenuItem) `
    padding: 5px;
`;

const MyContextMenu = styled(ContextMenu) `
    padding: 5px;
    padding-left: 10px;
    cursor: pointer;
`;

class App extends React.Component<Props, State>{

    handleClick = (e, data) => {
        console.log(data);
    }

    render() {
        return (
            <div className={this.props.className}>
                <ContextMenuTrigger id="some_unique_identifier">
                    <div className="well">Right click to see the menu</div>
                </ContextMenuTrigger>

                <MyContextMenu id="some_unique_identifier" className="ui vertical menu">
                    <MyMenuItem data={{ a: 100 }} onClick={this.handleClick}>
                        ContextMenu Item 1
                    </MyMenuItem>
                    <MyMenuItem data={"some_data"} onClick={this.handleClick}>
                        ContextMenu Item 1
                    </MyMenuItem>
                    <MyMenuItem data={"some_data"} onClick={this.handleClick}>
                        ContextMenu Item 1
                    </MyMenuItem>
                </MyContextMenu>
            </div>
        );
    }
}

const SApp = styled(App) `
    padding: 20px;
    margin: 20px;
    border: 1px solid gray;
`;

ReactDOM.render(<SApp className="hi" />, document.getElementById("app"));