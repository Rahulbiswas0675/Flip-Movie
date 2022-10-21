import React, { useEffect, useState } from 'react';
import './Login.css';
import swal from 'sweetalert';
import { Usersdata } from '../data';

function Form() {

  // ================login-data============================
  const [login_email, setLogin_email] = useState();
  const [login_password, setLogin_password] = useState();

  const [login_style, setLogin_style] = useState('logpopuphide');
  const [singup_style, setSingup_style_style] = useState('Singup-from-hide');

  const [email_error, setEmail_error] = useState();
  const [password_error, setPassword_error] = useState();
  // ==================login-confarmation=================
  const [Usercurrentdata, setUsercurrentdata] = useState();
  const [filteremail, setFilteremail] = useState();

  // ====================Popup-Login====================
  const localstore = localStorage.getItem("Userdata");
  useEffect(() => {
    if (!localstore) {
      setTimeout(() => {
        setLogin_style('Login-Form');
      }, 60000)
    }
  }, [localstore])

  // ===============Login====================
  const Loginemailhandelar = (e) => {
    setLogin_email(e.target.value);
  }
  const Loginpaswordhendaler = (e) => {
    setLogin_password(e.target.value);
  }
  const closeloginfrom = () => {
    setLogin_style('logpopuphide');
  }
  const Login_btn_haldeler = () => {
    if (!login_email) {
      setEmail_error('Please Enter Email ID');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(login_email)) {
      setEmail_error('Invalid email address');
    } else {
      setEmail_error(false);
    }
    if (!login_password) {
      setPassword_error("Password is required");
    } else if (!/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/i.test(login_password)) {
      setPassword_error("Invalid password");
    } else {
      setPassword_error(false);
    }
    if (login_email && !email_error && login_password && !password_error) {
      setFilteremail(Usersdata.filter((filteremail) => {
        return filteremail.email.includes(login_email)
      }))
      if (filteremail[0].password === login_password) {
        setUsercurrentdata(filteremail[0]);
      } else {
        setTimeout(
          swal({
            title: "Opps...",
            text: "Your Password Is Wrong",
            icon: "warning",
            button: "Ok",
          }), 500)
      }
    }
  }
  useEffect(() => {
    if (Usercurrentdata) {
      localStorage.setItem('Userdata', JSON.stringify(Usercurrentdata));
      setTimeout(
        swal({
          title: "Good job!",
          text: "You are Loged In",
          icon: "success",
          button: "Aww yiss!",
        }), 500);
      setLogin_style('logpopuphide');
    }
  }, [Usercurrentdata]);

  // ==============Login-and-singup-btn=====================
  const swap_register = () => {
    setLogin_style('logpopuphide');
    setSingup_style_style('Singup-from');
  }
  const swap_login = () => {
    setLogin_style('Login-Form');
    setSingup_style_style('Singup-from-hide');
  }

  // ========================Singup================================
  const [username, setUsername] = useState();
  const [useremail, setUseremail] = useState();
  const [userpassword, setUserpassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();

  const [username_error, setUsername_error] = useState();
  const [user_email_error, setUser_email_error] = useState();
  const [user_password_error, setUser_password_error] = useState();
  const [confirm_password_error, setConfirm_password_error] = useState();
  let userdata;
  const [checkemail, setcheckemail] = useState();

  const username_handaler = (e) => {
    setUsername(e.target.value)
  }
  const useremail_handaler = (e) => {
    setUseremail(e.target.value)
  }
  const userpassword_handaler = (e) => {
    setUserpassword(e.target.value)
  }
  const confirmpassword_handaler = (e) => {
    setConfirmpassword(e.target.value)
  }

  const singin_submit = () => {
    // ===name===
    if (!username) {
      setUsername_error('Please Enter Your Name');
    } else if (!/^[a-zA-Z ]{2,30}$/i.test(username)) {
      setUsername_error('Invalid User Name');
    } else {
      setUsername_error(false);
    }
    // ===email=====
    if (!useremail) {
      setUser_email_error('Please Enter Email ID');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(useremail)) {
      setUser_email_error('Invalid email address');
    } else {
      setUser_email_error(false);
    }
    // ===password===
    if (!userpassword) {
      setUser_password_error("Password is required");
    } else if (!/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/i.test(userpassword)) {
      setUser_password_error("Invalid password");
    } else {
      setUser_password_error(false);
    }
    // ===Confirm-password===
    if (!confirmpassword) {
      setConfirm_password_error("Confirm Your Password");
    } else if (confirmpassword !== userpassword) {
      setConfirm_password_error("Password Not Match");
    } else {
      setConfirm_password_error(false);
    }
    // ===function===
    setcheckemail(Usersdata.filter((filteremail) => {
      return filteremail.email.includes(useremail)
    }))
    if (!username_error && !user_email_error && !user_password_error && !confirm_password_error && username && useremail && userpassword && confirmpassword) {

      if (useremail !== checkemail[0].email) {
        userdata = {
          'name': username,
          'email': useremail,
          'password': userpassword
        }
        localStorage.setItem('Userdata', JSON.stringify(userdata));
        setTimeout(
          swal({
            title: "Good job!",
            text: "You are Sing In",
            icon: "success",
            button: "Aww yiss!",
          }), 500);
        setSingup_style_style('Singup-from-hide');
      } else {
        setTimeout(
          swal({
            title: "Sorry!",
            text: "This one we've seen already",
            icon: "error",
            button: "Ok!",
          }),
          500);
      }
    } else {
      setTimeout(
        swal({
          title: "Opps...!!",
          text: "Try Again",
          icon: "warning",
          button: "Ok!",
        }),
        500);
    }
  }

  // ====================Cancel-Btn==========================
  const cancel_register_btn = () => {
    setSingup_style_style('Singup-from-hide');
  }


  // =======================HTML=======================
  return (
    <div>
      <div className={login_style}>
        <div className="formcomponents">
          <div className="form">
            <h1 className="frohead">Login</h1>
            <div className="from-continear">
              {email_error ? <span style={{ color: 'red' }}>{email_error}</span> : null}
              <div className="inputs">
                <label className="lable">Email</label>
                <input type="email" name="emailid" value={login_email} onChange={Loginemailhandelar} placeholder="Enter Your Email" />
              </div>
              {password_error ? <span style={{ color: 'red' }}>{password_error}</span> : null}
              <div className="inputs">
                <label className="lable">Password</label>
                <input type="password" value={login_password} onChange={Loginpaswordhendaler} placeholder="Enter Your Password" />
              </div>

              <div className="btn">
                <button onClick={Login_btn_haldeler}>Login</button>
              </div>
              <div className="register">
                <h3>or</h3>
                <span onClick={swap_register}><a>SignUp</a></span>
              </div>
            </div>
            <div className="forgot">
              <p>Forgot <a>Password</a>?</p>
              <button onClick={closeloginfrom}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
      {/* =================Singup++++++++++++++++ */}
      <div className={singup_style}>
        <div className="formcontanear">
          <div className="form">
            <h1 className="frohead">Signup</h1>
            <div className="from-continear">

              {username_error ? <span style={{ color: 'red' }}>{username_error}</span> : null}
              <div className="inputss">
                <label className="singlable">Name</label>
                <input type="text" onChange={username_handaler} name="name" placeholder="Enter Your Name" />
              </div>

              {user_email_error ? <span style={{ color: 'red' }}>{user_email_error}</span> : null}
              <div className="inputss">
                <label className="singlable">Email</label>
                <input type="email" onChange={useremail_handaler} name="emailid" placeholder="Enter Your Email" />
              </div>

              {user_password_error ? <span style={{ color: 'red' }}>{user_password_error}</span> : null}
              <div className="inputss">
                <label className="singlable">Password</label>
                <input type="password" onChange={userpassword_handaler} placeholder="Enter Your Password" />
              </div>

              {confirm_password_error ? <span style={{ color: 'red' }}>{confirm_password_error}</span> : null}
              <div className="inputss">
                <label className="singlable">Confirm Password</label>
                <input type="password" onChange={confirmpassword_handaler} placeholder="Enter Your Password" />
              </div>

              <div className="sbtn">
                <button onClick={singin_submit}>Signup</button>
              </div>

              <div className="login">
                <h3>or</h3>
                <span onClick={swap_login}><a>Login</a></span>
              </div>
            </div>
            <div className="cancelsing">
              <button onClick={cancel_register_btn}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
