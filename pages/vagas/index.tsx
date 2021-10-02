import React from 'react'
import {NextPage} from 'next'
import {Hero} from '@components'
import {AllJobs} from '@data/jobs/__generated__/AllJobs'
import {populateI18n} from 'src/utils/populateI18n'
import {GetStaticProps} from 'next'
import {Layout} from '@components/layout'

export interface JobsDataQuerie {
  data: AllJobs
}

const RemoteJobs: NextPage<JobsDataQuerie> = () => {
  return (
    <Layout>
      <Hero title={'Vagas'} subtitle={'Aqui você encontra tudo'} />
    </Layout>
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
