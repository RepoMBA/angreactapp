import React, { useState } from "react";
import ReactDOM from "react-dom";
import SignatureCanvas from "react-signature-canvas";
import successGif from "../../assets/successGif.gif"; // Import your success GIF
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CreateSignatureIcon from "../../assets/CreateSignatureIcon.png";

const DrawSignature = ({ setSelectedOption, handleClose }) => {
  const [penColor, setPenColor] = useState("black");
  const sigCanvasRef = React.createRef();

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleColorChange = (e) => {
    setPenColor(e.target.value);
  };

  const clearCanvas = () => {
    sigCanvasRef.current.clear();
  };
  const createSignature = () => {
    // You can implement the logic to create the signature here,
    // for example, combining the uploaded image with the typed text.

    // Show success message
    setShowSuccessMessage(true);
  };

  return (
    <>
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
          <div className="shadow-lg p-4 rounded-[12px] border-[1px] mt-4">
            <div className="flex justify-between items-center p-3 border-b-[1px]">
              <input
                className="cursor-pointer"
                type="color"
                value={penColor}
                onChange={handleColorChange}
              />
              <div
                className="text-[14px] font-normal cursor-pointer"
                onClick={clearCanvas}
              >
                Clear
              </div>
            </div>
            <SignatureCanvas
              penColor={penColor}
              canvasProps={{ width: 500, height: 150, className: "sigCanvas" }}
              ref={sigCanvasRef}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-[14px] mt-4 font-normal  focus:outline-none"
              onClick={createSignature}
            >
              Create
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DrawSignature;
