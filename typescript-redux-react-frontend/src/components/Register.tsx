import React, { Component } from 'react'


export default class Register extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="firstname">First name:</label>
                    <input type="firstname" placeholder="firstname" />
                    <br />
                    <label htmlFor="lastname">Last name:</label>
                    <input type="lastname" placeholder="lastname" />
                    <br />
                    <label htmlFor="username">Username:</label>
                    <input type="username" placeholder="Your username" />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder="********" />
                    <br />
                </form>
            </div>
        )
    }
}
