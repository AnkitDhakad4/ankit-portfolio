import React from 'react'
import Cursor from './Cursor'

function Protection({isAllowed,children}) {
    if(isAllowed) return <Cursor>{children}</Cursor>

    else return <>{children}</>
}


export default Protection