import React from "react";
import {Form, FormGroup, FormFeedback, Input, CustomInput, Label, Button} from "reactstrap";

class ParticipationFrom extends React.Component {
    state = {
        name: '',
        selectedOption: '',
        errors: {}
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        const {errors, isValid} = this.validate();

        if(isValid) {
            this.props.getOpinion({
                pollId: this.props.poll.id,
                name: this.state.name,
                selectedOption: this.state.selectedOption
            })

            event.target.reset();
            this.setState({
                name: '',
                selectedOption: '',
                errors: {}
            })
        } else {
            this.setState({errors})
        }
    }

    validate = () => {
        const errors = {}

        if(!this.state.name) {
            errors.name = "Please provide a name";
        } else if(this.state.name.length > 20) {
            errors.name = "Name too long";
        }

        if(!this.state.selectedOption) {
            errors.selectedOption = "Please select one option.";
        }

        return {
            errors,
            isValid: Object.keys(errors).length == 0
        }
    }


    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <div className="d-flex">
                    <h4>Options</h4>
                    <Button
                        color="warning"
                        type="button"
                        className="ml-auto"
                        onClick={this.props.toggleModal}
                    >
                        Edit
                    </Button>

                    <Button
                        type="button"
                        className="ml-2"
                        onClick={() => this.props.deletePoll(this.props.poll.id)}
                    >
                        Delete
                    </Button>
                </div>
            </Form>
        )
    }
}