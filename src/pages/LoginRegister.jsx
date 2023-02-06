import Login from "../components/Authorization/Login";
import Register from "../components/Authorization/Register";

const LoginRegister = ({ form }) => {
  return (
    <div className="max-w-[1440px] mx-auto h-[85vh] flex justify-center items-center">
      {/* LoginForm */}
      <Login form={form} />

      {/* RegisterForm */}
      <Register form={form} />
    </div>
  );
};

export default LoginRegister;
