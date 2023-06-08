import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../share/SocialLogin/SocialLogin";

const SignUp = () => {
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const { createUser, updateUserProfile} = useContext(AuthContext)


    const onSubmit = data =>{
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            updateUserProfile(data.name, data.photoURL)
            .then(()=>{
              const savedUser = {name: data.name, email: data.email}
               fetch('http://localhost:5000/users',{
                method: 'POST',
                headers:{
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(savedUser)
               })
               .then(res => res.json())
               .then(data => {
                 if(data.insertedId){
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Created Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/')
                 }
               })
             
            })
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
    console.log(watch("example"));

    return (
    <>
    <Helmet>
    <title> Sports Academic | Sign Up</title>
    </Helmet>
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" {...register("name", {required: true})} name="name" placeholder="name" className="input input-bordered" />
            {errors.name && <span className="text-red-600">name is required</span>}
          </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" {...register("photoURL", {required: true})}   placeholder="Photo URL" className="input input-bordered" />
          {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
        </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", {required: true})} name="email" placeholder="email" className="input input-bordered" />
          {errors.email && <span className="text-red-600">email is required</span>}
        </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" {...register("password", {
                required:true, 
                minLength:6, 
                maxLength:20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
            })} name="password" placeholder="password" className="input input-bordered" />
            {
                errors.password?.type === 'required' && <p className="text-red-600">password is required</p>
            }
            {
                errors.password?.type === 'minLength' && <p className="text-red-600">password must be 6 characters</p>
            }
            {
                errors.password?.type === 'maxLength' && <p className="text-red-600">password must be less than 20 character</p>
            }
            {
                errors.password?.type === 'pattern' && <p className="text-red-600">password must have one upper case one lower case, one number and one special characters</p>
            }
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Sign Up"></input>
          </div>
        </form>
        <p><small>Already have an account <Link to='/login'>Login</Link></small></p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
    
    </>
    );
};

export default SignUp;