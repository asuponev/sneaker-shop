import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const useLoading = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const start = () => {
      setLoading(true)
    }

    const end = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', start)
    router.events.on('routeChangeComplete', end)
    router.events.on('routeChangeError', end)

    return () => {
      router.events.off('routeChangeStart', start)
      router.events.off('routeChangeComplete', end)
      router.events.off('routeChangeError', end)
    }
  }, [router])

  return {
    loading
  }
}

export default useLoading