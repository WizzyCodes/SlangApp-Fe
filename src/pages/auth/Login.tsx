import pix from "../../assets/images/ghettopic.jpg";
import { MdPerson } from "react-icons/md";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  //   const [name, setName] = useState<string>("");
  //   const [email, setEmail] = useState<string>("");
  //   const [password, setPasword] = useState<string>("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    Navigate("/dashboard");
  };

  //   bg-[#E8F5E9]bg-[#00897B]
  //
  return (
    <div className="w-full h-screen">
      <div className="w-[100%] h-full  flex justify-center items-center">
        <div
          className="h-[80vh] w-[80vw]
        
         flex"
        >
          <div
            className="w-[50%] h-[100%]"
            style={{
              backgroundImage: `url(${pix})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="bg-black opacity-50 h-full flex items-center justify-center flex-col">
              <h1 className="text-[35px] font-bold font-[Arial] text-transparent lg:text-[45px] text-start bg-clip-text bg-gradient-to-r from-[darkblue] via-[#1898c3] to-[#066084] drop-shadow-2xl shadow-blue-300 hover:scale-105 transition-transform duration-1000 ease-in-out  leading-tight mb-2">
                SLANGS <span className="text-blue-600"> SPOT</span>
              </h1>
              <h1 className="text-[30px] italic text-white ">
                Learn Street oti's
              </h1>
            </div>
          </div>
          <div className="w-[50%] h-[100%]">
            <div className="flex mb-4  justify-center">
              {/* {Myimage && (
                <div className="h-[45px] w-[55px] border-y border-r">
                  <img
                    src={Myimage}
                    className="h-full object-cover object-center w-full "
                  />
                </div>
              )} */}
            </div>
            <div className="w-[85%] h-[87%] ml-5 p-4 mt-3 rounded-lg shadow-lg  bg-white">
              <form onSubmit={handleSubmit} className=" ">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
                  Login
                </h2>

                <div className="mb-4">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 w-full border rounded-lg"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="mt-1 p-2 w-full border rounded-lg"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-blue-700"
                >
                  Login
                </button>
                <p className="text-sm text-center mt-4 flex ml-20 gap-1">
                  Don't Have An Account?{" "}
                  <span className="text-blue-500 hover:underline cursor-pointer">
                    <Link to={"/auth/register"}>
                      <div>Register</div>
                    </Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
