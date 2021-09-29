import React from 'react'
import client from '@lib/apollo/client'
import {NextPage} from 'next'
import {isEmpty} from 'lodash'
import {useRouter} from 'next/router'
import {populateI18n} from 'src/utils/populateI18n'
import {GetStaticPaths, GetStaticProps} from 'next'
import {GetJob} from '@data/jobs/getJob'
import {GetJobSlugs} from '@data/jobs/getAllJobs'
import {sanitize} from 'src/utils/miscellaneous'
import {Spacer, Flex} from '@chakra-ui/react'
import {Header, Main, Footer} from '@components'

const Job: NextPage<any> = ({data}) => {
  console.log(data)
  const router = useRouter()

  if (router.isFallback) {
    return <span>Loading...</span>
  }

  return (
    <p
      dangerouslySetInnerHTML={{__html: sanitize(data?.vaga?.content ?? {})}}
    />
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  console.log(params)
  const {data} = await client.query({
    query: GetJob,
    variables: {
      uri: params?.slug ?? '/',
    },
  })

  return {
    props: {
      data,
    },
  }
}

/**
 * @returns {Promise<{paths: [], fallback: boolean}>}
 */
export const getStaticPaths: GetStaticPaths = async () => {
  const {data} = await client.query({
    query: GetJobSlugs,
  })

  const pathsData: any = []

  data?.vagas?.nodes &&
    data?.vagas?.nodes.map((vaga: any) => {
      if (!isEmpty(vaga?.slug)) {
        pathsData.push({params: {slug: vaga?.slug}})
      }
    })

  return {
    paths: pathsData,
    fallback: true,
  }
}

export default Job
