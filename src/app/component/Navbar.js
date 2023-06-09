import Link from 'next/link'
import style from '@/app/style/nav.module.css'

const Navbar = () => {

  return (
    <header className={style.navberbg}>
      <div className={`container`}>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className={style.logo}>LOGO</h2>
          <div className='d-flex align-items-center'>
            <ul className='d-flex'>
              <li className='mx-2'>
                <Link href="/">Home</Link>
              </li>
              <li className='mx-2'>
                <Link href="/recipes">Recipes</Link>
              </li>
              <li className='mx-2'>
                <Link href="/about">About</Link>
              </li>
              <li className='mx-2'>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <div className=''>
              <Link className={`btn ${style["btn-custom"]}`} href="/signup">Signup</Link>
              <Link className={`btn ${style["btn-custom"]}`} href="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Navbar;