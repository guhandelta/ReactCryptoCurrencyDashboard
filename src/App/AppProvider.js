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
            confirmFavourites: this.confirmFavourites,
            setFilteredCoins: this.setFilteredCoins
        }
    }

    componentDidMount() {
        //Fetch the coins and the prices of the coins on Page visit
        this.fetchCoins();
        this.fetchPrices();
    }

    fetchCoins = async () => {
        let coinList = (await cc.coinList()).Data; // await = > waiting for the Promise = cc.coinList() =>  to resolve
        this.setState({ coinList });
    }

    fetchPrices = async () => {
        //To prevent fetching the prices of the dummy favourites, in the initial state, that are not the user's favourite and which-
        //- have also not been set, on the user's first visit to the page
        if (this.state.firstVisit) return;
        // This statement gets resolved after the promises in priceFetch() are resolved after those promises have all been resolved,
        let prices = await this.priceFetch();//This actaully returns a promise array, which requires to be resolved separately
        prices = prices.filter(price => Object.keys(price).length);
        console.log(prices);
        this.setState({ prices });
    }

    priceFetch = async () => {//This will initially be an array of promises, 
        let coinPriceData = [];
        for (let i = 0; i < this.state.favourites.length; i++) {
            try {
                // Fetch the Coin Price data using CryptoCompare's priceFull()
                let priceData = await cc.priceFull(this.state.favourites[i], 'USD') //arg1 :> Coin Symbols || arg2 :> Currency 
                coinPriceData.push(priceData); //Push the coin price data into the array, after the promise has been resolved
            } catch (e) {
                console.warn('Error in fetching the prices');
            }
        }
        return coinPriceData;
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
        }, () => { //Fetch prices callback to fetch the prices of the favourite coins, to display it on the Dashboard
            this.fetchPrices();
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

    setFilteredCoins = (filteredCoins) => this.setState({ filteredCoins })

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
