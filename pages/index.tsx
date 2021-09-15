import React from 'react'

import {HomeLayout} from '@components'
import {GetStaticProps} from 'next'
import {populateI18n} from 'src/utils/populateI18n'

export const getStaticProps: GetStaticProps = async (props) => {
  const {_nextI18Next} = await populateI18n(props.locale)

  return {
    props: {
      _nextI18Next,
    },
  }
}

const Home: React.FC = () => {
  return <HomeLayout />
}

export default Home
