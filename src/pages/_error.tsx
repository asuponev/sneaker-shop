import { NextPage, NextPageContext } from 'next'

import CustomError from '@/components/error/CustomError'

interface IErrorProps {
  statusCode?: number
}

const Error: NextPage<IErrorProps> = ({ 
  statusCode 
}) => {
  return (
    <p>
      {statusCode
        ? <CustomError text={`An error ${statusCode} occurred on server`} />
        : <CustomError />}
    </p>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error