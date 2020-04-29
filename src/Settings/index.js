// import WelcomeMsg from './WelcomeMsg'

// export { WelcomeMsg }

import React from 'react'
import WelcomeMsg from './WelcomeMsg'
import ConfirmButton from './ConfirmButton'

export default function index() {
    return (
        <div>
            <WelcomeMsg />
            <ConfirmButton />
        </div>
    )
}
