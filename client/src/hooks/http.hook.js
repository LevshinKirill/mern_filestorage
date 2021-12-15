

import { useState } from 'react'
import { toast } from 'react-toastify'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)

  const request = async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)
    try {
      const response = await fetch(url, { method, headers, body })
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
  }

  return { loading, request }
}