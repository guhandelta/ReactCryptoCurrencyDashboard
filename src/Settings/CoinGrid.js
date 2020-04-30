import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../App/AppProvider'
// import { SelectableTile } from '../Shared/Tile'
import CoinTile from './CoinTile'

export const StyledCoindGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
    margin-top: 40px;
`
function getCoinsToDisplay(coinList, favouriteSection, favourites) {
    return favouriteSection ? favourites : Object.keys(coinList).slice(0, 100);
    //Display the favourites in the favouriteSection, instead os slicing the list
}

export default function ({ favouriteSection }) {
    return (
        <AppContext.Consumer>
            {({ coinList, favourites }) =>
                <StyledCoindGrid>
                    {getCoinsToDisplay(coinList, favouriteSection, favourites).map(coinKey => <CoinTile favouriteSection={favouriteSection} coinKey={coinKey} />)}
                </StyledCoindGrid>
            }
        </AppContext.Consumer>
    )
}
