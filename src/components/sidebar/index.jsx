import React from "react";
import {Input, Button, Modal, ModalHeader, ModalBody} from "reactstrap";
import PollList from "./poll_list";
class Sidebar extends React.Component {

    toggleModal = () => {

    }

    render() {
        return(
            <div style={{background: '#efefef', padding: '10px'}}>
                <div className="d-flex mb-5">
                    <Input type="search" placeholder="Search" value={this.props.searchTerm} onChange={e => this.props.handleSearch(e.target.value)} />
                    <Button color="success" className="ml-2" onClick={this.toggleModal}>
                        New
                    </Button>
                </div>

                <h3>List of polls</h3>
                <hr />

                <PollList
                    props={this.props.polls}
                    selectPoll={this.props.selectPoll}
                />
            </div>
        );
    }
}

export default Sidebar;