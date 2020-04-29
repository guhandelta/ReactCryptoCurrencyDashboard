import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../App/AppProvider'
import { fontSize1, greenBoxShadow, color3 } from '../Shared/Styles'

const StyledConfirmButton = styled.div`
    margin: 20px;
    color: ${color3};
    ${fontSize1};
    padding: 10px;
    cursor: pointer;
    &:hover{
        ${greenBoxShadow}
    }
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
