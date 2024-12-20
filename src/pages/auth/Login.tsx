import pix from "../../assets/images/ghettopic.jpg";
const Login = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-[100%] h-full bg-[#00897B] flex justify-center items-center">
        <div className="h-[70vh] w-[60vw] bg-[#E8F5E9] flex">
          <div className="w-[50%] h-[100%]"></div>
          <div className="w-[50%] h-[100%]">
            <img className="w-[100%] h-[100%] opacity-85" src={pix} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
