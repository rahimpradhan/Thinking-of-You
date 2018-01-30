import React, { Component } from "react";
import Navigation from '../components/Navigation.js';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import Textbox from '../components/Textbox';
import '../App.css';

import API from "../utils/API";

class Sends extends Component {
    // Setting our component's initial state
    state = {
        toys:[],
        firstNameame: "",
        lastName: "",
        phone: "",
        password: "",
        id:"1"
    };
    componentDidMount() {
        this.loadToys();
    }

    // Loads all books  and sets them to this.state.books
    loadToys = () => {
        API.getToys()
            .then(res =>
                console.log(res.data)
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.phone && this.state.message) {
            API.updateToy({
                _id: this.state.id,
                phone: this.state.phone,
                message: this.state.message
            })
                .then(res => this.loadToys())
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div>
                <Form>
                    <Form.Group widths='equal'>
                    <Form.Field id="form-input-control-phone-number"
                                control={Input}
                                label='Phone number'
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                        name="phone"
                        placeholder= 'Phone number'
                    />
                    </Form.Group>
                    <Form.Group widths='equal'>
                    <Form.Field id="form-textarea-control-message"
                                control={TextArea}
                                label='Message'
                                value={this.state.message}
                                onChange={this.handleInputChange}
                                name="message"
                                placeholder= 'Message'
                    />
                    </Form.Group>
                    <Form.Field id='form-button-control-public' control={Button} content='Send message' disabled={!(this.state.phone && this.state.message)}
                                onClick={this.handleFormSubmit} />
                </Form>


            </div>
        );
    }
}

    export default Sends;
