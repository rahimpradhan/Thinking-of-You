import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import '../App.css';

export const Textbox = props =>
  <Form>
    <Form.Group widths='equal'>
      <Form.Field id='form-input-control-phone-number' control={Input} label='Phone number' placeholder='Phone number' />

    </Form.Group>
    <Form.Field id='form-textarea-control-message' control={TextArea} label='Message' placeholder='Enter your message' />
    <Form.Field id='form-button-control-public' control={Button} content='Send message' />
  </Form>;


