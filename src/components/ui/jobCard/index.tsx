import Link from 'next/link'
import {sanitize} from '@utils/miscellaneous'

const JobCard = ({job}) => {
  return (
    <div className="mb-8">
      <Link href={`/vagas-remotas/${job?.slug}/`}>
        <a>
          <h2
            className="font-bold mb-3 text-lg hover:text-blue-500"
            dangerouslySetInnerHTML={{__html: sanitize(job?.title ?? '')}}
          />
        </a>
      </Link>
    </div>
  )
}

export default JobCard
