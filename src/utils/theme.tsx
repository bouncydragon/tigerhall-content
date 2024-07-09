import { extendTheme } from '@chakra-ui/react'

const colors = {
    primary: '#FF5900',
    secondary: {
        soSunny: '#F78104',
        kindaYellow: '#FAAB36',
        teal: '#005F60',
        gray: '#F5F3EE',
        black: '#000000',
        white: '#FFFFFF'
    },
    tigerOrange: {
        100: '#FFF3ED',
        200: '#FFDECC',
        300: '#FFC3A3',
        400: '#FFA97A',
        500: '#FF7429',
        600: '#FF5900', // main branch color
        700: '#DD3722',
        800: '#AD3D00',
        900: '#842E00'
    },
    soSunny: {
        50: '#FFF8F1',
        100: '#FECCD9',
        200: '#FCE5CC',
        300: '#FCC9C',
        400: '#FAB269',
        500: '#F9936',
        600: '#F78104', // secondary
        700: '#DD7608',
        800: '#BA6103',
        900: '#7D4003'
    },
    kindaYellow: {
        50: '#FFEDD6',
        100: '#FFEDD6',
        200: '#FFE7C1',
        300: '#FCDEB0',
        400: '#FCCC87',
        500: '#FABD5E',
        600: '#FAAB36', // secondary
        700: '#D4902B',
        800: '#BA8029',
        900: '#7D571C',
    },
    teal: {
        50: '#EAF6F6',
        100: '#D4EDED',
        200: '#A6D9D9',
        300: '#7DC4C7',
        400: '#249EA0',
        500: '#008083',
        600: '#005F60',
        700: '#004747',
        800: '#003030',
        900: '#001717'
    },
    lightGray: {
        50: '#FBFCFC',
        100: '#F8F8F9',
        200: '#F4F5F5',
        300: '#F1F2F2',
        400: '#EAEBEC',
        500: '#E3E5E5',
        600: '#DCDEDF',
        700: '#CDCFD0',
        720: '#797670',
        800: '#BEC0C2',
        900: '#AFB2B3',
        920: '#383733',
    },
    darkGray: {
        50: '#A0A3A5',
        100: '#828587',
        200: '#64686A',
        300: '#464A4D',
        400: '#383B3E',
        500: '#2A2C2E',
        600: '#1C1E1F',
        700: '#151617',
        800: '#0E0F0F',
        900: '#070708',
    },
    green: {
        50: '#FOFFF4',
        100: '#C6F7C4',
        200: '#9BE899',
        300: '#5AD057',
        400: '#2FC12C',
        500: '#04B100',
        600: '#038E00',
        700: '#026A00',
        800: '#024700',
        900: '#1C4532',
    },
    red: {
        50: '#FFF5F5',
        100: '#FBCDC0',
        200: '#F46A6A',
        300: '#F13838',
        400: '#ED0606',
        500: '#BE0505',
        600: '#8E0404',
        700: '#5F0202',
        800: '#470202',
        900: '#3C080A',
    },
    blue: {
        50: '#EBF8FF',
        100: '#BEE3F8',
        200: '#90CDF4',
        300: '#63B3ED',
        400: '#4299E1',
        500: '#3182CE',
        600: '#2B6CB0',
        700: '#2C5282',
        800: '#2A4365',
        900: '#1A365D',
    }
};

const fonts = {
    body: 'PP Neue Montreal, Arial, sans-serif',
    heading: 'PP Formula Arial, sans-serif',
    mono: 'Roboto-Mono, monospace'
}

const fontSizes = {
    '3xs': '8px',
    '2xs': '10px',
    'xs': '12px',
    'sm': '14px',
    'md': '16px',
    'lg': '18px',
    'xl': '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '32px',
    '5xl': '36px',
    '6xl': '40px',
    '7xl': '52px',
    '8xl': '64px',
    '9xl': '80px',
    '10xl': '108px',
}

const theme = extendTheme ({colors, fonts, fontSizes})
export default theme;