import React, { Component } from 'react'
import { userContex } from "./AppComponent"
class Fcomponent extends Component {
    render() {
        return (

            <div>
                <userContex.Consumer>
                    {user => {
                        return <div>user contex value- {user}</div>
                    }}
                </userContex.Consumer>

            </div>
        )
    }
}

export default Fcomponent
