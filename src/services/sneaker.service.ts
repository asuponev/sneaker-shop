import axios from 'axios'

import { ISneaker } from '@/components/interfaces/sneaker.interface'

const API_URL = process.env.API_URL
axios.defaults.baseURL = API_URL

export const SneakerService = {
  async getAll() {
    const { data } = await axios.get<ISneaker[]>('/api/sneakers')
    return data
  },

  async getById(id: string) {
    const { data } = await axios.get<ISneaker[]>('/api/sneakers', {
      params: { id }
    })
    return data[0]
  },
}