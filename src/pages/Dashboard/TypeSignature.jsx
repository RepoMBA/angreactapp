import React, { useState } from "react";
import CreateSignatureIcon from "../../assets/CreateSignatureIcon.png";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { UserOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";
import successGif from "../../assets/successGif.gif"; // Import your success GIF

const TypeSignature = ({ setSelectedOption, handleClose }) => {
  const [signatureLogo, setSignatureLogo] = useState(null);
  const [typedSignature, setTypedSignature] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // You can add logic to validate the uploaded image here if needed
    setSignatureLogo(file);
  };

  // Function to create the signature
  const createSignature = () => {
    // You can implement the logic to create the signature here,
    // for example, combining the uploaded image with the typed text.

    // Show success message
    setShowSuccessMessage(true);
  };

  return (
    <div className="bg-white">
      {showSuccessMessage ? (
        <>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 5,
              right: 20,
            }}
          >
            <CloseIcon />
          </IconButton>
          <div className="text-center">
            <div className="flex justify-center">
              <img src={successGif} alt="Success GIF" className="w-[300px]" />
            </div>
            <div className="mt-4 mb-8 text-green-500">
              Signature created successfully!
            </div>
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-[14px] mt-4 font-normal  focus:outline-none"
            >
              Continue
            </button>
          </div>
        </>
      ) : (
        // Display the form for creating a signature
        <div>
          <div>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 5,
                right: 20,
              }}
            >
              <CloseIcon />
            </IconButton>
            <div className="flex justify-center">
              <img src={CreateSignatureIcon} className="w-16 rounded-full" />
            </div>
            <div className="text-[22px] font-semibold text-center mt-2">
              Create NFT Signature
            </div>
            <div className="text-[#808080] text-center mt-1 text-[14px]">
              Unleash the Power of Digital Signatures for Endless Possibilities
            </div>
          </div>
          <div className="mb-4 mt-8">
            {/* Upload Signature Logo */}
            <label
              className="block text-[14px] font-medium mb-2"
              htmlFor="signatureImage"
            >
              Upload Signature Logo
            </label>
            <input
              type="file"
              id="signatureImage"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
            />
            {signatureLogo && (
              <img
                src={URL.createObjectURL(signatureLogo)}
                alt="Signature Logo"
                className="mt-2 max-w-full h-auto w-[50px] rounded-[12px]"
              />
            )}
          </div>
          <div className="mb-4">
            {/* Text Field for Typing Signature */}
            <Input
              size="large"
              placeholder="Enter Signature"
              prefix={<UserOutlined />}
            />
          </div>
          <div className="text-center">
            {/* Create Signature Button */}
            <button
              onClick={createSignature}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-[14px] mt-4 font-normal  focus:outline-none"
            >
              Create Signature
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TypeSignature;
