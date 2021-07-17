import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'

export const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      history.push("/posts")
    }
  }, [history])
}
