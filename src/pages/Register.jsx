import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import usePostData from "../customhooks/usePostData";
import api from '../api/get'
const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    id: "",
    name: "",
    password: "",
    email: "",
    role: ""
  });
  const [users,setUsers] = useState([]);
  const [isSubmit,setIsSubmit] = useState(false);
  useEffect(()=>{
    const getShoes = async() =>{
      try {
        const response = await api.get('/users') 
        console.log(response.data);
        
        setUsers(response.data)
        } catch (error) {
        console.log(error);
        
      }
    }
    getShoes();
  },[isSubmit])
  const {response,postData} = usePostData('/users');


  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value, id: users.length + 1,role:"user" });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    postData(input);
    setIsSubmit(!isSubmit)
    console.log(response);
    alert("Registered successfully")
    navigate('/login',{ replace: true })
    


  }

  console.log(input);


  return (
    <div className="registerMain-container flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center gap-5 w-[400px] p-10 rounded-md border-2 border-white/10 backdrop-blur-md bg-white/5 shadow-lg">
          <h4 className="text-black/80 text-2xl font-bold font-">Register</h4>
          <input
            className="registerInputStyle"
            type="text"
            placeholder="Enter your userName"
            onChange={handleChange}
            name="name"
            value={input.name}
          />
          <input
            className="registerInputStyle"
            type="text"
            placeholder="Enter your Email"
            onChange={handleChange}
            name="email"
            value={input.email}
          />
          <input
            className="registerInputStyle"
            type="password"
            placeholder="password"
            onChange={handleChange}
            name="password"
            value={input.password}
          ></input>
          <button className="rounded-md bg-[#eee8e8] text-black w-full p-2 mt-5 font-semibold">
            Register
          </button>
          <p className="text-white text-md">
            already have a account?{" "}
            <Link to={"/login"} className="underline hover:text-blue-500">
              Login Here..
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
