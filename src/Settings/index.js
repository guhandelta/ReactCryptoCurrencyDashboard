// import WelcomeMsg from './WelcomeMsg'

// export { WelcomeMsg }

import React from 'react'
import WelcomeMsg from './WelcomeMsg'
import ConfirmButton from './ConfirmButton'
import Page from '../Shared/Page'

export default function index() {
    return (
        <Page name="settings">
            <WelcomeMsg />
            <ConfirmButton />
        </Page>
    )
}
