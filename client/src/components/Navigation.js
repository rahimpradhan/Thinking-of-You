import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Send from '../pages/Send.js'
import { Link } from 'react-router-dom'
import '../App.css';

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu className='menu' size='huge'>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          as={Link}
          to='/'
        >
          Home
        </Menu.Item>
         

        <Menu.Item
          name='send'
          active={activeItem === 'send'}
          onClick={this.handleItemClick}
          as={Link}
          to='/send'
        >
          Send Message
        </Menu.Item>

        <Menu.Item
          name='order'
          active={activeItem === 'order'}
          onClick={this.handleItemClick}
          as={Link}
          to='/order'
        >
          Order
        </Menu.Item>
        
        <Menu.Item
          name='aboutus'
          active={activeItem === 'aboutus'}
          onClick={this.handleItemClick}
          as={Link}
          to='/about'
        >
          About Us
        </Menu.Item>

        
      </Menu>
    )
  }
}