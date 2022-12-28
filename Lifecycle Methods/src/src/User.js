import React, { Component } from 'react'

export default class User extends Component {
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

  render() {
    return (
      <div>
        <p>Users</p>
      </div>
    )
  }
}
