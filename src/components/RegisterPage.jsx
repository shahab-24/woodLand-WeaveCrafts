
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';



const RegisterPage = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  // const [error, setError] = useState(null);
    const handleRegister = async (e) => {
      e.preventDefault();

      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;

      const user = {name, email, password};
      console.log(user);

      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      if (!passwordRegex.test(password)) {
        Swal.fire({
          title: 'Error!',
          text: 'Password must contain at least 6 characters with at least one uppercase and one lowercase letter.',
          icon: 'error',
          confirmButtonText: 'Okay'
        });
        return;
      }



      createUser(email, password)
      .then(result => {
        if (result.user) Swal.fire({
        title: 'success!',
        text: 'You Have Registered successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      }).then (() => navigate('/login'));
      })
      .catch(error =>{
        console.log(error.message);
      })
      
    
    }



      
    

      


    

  return (
    <div>
      <div className="hero min-h-screen bg-gray-400">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
          <label className="label">
          <p>Already have an account ?</p>
            <Link to='/login' href="#" className="label-text-alt link link-hover">Login</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          
          <button className="btn btn-primary w-full">Register</button>
          
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  );
};

export default RegisterPage;