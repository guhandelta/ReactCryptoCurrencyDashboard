import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../App/AppProvider'

export const StyledCoidGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

export default function () {
    return (
        <AppContext.Consumer>
            {({ coinList }) =>
                <StyledCoidGrid>
                    {Object.keys(coinList).map(coinKey => <div>{coinKey}</div>)}
                </StyledCoidGrid>
            }
        </AppContext.Consumer>
    )
}
