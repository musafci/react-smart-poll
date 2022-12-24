import React from "react";
import {Modal, ModalHeader, ModalBody} from "reactstrap";
import ParticipationFrom from "./participate.form";
import PollForm from "../poll-form";


class MainContent extends React.Component {

    state = {
        openModal: false,
    }

    toggleModal = () => {
        this.setState({
            openModal: !this.state.openModal
        })
    }

    render() {
        if (Object.keys(this.props.poll).length === 0) {
            return (
                <div>
                    <h3>Welcome to my application</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorem nihil ipsa necessitatibus harum nobis, cumque, at cupiditate earum eaque repellendus magnam! Facere, provident? Quo excepturi illo minus sunt est.
                    </p>
                </div>
            );
        }

        const {poll, getOpinion, updatePoll, deletePoll} = this.props

        return(
            <div>
                <h3>{poll.title}</h3>
                <p>{poll.description}</p>
                <br/>

                <ParticipationFrom
                    poll={poll}
                    getOpinion={getOpinion}
                    toggleModal={this.toggleModal}
                    deletePoll={deletePoll}
                />

                <Modal
                   isOpen={this.state.openModal}
                   toggle={this.toggleModal}
                   unmountOnClose={true}
                >
                    <ModalHeader toggle={this.toggleModal}>
                        Update Poll
                    </ModalHeader>

                    <ModalBody>
                        <PollForm
                            poll={poll}
                            isUpdate={true}
                            submit={updatePoll}
                            buttonValue='Update Poll'
                        />
                    </ModalBody> 

                </Modal>
            </div>
        );
    }
}

export default MainContent;