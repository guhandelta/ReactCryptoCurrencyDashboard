import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../App/AppProvider'

const StyledConfirmButton = styled.div`
    margin: 20px;
    color: green;
    cursor: pointer;
    
`
const StyledCenterDiv = styled.div`
    display: grid;
    justify-content: center;
`

export default function () {
    return (
        <AppContext.Consumer>
            {({ confirmFavourites }) =>
                <StyledCenterDiv>
                    <StyledConfirmButton onClick={confirmFavourites}>
                        Confirm Favourites
                </StyledConfirmButton>
                </StyledCenterDiv>}
        </AppContext.Consumer>
    )
}
