import React from 'react'
import { AppContext } from '../App/AppProvider'

// This is a wrapper component for the settings page, to make sure that the coinList is not accessed during 1st pageLoad, as the-
//- data won't be available, which when accessed will throw an undefined error, and instead replaced with a Loading text till the-
//- data is available 

export default function Content(props) {
    return (
        <AppContext.Consumer>
            {({ coinList }) => {
                if (!coinList) {
                    return <div>Loading Coins...</div>
                }
                return <div>{props.children}</div>
            }}
        </AppContext.Consumer>
    )
}
