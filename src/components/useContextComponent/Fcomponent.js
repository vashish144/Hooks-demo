import React, { Component } from 'react'
import { userContex, channelContex } from "./AppComponent"
class Fcomponent extends Component {
    render() {
        return (

            <div>
                <userContex.Consumer>
                    {user => {
                        return (
                            <channelContex.Consumer>
                                {
                                    channel => {
                                        return <div>hello {user} how are you {channel}</div>
                                    }
                                }
                            </channelContex.Consumer>
                        )
                    }}
                </userContex.Consumer>

            </div>
        )
    }
}

export default Fcomponent
