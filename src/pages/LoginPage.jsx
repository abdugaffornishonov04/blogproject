import { toast } from "react-toastify";
import axioss from "../server";
import { TOKEN } from "../constants";
import Cookies from "js-cookie";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()
  const {setIsAuthenticated} = useContext(AuthContext)
  const loginFormSubmitFunc = async (e) => {
    try {
      e.preventDefault();
      console.log("loginPassword:", e.target.loginPassword.value);
      console.log("loginUsername:", e.target.loginUsername.value);

      let user = {
        username: e.target.loginUsername.value,
        password: e.target.loginPassword.value, 
      };

     let {data: {token}} = await axioss.post("auth/login", user);
      console.log(token);
      Cookies.set(TOKEN, token);
      setIsAuthenticated(true)
      navigate("/myposts")

      toast.success(`Greetings - ${(e.target.loginUsername.value)}`);
    } catch (err) {
      toast.error("No user found 😔");
      console.log(err.message);
    }
  };

  return (
    <section className="login-page">
      <div className="container">
        <div className="login-page-wrapper">
          <h2>Login</h2>
          <form className="login-page-form" onSubmit={loginFormSubmitFunc}>
            <div className="form-inputs">
              <input
                type="text"
                name="loginUsername"
                id="loginUsername"
                placeholder="Username"
              />
            </div>
            <div className="form-inputs">
              <input
                type="password"
                name="loginPassword"
                id="loginPassword"
                placeholder="Password"
              />
            </div>

            <button className="login-submit" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
