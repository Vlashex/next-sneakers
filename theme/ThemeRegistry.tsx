"use client"
import {
    experimental_extendTheme as materialExtendTheme,
    Experimental_CssVarsProvider as MaterialCssVarsProvider,
    THEME_ID as MATERIAL_THEME_ID,
  } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import { baseTheme } from './baseTheme';

  
  const materialTheme = materialExtendTheme(baseTheme);
  
  export default function App(
    {
        children
    } : {
        children: React.ReactElement
    }) {
    return (
      <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
        <CssBaseline enableColorScheme />
          {children}
      </MaterialCssVarsProvider>
    );
  }
  