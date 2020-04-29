import React from 'react'

export const AppContext = React.createContext(); // creating and exporting the context, to use it in teh consumers in the child components

export class AppProvider extends React.Component {
    //The provider will be exported in the main wrapper, to provide the state to the other components
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            setPage: this.setPage // Passing in the updater function, so it can be used in the consumer components
        }
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
