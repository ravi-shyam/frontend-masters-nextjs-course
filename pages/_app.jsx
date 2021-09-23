import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'

export default function Application({ Component, props }) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...props}/>
        </ThemeProvider>
    )
}