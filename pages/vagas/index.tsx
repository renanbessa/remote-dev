import React from 'react'
import {NextPage} from 'next'
import {Spacer, Flex} from '@chakra-ui/react'
import {Header, Main, Footer} from '@components'
import {AllJobs} from '@data/jobs/__generated__/AllJobs'
import {populateI18n} from 'src/utils/populateI18n'
import {GetStaticProps} from 'next'

export interface JobsDataQuerie {
  data: AllJobs
}

const RemoteJobs: NextPage<JobsDataQuerie> = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Main />
      <Spacer />
      <Footer />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async (props) => {
  const {_nextI18Next} = await populateI18n(props.locale)

  return {
    props: {
      _nextI18Next,
    },
  }
}

export default RemoteJobs
