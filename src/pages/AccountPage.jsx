import { useEffect, useState } from "react";
import axioss from "../server";

const AccountPage = () => {
  const [accountData, setAccountData] = useState({});
  const [changeTabBool, setChangeTabBool] = useState(false);
  const [birthday, setBirthday] = useState(null);
  const [changedAccountInfo, setChangedAccountInfo] = useState({
    accountFirstName: accountData.first_name,
    accountLastName: accountData.last_name,
    accountUsername: accountData.username,
    accountEmail: accountData.email,
    accountAddress: accountData.address,
    accountBirthday: birthday,
  });

  useEffect(() => {
    const getAccount = async () => {
      const { data } = await axioss("auth/me");
      console.log(data.birthday);
      const dataa = data.birthday.split("-");
      // const mm = dataa.[];
      console.log(dataa[0]);
      console.log(dataa[1]);
      console.log(dataa[2].split("T")[0]);

      setBirthday(`${dataa[1]}-${dataa[0]}-${dataa[2]}`);

      console.log();
      setBirthday(data.birthday.split("T")[0]);
      setAccountData(data);
    };

    getAccount();
  });

  console.log(birthday);

  const changeTabFunc = () => {
    setChangeTabBool(true);
  };

  const changeTabFuncFalse = () => {
    setChangeTabBool(false);
  };

  const changeOfForm = (e) => {
    console.log(e.target);
    const { name, value } = e.target;

    if (name === "accountBirthday") {
      // If the input name is "accountBirthday," format the value as needed
      const [mm, dd, yy] = value.split("-");
      setBirthday(`${dd}-${mm}-${yy}`);
    } else {
      setChangedAccountInfo({
        ...accountData,
        [name]: value,
      });
    }
  };

  return (
    <section className="account-page container">
      <div className="accp-wrapper">
        <div className="accp-tab-btns">
          <button className="accp-form-btn" onClick={changeTabFuncFalse}>
            Your Information
          </button>
          <button className="accp-change-password-btn" onClick={changeTabFunc}>
            Change Password
          </button>
        </div>
        <div className="accp-wrapper-2">
          {changeTabBool ? (
            <form className="account-password-changeForm">
              <h3>Change Password</h3>
              <div className="form-inputs">
                <input
                  type="password"
                  name="accountChangePasswordReal"
                  id="accountChangePasswordReal"
                  placeholder="Your Password"
                />
              </div>
              <div className="form-inputs">
                <input
                  type="password"
                  name="accountChangePasswordNew"
                  id="accountChangePasswordNew"
                  placeholder="Your New Password"
                />
              </div>
              <button type="submit">Change Password</button>
            </form>
          ) : (
            <form className="account-page-form">
              <div className="account-page-form-image">
                <div className="accp-account-image">
                  <img src="" alt="" />
                </div>
                <div
                  onChange={changeOfForm}
                  className="form-inputs accp-image-upload"
                >
                  <input
                    type="file"
                    name="accountImage"
                    id="accountImage"
                    placeholder="Image"
                  />
                </div>
              </div>

              <div className="account-p-form-main">
                <div className="form-inputs">
                  <input
                    onChange={changeOfForm}
                    type="text"
                    value={accountData.first_name}
                    name="accountFirstName"
                    id="accountFirstName"
                    placeholder="Firstname"
                  />
                </div>
                <div className="form-inputs">
                  <input
                    onChange={changeOfForm}
                    type="text"
                    value={accountData.last_name}
                    name="accountLastName"
                    id="accountLastName"
                    placeholder="Lastname"
                  />
                </div>
                <div className="form-inputs">
                  <input
                    onChange={changeOfForm}
                    type="text"
                    value={accountData.username}
                    name="accountUsername"
                    id="accountUsername"
                    placeholder="Username"
                  />
                </div>
                <div className="form-inputs">
                  <input
                    onChange={changeOfForm}
                    type="email"
                    value={accountData.email}
                    name="accountEmail"
                    id="accountEmail"
                    placeholder="Email"
                  />
                </div>
                <div className="form-inputs">
                  <input
                    onChange={changeOfForm}
                    type="text"
                    value={accountData.address}
                    name="accountAddress"
                    id="accountAddress"
                    placeholder="Address"
                  />
                </div>
                <div className="form-inputs">
                  <input
                    onChange={changeOfForm}
                    type="date"
                    value={birthday}
                    name="accountBirthday"
                    id="accountBirthday"
                    placeholder="Birthday"
                  />
                </div>
                <button className="account-submit-btn" type="submit">
                  Change your information
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default AccountPage;

// html done apparently
