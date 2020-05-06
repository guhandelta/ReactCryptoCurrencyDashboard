import React from 'react'
import styled, { css } from 'styled-components'

import { SelectableTile } from '../Shared/Tile'
import { fontSize3, fontSizeBig } from '../Shared/Styles'
import { StyledCoinHeaderGrid } from '../Settings/CoinHeaderGrid'

const JustifyRight = styled.div`
    justify-self: right;
    color:#35bf2e;
`

const JustifyLeft = styled.div`
    justify-self: left;
`
const CoinPrice = styled.div`
    ${fontSizeBig}
`

const ChangePCT = styled.div`
    color: #35bf2e;
    ${props => props.red && css` color: red; `}
`

// fn() to shorten some price digits
const numberFormat = number => {
    return +(number + '').slice(0, 7);  // Conv number to string -> slice it -> conv back to number(the + at the beginning does that conv)
}

const StyledPriceTile = styled(SelectableTile)`
    ${props => props.compact && css`
        display: grid;
        ${fontSize3}
        grid-gap: 1px;
        grid-template-columns: repeat(3, 1fr);
        justify-items: right;
    `}
`

function ChangePercent({ data }) {
    return (
        <JustifyRight>
            <ChangePCT red={data.CHANGEPCT24HOUR < 0}>
                {numberFormat(data.CHANGEPCT24HOUR)}
            </ChangePCT>
        </JustifyRight>
    );
}

function PriceTile({ sym, data }) {
    return (
        <StyledPriceTile>
            <StyledCoinHeaderGrid>
                <div> {sym} </div>
                <ChangePercent data={data} />
            </StyledCoinHeaderGrid>
            <CoinPrice>
                ${numberFormat(data.PRICE)}
            </CoinPrice>
        </StyledPriceTile>
    );
}

function PriceTileContent({ sym, data }) {
    return (
        <StyledPriceTile compact>
            <JustifyLeft> {sym} </JustifyLeft>
            <ChangePercent data={data} />
            <div>
                ${numberFormat(data.PRICE)}
            </div>
        </StyledPriceTile>
    );
}

export default function ({ price, index }) {
    let sym = Object.keys(price)[0];
    let data = price[sym]['USD'];
    let TileClass = index < 5 ? PriceTile : PriceTileContent;
    return (
        <TileClass sym={sym} data={data} />
    )
}
