"use client"
import { ThemeOptions, createTheme } from "@mui/material"

const themeOptions : ThemeOptions = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1080,
            xl: 1250, 
        }
    },
    palette: {
        primary: {
            light: '#9B9B9B',
            main: '#5C5C5C',
            dark: '#000'
        },
        secondary: {
            main: '#A5D364',
        },
        warning: {
            light: '#FEF0F0',
            main: '#FF8585',
        },
        success: {
            light: '#A5D364',
            main: '#8BB43C',

        }
    },
    typography: {
        h1: {
            fontSize: '60px'
        },
        h2: {
            fontSize: '38px'
        },
        h3: {
            fontSize: '32px'
        },
        h4: {
            fontSize: '22px'
        },
        h5: {
            fontSize: '20px'
        },
        subtitle1: {
            fontSize: '16px'
        },
        body1: {
            fontSize: '14px'
        },
        body2: {
            fontSize: '11px'
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none',
            },
            styleOverrides: {
                    root: {
                        ":hover": {
                            textDecoration: 'underline'
                        }
                    }
                }
        },
        MuiContainer: {
            defaultProps: {
                disableGutters: true,
            },
            styleOverrides: {
                root: {
                    padding: '5px 15px',
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                }
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    minWidth: '0',
                    borderColor: '#000',

                    "&>span": {
                        margin: '0'
                    }
                }
            }
        },
        MuiTouchRipple: {
            styleOverrides: {
                root: {
                    maxWidth: '100%'
                }
            }
        },
        MuiInput: {
            defaultProps: {
                disableUnderline: false
            },
            styleOverrides: {
                root: {
                    
                }
            }
        }
    }
}

export const baseTheme = createTheme(themeOptions)