import React from 'react'
import * as C from '@chakra-ui/react'
import client from '@lib/apollo/client'
import {NextPage} from 'next'
import {useRouter} from 'next/router'
import {populateI18n} from 'src/utils/populateI18n'
import {GetStaticPaths, GetStaticProps} from 'next'
import * as Query from 'src/data'
import * as WP from 'src/types/generated/wp-graphql'
import {sanitize} from 'src/utils/miscellaneous'
import ErrorPage from 'next/error'
import {Layout} from '@components/layout'
import {Hero} from '@components'

interface WordpressVagaProps {
  data: WP.Vaga
}

const JobPage: NextPage<WordpressVagaProps> = ({data}) => {
  const router = useRouter()

  if (!router.isFallback && !data?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Hero title={data.title} />
      <C.Container>
        <C.Grid templateColumns="repeat(12, 1fr)" gap={4}>
          <C.GridItem colSpan={8}>
            <C.Stack spacing={4} py={16}>
              <C.SkeletonText isLoaded={!router.isFallback} noOfLines={20}>
                <div
                  className={'wp-content'}
                  dangerouslySetInnerHTML={{
                    __html: sanitize(data.content),
                  }}
                />
              </C.SkeletonText>
            </C.Stack>
          </C.GridItem>
        </C.Grid>
      </C.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (props) => {
  const {params} = props
  const {_nextI18Next} = await populateI18n(props.locale)

  const {data} = await client.query<WP.RootQuery>({
    query: Query.GetJob,
    variables: {
      uri: params?.slug ?? '/',
    },
  })

  return {
    props: {
      _nextI18Next,
      data: data.vaga ?? {},
    },
    revalidate: 1,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const {data} = await client.query<WP.RootQuery>({
    query: Query.GetJobSlugs,
  })

  const slugs =
    data.vagas?.nodes?.map((it) => it?.slug ?? '')?.filter((it) => !!it) ?? []

  return {
    paths: slugs.map((slug) => ({
      params: {slug},
    })),
    fallback: 'blocking',
  }
}

export default JobPage
