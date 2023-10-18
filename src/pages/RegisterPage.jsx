import { toast } from "react-toastify";
import axioss from "../server";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const RegisterPage = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const registerFormSubmitFunc = async (e) => {
    try {
      e.preventDefault();
      const user = {
        first_name: e.target.registerFirstName.value,
        last_name: e.target.registerLastName.value,
        username: e.target.registerUsername.value,
        password: e.target.registerPasswordConfirm.value,
      };

      if (
        e.target.registerPassword.value !=
        e.target.registerPasswordConfirm.value
      ) {
        toast.error(
          "the password and password confirm did not match! Please make sure that the password and password confirm are the same!"
        );
      } else {
        const { data } = await axioss.post("auth/register", user);
        console.log(data);
        setIsAuthenticated(true);
        toast.success("Congrats! You have successfully registered!");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response);
    }
  };

  return (
    <section className="register-page">
      <div className="container">
        <div className="register-page-wrapper">
          <h2 className="rp-title">Register</h2>
          <form
            className="register-page-form"
            onSubmit={registerFormSubmitFunc}
          >
            <div className="form-inputs">
              <input
                type="text"
                name="registerFirstName"
                id="registerFirstName"
                placeholder="Firstname"
              />
            </div>
            <div className="form-inputs">
              <input
                type="text"
                name="registerLastName"
                id="registerLastName"
                placeholder="Lastname"
              />
            </div>
            <div className="form-inputs">
              <input
                type="text"
                name="registerUsername"
                id="registerUsername"
                placeholder="Username"
              />
            </div>
            <div className="form-inputs">
              <input
                type="password"
                name="registerPassword"
                id="registerPassword"
                placeholder="Password"
              />
            </div>
            <div className="form-inputs">
              <input
                type="password"
                name="registerPasswordConfirm"
                id="registerPasswordConfirm"
                placeholder="Confirm password"
              />
            </div>

            <button className="register-submit" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;

// a bit done
