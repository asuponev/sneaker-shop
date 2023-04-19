import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const { sneakerId } = req.query

  res.status(200).json({
    hello: 'Here should be a query to the database, but in this project the request for mock data is made from the server component using json-server deployed in another repository'
  })
}