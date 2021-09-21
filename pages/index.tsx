import React from 'react'
import {NextPage} from 'next'
import {Spacer, Flex} from '@chakra-ui/react'
import {GetStaticProps} from 'next'
import client from '@lib/apollo/client'
import {populateI18n} from 'src/utils/populateI18n'
import {Header, Main, Footer} from '@components'
import Jobs from '@components/sections/jobs'
import {GetAllJobs} from '@data/jobs/getAllJobs'
import {AllJobs} from '@data/jobs/__generated__/AllJobs'

export interface JobsDataQuerie {
  data: AllJobs
}

const Home: NextPage<JobsDataQuerie> = ({data}) => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Main />
      <Jobs jobs={data?.vagas?.edges ?? []} />
      <Spacer />
      <Footer />
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async (props) => {
  const {_nextI18Next} = await populateI18n(props.locale)
  const {data} = await client.query({
    query: GetAllJobs,
  })

  return {
    props: {
      _nextI18Next,
      data,
    },
  }
}

export default Home
