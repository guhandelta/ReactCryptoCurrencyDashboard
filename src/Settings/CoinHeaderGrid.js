import React from 'react'
import styled from 'styled-components'

export const StyledCoinHeaderGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
export const StyledCoinSymbol = styled.div`
    justify-self: right;
`

export default function ({ name, symbol }) {
    return (
        <StyledCoinHeaderGrid>
            <div>
                {name}
            </div>
            <StyledCoinSymbol>
                {symbol}
            </StyledCoinSymbol>
        </StyledCoinHeaderGrid>
    )
}
