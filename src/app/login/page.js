import Link from 'next/link';
import style from '../style/signup.module.css'
import { FaLock } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function page() {
    return (
        <section className={`${style['login-box']}`}>
            <div className="container">
                <div className='row'>
                    <div className={`col-md-4 offset-2 ${style["form-bg-img"]}`}>
                        <div>
                            <h2 className='mb-4'>Welcome</h2>
                            <p className='mb-2'>Every new friend is a new adventure</p>
                            <p>Let's get connected</p>
                        </div>
                    </div>
                    <div className={`col-md-4 ${style.formbg}`}>
                        <h2 className={`${style["h2-title"]}`}>Login</h2>
                        <form action="">
                            <div className={style.inputline}>
                                <div className={`${style["inputfield-svg"]}`}>
                                    <SiGmail />
                                </div>
                                <input type="email" className={style.inputfield} placeholder='Email' />
                            </div>
                            <div className={style.inputline}>
                                <div className={`${style["inputfield-svg"]}`}>
                                    <FaLock />
                                </div>
                                <input type="password" className={style.inputfield} placeholder='Password' />
                            </div>
                            <input type="submit" value="Submit" className={`${style["submit-btn"]}`} />
                        </form>
                        <p className={`${style["p-link"]}`}>Don't have an account? <Link href="/signup">Signup now</Link> </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
