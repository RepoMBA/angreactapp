import React from "react";
import LoginInImage from "../../assets/LoginInImage.png";
import Logo from "../../assets/logo.png";
import GoogleIcon from "../../assets/Google.png";
import CommonButton from "../../Components/CommonButton";
import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";

function SignUp() {
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
          <div className="form-container-login p-[10%] lg:p-[20%] py-[15%]">
            <h1 className="text-3xl font-bold mb-1">Sign Up</h1>
            <p className="text-sm text-gray-500 mb-4">
              Please fill your details to create your account.
            </p>

            <Form
              name="signupForm" // Change the form name
              initialValues={{ remember: true }}
              onFinish={handleClick} // Change onFinish instead of handleClick
            >
              <label className="text-sm text-gray-500">Email</label>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input a valid email!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
              <label className="text-sm text-gray-500">Password</label>
              <Form.Item
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
              {/* Confirm Password Field */}
              <label className="text-sm text-gray-500">Confirm Password</label>
              <Form.Item
                name="confirmPassword"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The two passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>

              <Form.Item>
                {/* Change button label to "Sign Up" */}
                <CommonButton
                  label="Sign Up"
                  color="primary"
                  fullWidth
                  loading={false}
                />
              </Form.Item>
            </Form>
            <div className="text-center text-[14px]">or</div>
            <div className="flex border-[2px] border-[#D0D5DD] rounded-[4px] p-2 justify-center items-center cursor-pointer mt-6">
              <img
                src={GoogleIcon}
                alt="Google Icon"
                className="w-[20px] mr-2"
              />
              <div className="text-[14px] font-normal">Sign up with Google</div>
            </div>
            <div className="text-center text-[14px] mt-4 cursor-pointer">
              Already have an account?{" "}
              <Link to="/signin" className="text-[#4096FF]">
                <span className="text-[#4096FF]">Sign In</span>
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

export default SignUp;
