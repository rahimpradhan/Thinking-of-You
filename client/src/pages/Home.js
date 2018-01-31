import React, { Component } from "react";
import { Button, Form, Grid, Header, Image, Message, Segment,Input } from 'semantic-ui-react';
import Navigation from '../components/Navigation.js';
import Landing from '../components/Landing.js';
import '../App.css';
import API from "../utils/API";
// let username ="";
class Home extends Component {
    state = {
        toys: [],
        username: "",
        id: 1,
    };

    // componentDidMount() {
    //     this.loadToys();
    // }
//
// // Loads all books  and sets them to this.state.books
//     API.updateToy({
//     username: this.state.username,.then(res => this.loadToys())
// .catch(err => console.log(err))
// })

    updateUser = (name) => {
        API.userToy(name).then(res =>{console.log(res)})};






    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username) {
            const name = this.state.username;
            console.log(name);
            this.updateUser(name);

        }
    };

    render() {
        return (
            <div className='login-form'>
                {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
                <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
                <Grid
                    textAlign='center'

                    verticalAlign='middle'
                >
                    <Grid.Column>
                        <Header as='h2' color='red' textAlign='center'>
                            <Image src='./heart.ico'/>
                            <p>Log-in to your account</p>
                        </Header>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail address'
                                    onChange={this.handleInputChange}
                                    value={this.state.username}
                                    name="username"

                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                />

                                <Button color='red' fluid size='large' onClick={this.handleFormSubmit} ><a href='/Send'></a><p>Login</p></Button>
                            </Segment>
                        </Form>
                        <Message id='order'>
                            New to us? <a href='/order'>Order now</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Home;