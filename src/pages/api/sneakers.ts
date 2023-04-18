import type { NextApiRequest, NextApiResponse } from 'next'

import { ISneaker } from '@/interfaces/sneaker.interface'

import data from './data'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISneaker[]>
) {
  res.status(200).json(data)
}