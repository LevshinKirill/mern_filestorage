

import { useState, useCallback } from 'react'
import { toast } from 'react-toastify'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)
    try {
      if (body) {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json'
      }
      const response = await fetch(url, { method, body, headers })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Something wrong')
      }
      setLoading(false)
      return data
    } catch (e) {
      setLoading(false)
      toast(e.message)
      throw e
    }
  }, [])

  return { loading, request }
}