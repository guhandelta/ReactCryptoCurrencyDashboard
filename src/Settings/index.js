import React from 'react'
import WelcomeMsg from './WelcomeMsg'
import ConfirmButton from './ConfirmButton'
import Page from '../Shared/Page'
import CoinGrid from './CoinGrid'
import Search from './Search'

export default function index() {
    return (
        <Page name="settings">
            <WelcomeMsg />
            <CoinGrid favouriteSection />
            <ConfirmButton />
            <Search />
            <CoinGrid />
        </Page>
    )
}
