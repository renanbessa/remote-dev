import {isEmpty, isArray} from 'lodash'
import JobCard from '@components/ui/jobCard'
import * as C from '@chakra-ui/react'

const Jobs: React.FC<any> = ({jobs}) => {
  if (isEmpty(jobs) && !isArray(jobs)) {
    return null
  }

  return (
    <C.Container maxW={'container.lg'}>
      <C.Stack spacing={4} py={16}>
        {jobs.map((job: any, index: number) => {
          return (
            <C.Box key={`${job?.node?.id}-${index}` ?? ''}>
              <JobCard job={job?.node} />
            </C.Box>
          )
        })}
      </C.Stack>
    </C.Container>
  )
}

export default Jobs
