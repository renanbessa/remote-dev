import NextLink from 'next/link'
import {sanitize} from '@utils/miscellaneous'
import {formatDate} from '@utils/formatDate'
import * as C from '@chakra-ui/react'
import {useStyleConfig} from '@chakra-ui/react'

const JobCard = ({job}: any) => {
  const styles = useStyleConfig('JobCard')
  return (
    <C.Flex __css={styles}>
      <C.SimpleGrid columns={2} spacing={10} alignItems={'center'}>
        <NextLink href={`/vagas/${job?.slug}/`} passHref>
          <C.Link variant={'basic'}>
            <C.Stack>
              <C.Box as="span">{`${job?.author?.node?.firstName} ${job?.author?.node?.lastName}`}</C.Box>
              <C.Heading
                as="h2"
                size="sm"
                dangerouslySetInnerHTML={{__html: sanitize(job?.title ?? '')}}
              />
            </C.Stack>
          </C.Link>
        </NextLink>
        <C.Box as="span">{formatDate(job?.date)}</C.Box>
      </C.SimpleGrid>
    </C.Flex>
  )
}

export default JobCard
