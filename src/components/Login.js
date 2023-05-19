import {React,useEffect} from 'react'
import { useNavigate} from 'react-router-dom'
import { UserAuth } from '../AuthContext';
import './Login.css'

function Login() {
  const{googleSignIn,user} = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async()=>{
         try {
           await googleSignIn();
         } catch (error) {
           console.log(error)
         }
  }
  useEffect(()=>{
       if(user !=  null){
          navigate('/');
       }

  },[user])

  

  return (
    <div className='login_box'>

        <div className='login_div'>
           <h1 className="title">Welcome to <span>MovieCorn</span></h1>
           <p>the complete movies and TV shows information provider. </p>
           <button type="button" class="btn btn-danger login_btn" onClick={handleGoogleSignIn}>Login with Google</button>
        </div>
       
    </div>
  )
}

export default Login