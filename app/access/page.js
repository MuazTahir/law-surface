'use client'
import { RiLockPasswordLine } from 'react-icons/ri';
import Head from 'next/head';
// import '../../styles/globals.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';
// import './globals.css'
import styles from './page.module.css';
import { MdOutlineEmail } from 'react-icons/md';
import { useState, ChangeEvent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { setCompany, setUser } from '@/store/auth';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import ReduxProvider from '@/components/reduxProvider/reduxProvider';
import Link from 'next/link';

// type LanguageData = {
//   welcome: string
//   signIn: string
//   emailPlaceholder: string
//   passwordPlaceholder: string
//   signInButton: string
//   rightsReserved: string
//   isoCertificate: string
// }

const languageData = {
  en: {
    title:"Login",
    welcome: 'Welcome back',
    signIn: 'Sign in to your account to continue',
    emailPlaceholder: 'Enter email',
    passwordPlaceholder: 'Enter password',
    signInButton: 'Sign In',
    rightsReserved: 'LS Cloud Service. All Rights Reserved. 2024',
    isoCertificate:
      'Holds ISO 27001 certificate of Information Security, Cybersecurity, Privacy Protection and Information Security Management System',
  },
  ar: {
    title:"تسجيل الدخول",
    welcome: 'مرحبا بعودتك',
    signIn: 'سجّل الدخول إلى حسابك للمتابعة',
    emailPlaceholder: 'أدخل البريد الإلكتروني',
    passwordPlaceholder: 'أدخل كلمة المرور',
    signInButton: 'تسجيل الدخول',
    rightsReserved: 'خدمة السحابة LS. جميع الحقوق محفوظة. 2024',
    isoCertificate:
      'تحمل شهادة ISO 27001 لحماية أمن المعلومات، الأمن السيبراني، حماية الخصوصية ونظام إدارة أمن المعلومات',
  },
}

export default function Redux(){
 return <ReduxProvider>
  <Home></Home>
 </ReduxProvider> 
}

function Home() {

  let dispatch = useDispatch();

  let router = useRouter();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [language, setLanguage] = useState('en');

  let {register, handleSubmit, formState:{errors}} = useForm();

  const onSignup = (data)=>{

    data.action = "login";

    axios.post(process.env.NEXT_PUBLIC_API_SERVER+'/api/auth', data).then((resp)=>{
      if(resp.data.user){

        localStorage.setItem('token', resp.data.token);
            
        if(resp.data.user.company.approved){
          if(resp.data.user.type == "root"){
            router.push('/admin');
          }else{
            router.push('/dashboard');
          }
        }else{
          router.push('/trial-pending');
        }

        dispatch(setUser(resp.data.user));
        dispatch(setCompany(resp.data.user.company));

      }else{
        toast.error("Invalid credentials")
      }
    });

  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
  }

  const isFormValid = email && password

  const {
    welcome,
    signIn,
    emailPlaceholder,
    passwordPlaceholder,
    signInButton,
    rightsReserved,
    isoCertificate,
  } = languageData[language]

  useEffect(()=>{
    document.title = languageData[language].title;
  },[language])

  return (
    <>
   
      <div
        className={`container-fluid relative ${styles.login_form_body}`}
        style={{ overflow: 'hidden' }}
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
      
        <div className={`col-sm-12 ${styles.login_section_wrapper}`}>
          <div className={`my-auto ${styles.login_wrapper}`}>
            <div className={`${styles.brand_wrapper}`}>
              <div
                style={{ width: '173px' }}
                className={language === 'ar' ? 'text-right' : 'text-left'}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 808.9 207.14'
                  className='login_logo'
                  fill='#004afd'
                >
                  <g id='Layer_2' data-name='Layer 2'>
                    <g id='Surface'>
                      <rect
                        className='cls-1'
                        x='359.6'
                        y='0.41'
                        width='210.61'
                        height='88'
                        rx='17.01'
                        fill='#ffffff'
                      ></rect>
                      <path
                        className='cls-1'
                        d='M359.87,191.36l4.7-5.4q15.65,14.4,34.74,14.39,10.79,0,17.71-5.53a17.06,17.06,0,0,0,6.78-14q0-8-5.4-12.45-6.09-5-22-8.17-17.43-3.58-25-10t-7.61-17.57q0-10.8,8.86-18.13t22.28-7.33A51.69,51.69,0,0,1,428.09,119l-4.57,5.67a42.85,42.85,0,0,0-28.92-10.93q-10.52,0-17.16,5.4a16.24,16.24,0,0,0-6.5,13.14q0,8.17,5.53,12.59,6.22,5.26,22.7,8.58,16.74,3.47,24.35,9.83T431,180.43a23.7,23.7,0,0,1-9,19.09q-9,7.35-23.11,7.34Q377.17,206.86,359.87,191.36Z'
                      ></path>
                      <path
                        className='cls-1'
                        d='M450.92,199q-7.47-8-7.47-20.89V134.9h6.78v41.93q0,11.07,5.81,17.44,6.09,6.63,16.61,6.64a23.36,23.36,0,0,0,17.43-7.06q7.07-7.2,7.06-18.13V134.9h6.78v70.57h-6.78V192.33q-8.44,14.8-25.46,14.81Q458.53,207.14,450.92,199Z'
                      ></path>
                      <path
                        className='cls-1'
                        d='M521.36,134.9h6.78V155a36.86,36.86,0,0,1,12.45-15.5,29.68,29.68,0,0,1,18.82-5.68v7.48h-.69a28.44,28.44,0,0,0-21.45,9q-9.13,9.83-9.13,26.29v28.92h-6.78Z'
                      ></path>
                      <path
                        className='cls-1'
                        d='M572.55,141.13H562.31V134.9h10.24V128q0-12.17,6.23-18.4,5.54-5.53,14.81-5.54a31.68,31.68,0,0,1,10.52,1.66v6.37a36,36,0,0,0-10.52-1.8q-14.25,0-14.26,17.85v6.78H604v6.23H579.33v64.34h-6.78Z'
                      ></path>
                      <path
                        className='cls-1'
                        d='M611,201.46a19.55,19.55,0,0,1-8.71-16.74,19.88,19.88,0,0,1,8.58-17q8.29-6,22.27-5.95a90.88,90.88,0,0,1,23.39,3v-3q0-10.51-6.23-16.19-5.94-5.4-17-5.4a48.19,48.19,0,0,0-22.14,5.67l-2.49-6q13.14-6.09,25.05-6.09,14.53,0,22.28,7.75,7.18,7.2,7.19,19.93v44h-6.64V193.71q-9.54,13.42-27,13.43A30.5,30.5,0,0,1,611,201.46Zm37.78-6.78q7.89-6.23,7.89-15.64v-8q-5.54-1.38-10.38-2.22a96.61,96.61,0,0,0-13.56-1q-11.07,0-17.16,4.56a14.85,14.85,0,0,0,.14,24.08A23.31,23.31,0,0,0,630,200.77Q641.05,200.77,648.8,194.68Z'
                      ></path>
                      <path
                        className='cls-1'
                        d='M684.78,196.34a38,38,0,0,1,0-52.17,34.2,34.2,0,0,1,25.6-10.93q16.47,0,28.09,13.15l-4.71,4.84q-11.34-11.62-23.52-11.62a26.36,26.36,0,0,0-20.07,9,32,32,0,0,0,0,43.31,27.38,27.38,0,0,0,20.62,8.86q12.6,0,23.39-12l5,4.43q-12.31,14-28.78,14A34.1,34.1,0,0,1,684.78,196.34Z'
                      ></path>
                      <path
                        className='cls-1'
                        d='M753.41,196.9Q743,186.39,743,170.05q0-15.5,9.54-26.15a31.06,31.06,0,0,1,23.94-10.66q14.54,0,23.67,10.66,8.71,10.38,8.71,26.29a23.69,23.69,0,0,1-.13,2.77H750.23q1,12.72,9.13,20.48a26,26,0,0,0,18.55,7.33q13.83,0,24.21-11.07l4.71,4.15q-12.32,13.29-29.2,13.29A32.57,32.57,0,0,1,753.41,196.9Zm48.16-30q-.83-11.62-6.92-19.1-6.92-8.29-18.4-8.3a23.33,23.33,0,0,0-17.72,7.89q-7.34,7.74-8.3,19.51Z'
                      ></path>
                      <path
                        className='cls-1'
                        d='M791.58,107.89a10.76,10.76,0,1,0,10.76,10.76A10.76,10.76,0,0,0,791.58,107.89Zm0,19.32a8.57,8.57,0,1,1,8.57-8.56A8.56,8.56,0,0,1,791.58,127.21Z'
                      ></path>
                      <path
                        className='cls-1'
                        d='M794.6,120a3.29,3.29,0,1,1-.05-2.74h2.89a6,6,0,1,0,0,2.74Z'
                      ></path>
                      <path
                        className='cls-1'
                        d='M211.33,206.6l-105.76-.19c-2.4,0-4.69-.08-6.87-.22s-4.48-.35-6.87-.63a34.84,34.84,0,0,0-3.7-.62,37.2,37.2,0,0,1-3.7-.63,101.36,101.36,0,0,1-22.2-7.06,116.49,116.49,0,0,1-19.86-11.39l-.21-.2a88.91,88.91,0,0,1-11.36-9.52,135.66,135.66,0,0,1-9.86-11,100.86,100.86,0,0,1-19-41.32c-.29-1.37-.53-2.72-.74-4s-.39-2.64-.52-4c-.14-1.1-.28-2.17-.42-3.2a23.89,23.89,0,0,1-.21-3.2L.21,0A62,62,0,0,1,25.37,15.94,61,61,0,0,1,40.09,41.36a43.82,43.82,0,0,1,1.79,8,65.42,65.42,0,0,1,.52,8.47l-.09,45.41v2.48a11.46,11.46,0,0,0,.21,2.27,76.87,76.87,0,0,0,1.25,8.16,66.51,66.51,0,0,0,2.1,7.74,61.8,61.8,0,0,0,15,23.15,63.61,63.61,0,0,0,44.8,18.24l45.9.09a74.78,74.78,0,0,1,9,.53,52.69,52.69,0,0,1,8.56,1.77,68.42,68.42,0,0,1,14.16,5.8,64.93,64.93,0,0,1,17,14.07A60,60,0,0,1,211.33,206.6Z'
                      ></path>
                      <path
                        className='cls-1'
                        d='M317.2,145.07a60,60,0,0,1-3.63,20.64,62.09,62.09,0,0,1-15.06,22.88,63.62,63.62,0,0,1-23.72,14.62,64.57,64.57,0,0,1-21.16,3.47l-148.06-.27a62.62,62.62,0,0,1,16.23-24.74A60.8,60.8,0,0,1,148,167.06a33.41,33.41,0,0,1,8.68-1.64l97.08.18a20.67,20.67,0,0,0,15-6,20.58,20.58,0,0,0,.06-29.31,20.7,20.7,0,0,0-15-6l-84.61-.15a63.73,63.73,0,0,1-44.8-18.24,61.8,61.8,0,0,1-15-23.15,61.16,61.16,0,0,1,.08-41.29,61.74,61.74,0,0,1,15.06-23.09A63.78,63.78,0,0,1,169.42.3L317.05.57A61.37,61.37,0,0,1,300.83,24.9,62,62,0,0,1,275.1,39.3a65.25,65.25,0,0,1-18,2.45l-87.78-.16a20.71,20.71,0,0,0-15,6,19.69,19.69,0,0,0-6.16,14.64,19.69,19.69,0,0,0,6.1,14.67,20.7,20.7,0,0,0,15,6l84.61.15a63.69,63.69,0,0,1,44.8,18.25,61.68,61.68,0,0,1,15,23.14A60,60,0,0,1,317.2,145.07Z'
                      ></path>
                      <path
                        className='cls-2'
                        d='M388.58,16H403V61.62l18.84,0V73.26l-33.24,0Z'
                      ></path>
                      <path
                        className='cls-2'
                        d='M455.62,67.77c-1.5,3.9-5.32,6.15-10.72,6.15a18.75,18.75,0,0,1-13.8-6c-3.53-3.75-5.4-8.93-5.4-14.85,0-6.15,1.58-10.88,5-14.7a18.58,18.58,0,0,1,13.8-6.15c5.09,0,9.14,1.87,11.47,6V33h12.6V73.24h-13Zm.38-14.7c0-6.53-4-10.88-8.55-10.88S439,46.47,439,53.07s3.82,10.87,8.47,10.87S456,59.59,456,53.07Z'
                      ></path>
                      <path
                        className='cls-2'
                        d='M509.1,53.89a58.44,58.44,0,0,1-1.8-9,60.66,60.66,0,0,1-1.73,9l-4.95,19.35H486.75L473.48,33h14l5.1,20.92a78.72,78.72,0,0,1,1.5,8.4,71.33,71.33,0,0,1,1.42-8.4L500.62,33H514l5,20.92a69.8,69.8,0,0,1,1.57,8.4,68,68,0,0,1,1.58-8.4l5-20.92h14.1L527.92,73.24H514Z'
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>

              <div
                className={language === 'ar' ? 'text-right' : 'text-left'}
                style={{ display: 'flex', gap: '20px' }}
              >
                <a
                  href='#'
                  onClick={() => handleLanguageChange('ar')}
                  className='text-dark text-xl-left text-decoration-none'
                >
                  العربية
                </a>{' '}
                <a
                  href='#'
                  onClick={() => handleLanguageChange('en')}
                  className='text-dark text-decoration-none'
                >
                  English
                </a>
              </div>
            </div>

            <div className={`${styles.login_portal_page}`}>
              <div className='col-6 col-sm- 5'>
                <h1
                  className={language === 'ar' ? 'text-right' : `text-left ${styles.welcome_text}`}
                  style={{ fontSize: '18px', marginTop: '20px' }}
                >
                  {welcome}
                </h1>
                <p className={`text-body  ${styles.signInText} `}>{signIn}</p>
                <form onSubmit={handleSubmit(onSignup)}>
                  <div className={`form-group mb-3 ${styles.form_group}`}>
                    <MdOutlineEmail className={styles.icon} />
                    <input
                    {...register('user_email',{required:true})}
                      type='email'
                      className={styles.form_control}
                      placeholder={emailPlaceholder}
                      // value={email}
                      // onChange={handleEmailChange}
                    />
                   {errors.user_email && <div className='form-error'>This field is required</div> }
                  </div>
                  <div className={`form-group mb-4 ${styles.form_group}`}>
                    <RiLockPasswordLine className={styles.icon} />
                    <input
                    {...register('user_password',{required:true})}

                      type='password'
                      className={styles.form_control}
                      placeholder={passwordPlaceholder}
                      // value={password}
                      // onChange={handlePasswordChange}
                    />
                   {errors.user_password && <div className='form-error'>This field is required</div> }
                
                  </div>
              
                  <button
                    type='submit'
                    // disabled={!isFormValid}
                    className='btn btn-primary text-white w-100'
                  >
                    {signInButton}
                  </button>
                </form>

                <div className={`${styles.social_iconsContainer}`}>
                  <a href='#' className={`${styles.social_icon}`}>
                    <i className='bi bi-whatsapp'></i>
                  </a>
                  <a href='#' className={`${styles.social_icon}`}>
                    <i className='bi bi-envelope'></i>
                  </a>
                  <a href='#' className={`${styles.social_icon}`}>
                    <i className='bi bi-facebook'></i>
                  </a>
                  <a href='#' className={`${styles.social_icon}`}>
                    <i className='bi bi-twitter'></i>
                  </a>
                  <a href='#' className={`${styles.social_icon}`}>
                    <i className='bi bi-instagram'></i>
                  </a>
                  <a href='#' className={`${styles.social_icon}`}>
                    <i className='bi bi-linkedin'></i>
                  </a>
                </div>
              </div>
              <div className={`col-6  ${styles.imageContainer}`}>
                <img src='/images/login-main.jpg' alt='background' className={`${styles.login_bg_24}`} />
              </div>
            </div>
          </div>
          <footer className='text-center mt-5'>
            <p className={`text-muted ${styles.footerText1}`}>{rightsReserved}</p>
            <p className={`text-muted ${styles.footerText}`}>{isoCertificate}</p>
          </footer>
        </div>
      </div>
    </>
  )
}
