import React, { Component, createContext } from 'react'
import Ccomponent from './Ccomponent'

export const userContex = React.createContext()
export const channelContex = React.createContext()
class AppComponent extends Component {
    render() {
        return (
            <div>
                <userContex.Provider value="vikram">
                    <channelContex.Provider value="ashish">
                        <Ccomponent />
                    </channelContex.Provider>
                </userContex.Provider>
            </div>
        )
    }
}

export default AppComponent
