import Link from 'next/link'
import {sanitize} from '@utils/miscellaneous'
import * as C from '@chakra-ui/react'
import {useStyleConfig} from '@chakra-ui/react'

const JobCard = ({job}) => {
  const styles = useStyleConfig('JobCard')
  return (
    <C.Box __css={styles}>
      <Link href={`/vagas-remotas/${job?.slug}/`}>
        <a>
          <h2 dangerouslySetInnerHTML={{__html: sanitize(job?.title ?? '')}} />
        </a>
      </Link>
    </C.Box>
  )
}

export default JobCard
