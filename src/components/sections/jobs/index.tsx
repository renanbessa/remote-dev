import {isEmpty, isArray} from 'lodash'
import JobCard from '@components/ui/jobCard'

const Jobs: React.FC<any> = ({jobs}) => {
  if (isEmpty(jobs) && !isArray(jobs)) {
    return null
  }

  return (
    <div className="flex flex-wrap -mb-4">
      {jobs.map((job: any, index: number) => {
        return (
          <div
            key={`${job?.node?.id}-${index}` ?? ''}
            className="w-full md:w-1/2 lg:w-1/3 mb-4 px-2"
          >
            <JobCard job={job?.node} />
          </div>
        )
      })}
    </div>
  )
}

export default Jobs
