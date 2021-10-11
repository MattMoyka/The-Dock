import { useEffect } from 'react'
import { signOut } from '../../Services/users'
import { useHistory } from 'react-router-dom'


export default function SignOut(props) {
  const { setUser } = props
  const history = useHistory()
  useEffect(() => {
    const signOutUser = async () => {
      await signOut()
      setUser(null)
      history.push('/items')
    }
    signOutUser()
  }, [history, setUser])
  return ''
}
