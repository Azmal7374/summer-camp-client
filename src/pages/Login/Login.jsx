import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import SocialLogin from '../share/SocialLogin/SocialLogin';
const Login = () => {
 
  const [disabled,setDisabled] = useState(true)
  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/"

   

    const handleLogin =(event) =>{
         event.preventDefault();
         const form = event.target;
         const email = form.email.value;
         const password = form.password.value;
         console.log(email, password);

         signIn(email, password)
         .then(result => {
          const user = result.user;
          console.log(user)
          Swal.fire({
            title:  'User Login Successfully!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          navigate(from, {replace: true});
         })
    }
   
    return (
   <>
  
   <div className="hero min-h-screen bg-slate-400">
   <div className="hero-content flex-col lg:flex-row-reverse">
     <div className="text-center md:w-1/2 lg:text-left">
       <h1 className="text-5xl font-bold">Login now!</h1>
       <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     </div>
    
       <div className="card-body card   md:w-1/2 max-w-sm shadow-2xl bg-base-100">
       <form onSubmit={handleLogin} className="">
         <div className="form-control">
           <label className="label">
             <span className="label-text">Email</span>
           </label>
           <input type="email" name="email" placeholder="email" className="input input-bordered" />
         </div>
         <div className="form-control">
           <label className="label">
             <span className="label-text">Password</span>
           </label> 
           <input type="password"  name="password" placeholder="password" className="input input-bordered" />
           <label className="label">
             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
           </label>
         </div>
      
         <div className="form-control mt-6">
           <input disabled={false}  className="btn btn-primary" type="submit" value="Login" />
         </div>
         </form>
         <p><small>New Here? <Link to='/signup'>Create an Account</Link> </small></p>
           <SocialLogin></SocialLogin>
       </div>
   </div>
 </div>
   
   </>
    );
};

export default Login;