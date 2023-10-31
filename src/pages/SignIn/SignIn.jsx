import React from "react";
import LoginInImage from "../../assets/LoginInImage.png";
import Logo from "../../assets/logo.png";
import GoogleIcon from "../../assets/Google.png";
import CommonButton from "../../Components/CommonButton";
import { Form, Input, Button, Checkbox } from "antd";

import { Link } from "react-router-dom";

function SignIn() {
  const handleClick = (values) => {
    console.log("Clicked");
    console.log("Received values:", values);
  };

  return (
    <div>
      <div className="lg:flex h-screen p-4 overflow-y-hidden">
        <div className="login-left-container w-full lg:w-[45%]">
          <div className="logo">
            <img src={Logo} alt="logo" className="w-[100px]" />
          </div>
          <div className="form-container-login p-[10%] lg:p-[20%] py-[20%]">
            <h1 className="text-3xl font-bold mb-1">Welcome Back</h1>
            <p className="text-sm text-gray-500 mb-4">
              Please fill your detail to access your account.
            </p>

            <Form
              name="loginForm"
              initialValues={{ remember: true }}
              handleClick={handleClick}
            >
              <label className="text-sm text-gray-500">Email</label>
              <Form.Item
                // className="mb-8"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <label className="text-sm text-gray-500">Password</label>
              <Form.Item
                className="mb-2"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
              <div className="flex justify-between">
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Link to="/forgot-password" className="cursor-pointer">
                  <Form.Item name="forgotPassword">
                    <div className="cursor-pointer">Forgot Password?</div>
                  </Form.Item>
                </Link>
              </div>

              <Form.Item>
                <Link to="/dashboard">
                  <CommonButton
                    label="Sign In"
                    color="primary"
                    fullWidth
                    onClick={handleClick}
                    loading={false}
                  />
                </Link>
              </Form.Item>
            </Form>
            <div className="text-center text-[14px]">or</div>
            <div className="flex border-[2px] border-[#D0D5DD] rounded-[4px] p-2 justify-center items-center cursor-pointer mt-6">
              <img
                src={GoogleIcon}
                alt="Google Icon"
                className="w-[20px] mr-2"
              />
              <div className="text-[14px] font-normal ">
                Sign in with Google
              </div>
            </div>
            <div className="dont-have-account text-[14px] font-normal text-center mt-4 ">
              Don't have an account?{" "}
              <Link to="/signup">
                {" "}
                <span className="text-[#4096FF]">Sign Up</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="login-right-container w-[55%] flex justify-end hidden lg:block">
          <img
            src={LoginInImage}
            className="object-cover h-full rounded-[30px]"
            alt="Login Image"
          />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
