import React from 'react'

export const AppContext = React.createContext(); // creating and exporting the context, to use it in teh consumers in the child components

export class AppProvider extends React.Component {
    //The provider will be exported in the main wrapper, to provide the state to the other components
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            // default to the dashboard page, unless the user has any local storage data => new user
            ...this.savedSettings(), // This fn(), when called, will spread the results over the rest of the previous properties here
            setPage: this.setPage, // Passing in the updater function, so it can be used in the consumer components
            confirmFavourites: this.confirmFavourites
        }
    }

    confirmFavourites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });
        localStorage.setItem('cryptoDash', JSON.stringify({
            test: 'It works!!!'
        }));
    }

    savedSettings() {
        // getItem() & setItem() from localStorage, allows to get/set items from/to the localStorage
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash')); // parse() to conv the return data, to string
        if (!cryptoDashData) { // cryptoDashData will return undefined when a user visits the page for the 1st time
            return {
                page: 'settings',
                firstVisit: true // This var is not needed to be pulled into the state, this could be set in the state, prior to this-
                //- return, but firstVisit : false/undefined is all the same, 
            }
        }
        return {};
    }

    setPage = page => this.setState({ page });

    render() {
        return (
            <div>
                <AppContext.Provider value={this.state}>
                    {this.props.children}
                </AppContext.Provider>
            </div>
        )
    }
}
