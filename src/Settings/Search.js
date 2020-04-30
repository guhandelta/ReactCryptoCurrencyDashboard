import React from 'react'
import styled from 'styled-components'
import { backgroundColor2, fontSize2 } from '../Shared/Styles'

const StyledSearchGrid = styled.div`
    display: grid;
    grid-template-columns: 220px 1fr;
`
const StyledSearchInput = styled.input`
    ${backgroundColor2}
    ${fontSize2}
    border: 1.5px solid;
    height: 35px;
    color: #1163c9;
    place-self: center left;
    border-radius: 3px;
`

export default function () {
    return (
        <StyledSearchGrid>
            <h1>Search Coins</h1>
            <StyledSearchInput />
        </StyledSearchGrid>
    )
}
