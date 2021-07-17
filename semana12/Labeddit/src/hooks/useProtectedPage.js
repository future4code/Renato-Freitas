import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'

export const useProtectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (!token){
      history.push("/")
    }
  }, [history])
}
