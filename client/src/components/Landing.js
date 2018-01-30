import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import '../App.css';

const LoginForm = () => (
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
          <Image src='./heart.ico' />
          <p>Log-in to your account</p>
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='red' fluid size='large'><p>Login</p></Button>
          </Segment>
        </Form>
        <Message id='order'>
          New to us? <a href='/order'>Order now</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm