import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import './Landing.css'


export default function Landing(props) {
  return (
    <div>
      <Layout user={props.user}>
        <div className='landing'>
          <p className='glass'>The Common Travelers'<br /> eCommerce</p>
          <div className='call'>
            <Link to='/items' className='text-call'>Start Your Journey Now</Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}
