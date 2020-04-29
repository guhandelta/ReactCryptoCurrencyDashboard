import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../App/AppProvider'
import { SelectableTile } from '../Shared/Tile'

export const StyledCoidGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
`

export default function () {
    return (
        <AppContext.Consumer>
            {({ coinList }) =>
                <StyledCoidGrid>
                    {Object.keys(coinList).map(coinKey => <SelectableTile>{coinKey}</SelectableTile>)}
                </StyledCoidGrid>
            }
        </AppContext.Consumer>
    )
}
