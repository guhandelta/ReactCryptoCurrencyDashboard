import React from 'react'
import styled from 'styled-components'
import { DeletableTile } from '../Shared/Tile'

export const StyledCoinHeaderGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
export const StyledCoinSymbol = styled.div`
    justify-self: right;
`
export const StyledDeleteIcon = styled.div`
    justify-self: right;
    display: none;
    ${DeletableTile}:hover &{
        display: block;
        color: orange;
    }
`

export default function ({ name, symbol, favourites }) { // favourites => to check if it is in the favourites section
    return (
        <StyledCoinHeaderGrid>
            <div> {name} </div>
            {favourites ? (
                <StyledDeleteIcon> X </StyledDeleteIcon>
            ) : (
                    <StyledCoinSymbol> {symbol} </StyledCoinSymbol>
                )}
        </StyledCoinHeaderGrid>
    )
}
