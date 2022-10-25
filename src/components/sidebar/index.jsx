import React from "react";
import {Input, Button, Modal, ModalHeader, ModalBody} from "reactstrap";
import PollList from "./poll_list";
class Sidebar extends React.Component {
    render() {
        return(
            <div style={{background: '#efefef', padding: '10px'}}>
                <div className="d-flex mb-5">
                    <Input type="search" placeholder="Search" onChange={e => this.props.handleSearch(e.target.value)} />
                </div>
            </div>
        );
    }
}

export default Sidebar;