
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

const LoginPage = () => {
  const {logInUser, googleLogIn, githubLogin, loading} = useContext(AuthContext);
  const navigate = useNavigate();


    const handleLogin = (e) => {
      e.preventDefault();
      const form = e.target;
     
      const email = form.email.value;
      const password = form.password.value;

      const user = { email, password};
      console.log(user);
      logInUser(email, password)
      .then(result => {
        if (result.user) Swal.fire({
          title: 'success!',
          text: 'You Have logged in successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        navigate('/')
      })
      .catch(error =>{
        console.log(error.message);
      })

    }


    const handleGoogleLogIn = () => {
    console.log('google login');

      googleLogIn()
      .then(result => {
        if (result.user) Swal.fire({
          title: 'success!',
          text: 'You Have logged in successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        navigate('/')
      })
      .catch((error) =>{
        console.log(error.message)
      })

    }


    const handleGithubLogIn = () => {
    console.log('github login');

      githubLogin()
      .then(result => {
        if (result.user) Swal.fire({
          title: 'success!',
          text: 'You Have logged in successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        navigate('/')
      })
      .catch((error) =>{
        console.log(error.message)
      })

    }

  return (
    <div>
      <div className="hero min-h-screen bg-gray-400">
      {loading && 
    <>return <span className="loading loading-bars loading-lg"></span></>
  }
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Welcome back to Woodland Crafts! Log in to your account to discover exclusive offers and more.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
          <p>New to here ?</p>
           <Link to='/register' href="#" className="label-text-alt link link-hover "> Register</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className='flex justify-between'>
      <div className="p-2 mt-6">
      
          <button onClick={handleGoogleLogIn} className="btn btn-primary btn-outline">Login with GOOGLE</button>
        </div>
        <div className="p-2 mt-6">
          <button onClick={handleGithubLogIn} className="btn btn-primary btn-outline">Login with GITHUB</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default LoginPage;