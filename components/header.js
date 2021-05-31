import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/lists'>list</Link>
          <button onClick={() => router.push('/lists')}>list</button>
        </li>
      </ul>
    </nav>
  )
}

export default Header
