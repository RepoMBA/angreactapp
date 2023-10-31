import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import CommonButton from "../../Components/CommonButton";
import { Form, Input } from "antd";

import { LeftOutlined } from "@ant-design/icons";
import LoginInImage from "../../assets/LoginInImage.png";
import { Link } from "react-router-dom";

import ForgotPasswordImage from "../../assets/ForgotPasswordImage.png";
function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Step 3: Add Confirm Password state

  const handleEmailSubmit = () => {
    // Implement the logic to send an OTP to the user's email here
    setStep(2); // Move to the OTP input step
  };

  const handleOtpSubmit = () => {
    // Implement the logic to verify the OTP here
    setStep(3); // Move to the new password input step
  };

  const handlePasswordReset = () => {
    // Implement the logic to reset the password here
    console.log("Password reset successful");
  };

  return (
    <div>
      <div className="lg:flex h-screen p-4">
        <div className="login-left-container w-full lg:w-[45%]">
          <div className="logo">
            <img src={Logo} alt="logo" className="w-[100px]" />
          </div>

          <div className="form-container-login p-[10%] lg:p-[20%] py-[20%]">
            <Link
              to="/signin"
              className="text-gray-500 text-sm mb-2 cursor-pointer"
            >
              {step == 1 && ( // Only show the back button when not in step 1
                <button className="text-gray-500 text-sm mb-2 cursor-pointer">
                  <LeftOutlined /> Back to Sign In
                </button>
              )}
            </Link>
            <h1 className="text-3xl font-bold mb-1">
              {step === 1 ? "Forgot Password" : "Reset Password"}
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              {step === 1
                ? "Please enter your email to receive an OTP."
                : "Please enter the OTP, set a new password, and confirm it."}{" "}
              {/* Updated text */}
            </p>

            <Form name="forgotPasswordForm">
              {step === 1 && (
                <div>
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
                    <Input
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item>
                    <CommonButton
                      label="Send OTP"
                      color="primary"
                      fullWidth
                      onClick={handleEmailSubmit}
                      loading={false}
                    />
                  </Form.Item>
                </div>
              )}

              {step === 2 && (
                <div>
                  <label className="text-sm text-gray-500">OTP</label>
                  <Form.Item
                    name="otp"
                    rules={[
                      {
                        required: true,
                        message: "Please input the OTP you received!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item>
                    <CommonButton
                      label="Verify OTP"
                      color="primary"
                      fullWidth
                      onClick={handleOtpSubmit}
                      loading={false}
                    />
                  </Form.Item>
                </div>
              )}

              {step === 3 && (
                <div>
                  <label className="text-sm text-gray-500">New Password</label>
                  <Form.Item
                    name="newPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input a new password!",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </Form.Item>
                  {/* Step 3: Add Confirm Password field */}
                  <label className="text-sm text-gray-500">
                    Confirm Password
                  </label>
                  <Form.Item
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your new password!",
                        validator: (rule, value) => {
                          if (value === newPassword) {
                            return Promise.resolve();
                          }
                          return Promise.reject("The passwords do not match.");
                        },
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Form.Item>
                  {/* Step 3: End of Confirm Password field */}
                  <Form.Item>
                    <CommonButton
                      label="Reset Password"
                      color="primary"
                      fullWidth
                      onClick={handlePasswordReset}
                      loading={false}
                    />
                  </Form.Item>
                </div>
              )}
            </Form>
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

export default ForgotPassword;
