import React from 'react'
import {Box, useTheme} from '@chakra-ui/react'

import {Button} from '@components'

export const Main: React.FC = () => {
  const theme = useTheme()
  return (
    <Box bg="main.100" color="white" textAlign="center" py={20}>
      <h1 data-test="main-heading" style={{fontSize: theme.fontSizes['5xl']}}>
        Remote First
      </h1>
      <p style={{fontSize: theme.fontSizes['lg']}}>
        O nosso lema é: Encontre seu trabalho remoto, seja feliz e viva onde
        você quiser
      </p>
      <Button colorScheme="green" variant="solid" size="md">
        <a
          data-test="docs-btn-anchor"
          href="https://pankod.github.io/superplate/"
          target="_blank"
        >
          Ver Vagas
        </a>
      </Button>
    </Box>
  )
}
