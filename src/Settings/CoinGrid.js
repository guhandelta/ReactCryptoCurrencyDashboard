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
function getCoinsToDisplay(coinList, favourites) {
    return Object.keys(coinList).slice(0, favourites ? 10 : 100);
}

export default function ({ favourites }) {
    return (
        <AppContext.Consumer>
            {({ coinList }) =>
                <StyledCoindGrid>
                    {getCoinsToDisplay(coinList, favourites).map(coinKey => <CoinTile favourites={favourites} coinKey={coinKey} />)}
                </StyledCoindGrid>
            }
        </AppContext.Consumer>
    )
}
