import React from 'react'
import { ToggleThemeButton, AppBar, defaultTheme } from 'react-admin'
import { Typography } from '@mui/material'

const darkTheme: any = {
  palette: { mode: 'dark' },
}

export const MyAppBar = (props: any) => (
  <AppBar {...props}>
    -<Typography flex="1" variant="h6" id="react-admin-title"></Typography>
    <ToggleThemeButton lightTheme={defaultTheme} darkTheme={darkTheme} />
  </AppBar>
)
