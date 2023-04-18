import type { NextApiRequest, NextApiResponse } from 'next'

import { ISneaker } from '@/interfaces/sneaker.interface'

import data from '../data'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISneaker>
) {
  const { sneakerId } = req.query

  const response = data.find(item => item && String(item.id) === sneakerId)

  if (response !== undefined) {
    res.status(200).json(response)
  }
}