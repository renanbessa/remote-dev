import React from 'react'

import * as WP from 'src/types/generated/wp-graphql'

export interface ContextProps {
  data?: WP.Vaga
}

export const Context = React.createContext<ContextProps>({})
