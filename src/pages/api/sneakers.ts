// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { ISneaker } from '@/interfaces/sneaker.interface'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISneaker[]>
) {
  res.status(200).json([
    {
      "id": 1,
      "title": "New Balance 574 Vintage Brights",
      "image": "https://res.cloudinary.com/dtikzohdn/image/upload/v1681805333/cm996shb_nb_02_i_1_qojpl8.png",
      "price": 650
    },
    {
      "id": 2,
      "title": "New Balance Made in UK 920 Chinese New Year",
      "image": "https://res.cloudinary.com/dtikzohdn/image/upload/v1681805333/cm996shb_nb_02_i_2_gvekgu.png",
      "price": 1200
    },
    {
      "id": 3,
      "title": "New Balance 373 Modern Classics",
      "image": "https://res.cloudinary.com/dtikzohdn/image/upload/v1681805333/cm996shb_nb_02_i_3_rdmllz.png",
      "price": 800
    },
    {
      "id": 4,
      "title": "New Balance Made in UK 670 Chinese New Year",
      "image": "https://res.cloudinary.com/dtikzohdn/image/upload/v1681805333/cm996shb_nb_02_i_4_bpkwhr.png",
      "price": 780
    },
    {
      "id": 5,
      "title": "New Balance X-Racer Utility",
      "image": "https://res.cloudinary.com/dtikzohdn/image/upload/v1681805334/cm996shb_nb_02_i_5_jftz5j.png",
      "price": 1000
    },
    {
      "id": 6,
      "title": "New Balance 5740 Think Colorfully",
      "image": "https://res.cloudinary.com/dtikzohdn/image/upload/v1681805333/cm996shb_nb_02_i_6_selxod.png",
      "price": 940
    }
  ])
}
