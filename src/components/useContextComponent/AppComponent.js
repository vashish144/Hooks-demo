import React, { Component,createContext } from 'react'
import Ccomponent from './Ccomponent'

export const userContex=React.createContext()
class AppComponent extends Component {
    render() {
        return (
            <div>
            <userContex.Provider value="vikram">
                <Ccomponent/>
            </userContex.Provider>
            </div>
        )
    }
}

export default AppComponent
