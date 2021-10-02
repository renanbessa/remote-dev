import React from 'react'
import {Box, useTheme} from '@chakra-ui/react'

interface HeroProps {
  title?: string | null
  subtitle?: string
}

export const Hero = ({title, subtitle}: HeroProps) => {
  const theme = useTheme()
  return (
    <Box bg="main.100" color="white" textAlign="center" py={20}>
      <h1 data-test="main-heading" style={{fontSize: theme.fontSizes['5xl']}}>
        {title ? title : 'Vaga'}
      </h1>
      <p style={{fontSize: theme.fontSizes['lg']}}>{subtitle}</p>
    </Box>
  )
}
