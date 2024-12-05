import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import api from '../api/get'; 




const Login = () => {

  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });


  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
    console.log(userDetails);
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!userDetails.email||!userDetails.password){
      alert("Please fill in all fields");
      return;
    }

    try {
      const Response = await api.get("/users");
      const data = Response.data;
      const user = data.find((users) => users.email===userDetails.email && users.password === userDetails.password )
      if (user) {
        alert("login successful")
        localStorage.setItem('loginUser', JSON.stringify(user));
        navigate("/")
        console.log(user);
        
      }else{
        alert("invalid username or password");
        console.log(user);
        navigate('/register')
      }
    } catch (error) {
      console.log(error);
    }
  };
 

  return (
    <div className="main-container flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center gap-5 w-[400px] p-10 rounded-md border-2 border-white/10 backdrop-blur-md bg-white/5 shadow-lg">
          <h4 className="text-black/70 text-2xl font-bold font-">login</h4>
          <input
            className="inputStyle"
            type="text"
            placeholder="Email"
            onChange={handleInput}
            value={userDetails.name}
            name="email"
          />
          <input
            className="inputStyle"
            type="password"
            placeholder="password"
            onChange={handleInput}
            value={userDetails.password}
            name="password"
          ></input>
          <button className="rounded-md bg-[#eee8e8] text-black w-full p-2 mt-5 font-semibold">
            Login
          </button>
          <p className="text-white text-md">
            don&apos;t have a account?{" "}
            <Link to={"/register"} className="underline hover:text-blue-500">
              Register Here..
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
