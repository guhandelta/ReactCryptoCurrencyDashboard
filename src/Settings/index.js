import React from 'react'
import WelcomeMsg from './WelcomeMsg'
import ConfirmButton from './ConfirmButton'
import Page from '../Shared/Page'
import CoinGrid from './CoinGrid'

export default function index() {
    return (
        <Page name="settings">
            <WelcomeMsg />
            <CoinGrid favouriteSection />
            <ConfirmButton />
            <CoinGrid />
        </Page>
    )
}
