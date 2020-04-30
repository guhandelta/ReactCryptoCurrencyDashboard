import React from 'react'
import _ from 'lodash'

const cc = require('cryptocompare');

export const AppContext = React.createContext(); // creating and exporting the context, to use it in teh consumers in the child components

const MAX_FAVOURITES = 10;

export class AppProvider extends React.Component {
    //The provider will be exported in the main wrapper, to provide the state to the other components
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            // default to the dashboard page, unless the user has any local storage data => new user
            favourites: ['BTC', 'ETH', 'XMR', 'DOGE'],
            ...this.savedSettings(), // This fn(), when called, will spread the results over the rest of the previous properties here
            setPage: this.setPage, // Passing in the updater function, so it can be used in the consumer components
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            isInFavourites: this.isInFavourites,
            confirmFavourites: this.confirmFavourites
        }
    }

    componentDidMount() {
        this.fetchCoins();
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data; // await = > waiting for the Promise = cc.coinList() =>  to resolve
        this.setState({ coinList });
    }

    addCoin = key => {
        let favourites = [...this.state.favourites];
        if (favourites.length < MAX_FAVOURITES) {
            favourites.push(key);
            this.setState({ favourites });
        }
    }

    removeCoin = key => {
        let favourites = [...this.state.favourites];
        this.setState({ favourites: _.pull(favourites, key) });
        // _.pull() pull the from the array and return the new array

    }

    isInFavourites = key => _.includes(this.state.favourites, key) // _.includes() checks if the give key is in that array

    confirmFavourites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        });
        localStorage.setItem('cryptoDash', JSON.stringify({
            favourites: this.state.favourites
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
        // If a returning user visits the page, pull in the favourite coisn from the cryptoDashData and return it
        let { favourites } = cryptoDashData;
        return { favourites }; // This will overwrite the state variable
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
