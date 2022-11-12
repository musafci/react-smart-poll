import React from "react";
import {Form, FormGroup, Label, Input, FormFeedback, Button} from "reactstrap";

const MyForm = ({
    title, 
    description, 
    options,
    errors,
    buttonValue,
    handleChange,
    handleOptionsChange,
    createOption,
    deleteOption,
    handleSubmit,
}) => <Form onSubmit={handleSubmit}>
    <FormGroup>
        <Label for='title'>Title</Label>
        <Input 
            name="title" 
            id="title" 
            placeholder="Dummy Title" 
            value={title} 
            onChange={handleChange}
            invalid={errors.title ? true : false}
        />
        {errors.title && <FormFeedback>{errors.title}</FormFeedback>}
    </FormGroup>
    <FormGroup>
        <Label for='description'>Description</Label>
        <Input 
            name="description" 
            id="description" 
            placeholder="Dummy Description"
            value={description} 
            onChange={handleChange}
            invalid={errors.description ? true : false}
        />
        {errors.description && <FormFeedback>{errors.description}</FormFeedback>}
    </FormGroup>
    <FormGroup>
        <Label>
            Enter Options
            <span style={{marginLeft: '30px', background: 'green', color: 'white', padding: '5px', borderRadius: '5px', cursor: 'pointer'}}>Add Option</span>
            
        </Label>
    </FormGroup>
</Form>