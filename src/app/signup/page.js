import Link from 'next/link';
import style from '../style/signup.module.css'
import { FaLock, FaUserAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function page() {
    return (
        <section className={`${style['login-box']}`}>
            <div className="container">
                <div className='row'>
                    <div className={`col-md-4 offset-2 ${style["form-bg-img"]}`}>
                        <div>
                            <h2 className='mb-4'>Welcome</h2>
                            {/* <p>Every new friend is a new adventure</p>
                        <p>Let's get connected</p> */}
                            <p className='mb-2'>Complete miles of journey with one step</p>
                            <p>Let's get started</p>
                        </div>
                    </div>
                    <div className={`col-md-4 ${style.formbg}`}>
                        <h2 className={`${style["h2-title"]}`}>Signup</h2>
                        <form action="">
                            <div className={style.inputline}>
                                <div className={`${style["inputfield-svg"]}`}>
                                    <FaUserAlt />
                                </div>
                                <input type="text" className={style.inputfield} placeholder='Name'/>
                            </div>
                            <div className={style.inputline}>
                                <div className={`${style["inputfield-svg"]}`}>
                                    <SiGmail />
                                </div>
                                <input type="email" className={style.inputfield} placeholder='Email'/>
                            </div>
                            <div className={style.inputline}>
                                <div className={`${style["inputfield-svg"]}`}>
                                    <FaLock />
                                </div>
                                <input type="password" className={style.inputfield} placeholder='Password'/>
                            </div>
                            <input type="submit" value="Submit" className={`${style["submit-btn"]}`} />
                        </form>
                        <p className={`${style["p-link"]}`}>Already have an account? <Link href="/login">Login now</Link> </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
