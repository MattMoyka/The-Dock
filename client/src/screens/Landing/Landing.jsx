import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

export default function Landing(props) {
  return (
    <div>
      <Layout user={props.user}>
        Landing
      </Layout>
    </div>
  )
}
