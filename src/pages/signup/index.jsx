import axios from "axios"
import { useState} from "react"
// components
import Button from "../../components/Button/Button"
import Layout from '../../components/Layout/Layout'
// css
import style from './signin.module.css'

export default function SignUp() {
  const PORT = 'http://localhost:3000' 
  const [usernameUser, setUsernameUser] = useState('')
  const [emailUser, setEmailUser] = useState('')
  const [passwordUser, setPasswordUser] = useState('')

  const [MgsBackEnd,setMgsBackEnd] = useState()

  function clearMessageFromDB(){
    const msgFild = document.querySelector('.MessageFild')
    setTimeout(()=>{
      msgFild.textContent=''
    },5000)
  }

  async function onChangeSendUser(event) {
    event.preventDefault()
    const dataUser = await axios.post(`${PORT}/api/signin`, {
      username: usernameUser,
      email: emailUser,
      password: passwordUser
    })
    const response = dataUser.data
    setMgsBackEnd(response?.message);
    clearMessageFromDB()
    setUsernameUser('')
    setEmailUser('')
    setPasswordUser('')
  }

  return (
    <Layout>
      <div className={style.wrapper_all}>

        <div className={style.banner_signin}>

        </div>
        <div className={style.Wrapform_signin}>

          <form method='POST' id='formSignin' className={style.form_signin}>

            <label>Username</label>
            <input
              value={usernameUser}
              onChange={event => setUsernameUser(event.target.value)}
              name='username'
              type="text"
              placeholder='insert your username'
            />

            <label>Email</label>
            <input
              value={emailUser}
              onChange={event => setEmailUser(event.target.value)}
              name='email'
              type="email"
              placeholder='insert your emil'
            />

            <label>Password</label>
            <input
              value={passwordUser}
              onChange={event => setPasswordUser(event.target.value)}
              name='password'
              type="password"
              placeholder='insert your password'
            />

            <Button
              type="button"
              btnColor='#6CE600'
              fontColor='#160000'
              func={e => onChangeSendUser(e)}
            >
              Sign In
            </Button>
            <p className='MessageFild'>
              {MgsBackEnd}
            </p>
          </form>
        </div>
      </div>
    </Layout>
  )
}
