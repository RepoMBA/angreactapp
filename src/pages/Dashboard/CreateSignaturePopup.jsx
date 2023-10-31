import React, { useState } from "react";
import TypeSignature from "./TypeSignature";
import DrawSignature from "./DrawSignature";
import UploadSignature from "./UploadSignature";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CreateSignatureIcon from "../../assets/CreateSignatureIcon.png";
import TypeSignatureIcon from "../../assets/TypeSignature.png";
import DrawSignatureIcon from "../../assets/DrawSignature.png";
import UploadSignatureIcon from "../../assets/UploadSignature.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  minHeight: 450,
  bgcolor: "background.paper",
  borderRadius: "12px",
  border: "none",
  boxShadow: 24,
  p: 4,
};

export default function CreateSignaturePopup({ open, setOpen }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setSelectedOption(null);
    setOpen(false);
  };

  // Common content for all select cards
  const commonContent = (
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
  );

  const renderSelectedOption = () => {
    if (selectedOption === "type") {
      return (
        <div>
          <TypeSignature
            setSelectedOption={setSelectedOption}
            handleClose={handleClose}
          />
        </div>
      );
    } else if (selectedOption === "draw") {
      return (
        <div>
          <DrawSignature
            setSelectedOption={setSelectedOption}
            handleClose={handleClose}
          />
        </div>
      );
    } else if (selectedOption === "upload") {
      return (
        <div>
          {commonContent}
          <UploadSignature />
        </div>
      );
    }
    return (
      <div>
        {commonContent}
        {/* Default content when no option is selected */}
        <div className="mt-8">
          <div
            className="create-signature-card flex p-2 mt-2 rounded-[12px] relative items-center cursor-pointer"
            onClick={() => setSelectedOption("type")}
          >
            <img src={TypeSignatureIcon} className="w-[35px] mr-3 p-1" />
            <p className="text-[14px] font-medium">Type Signature</p>
            <KeyboardArrowRightIcon className="absolute right-3" />
          </div>
          <div
            className="create-signature-card flex p-2 mt-2 rounded-[12px] relative items-center cursor-pointer"
            onClick={() => setSelectedOption("draw")}
          >
            <img src={DrawSignatureIcon} className="w-[35px] mr-3 p-1" />
            <p className="text-[14px] font-medium">Draw Signature</p>
            <KeyboardArrowRightIcon className="absolute right-3" />
          </div>
          <div
            className="create-signature-card flex p-2 mt-2 rounded-[12px] relative items-center cursor-pointer"
            onClick={() => setSelectedOption("upload")}
          >
            <img src={UploadSignatureIcon} className="w-[35px] mr-3 p-1" />
            <p className="text-[14px] font-medium">Upload Signature</p>
            <KeyboardArrowRightIcon className="absolute right-3" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>{renderSelectedOption()}</Box>
        </Fade>
      </Modal>
    </div>
  );
}
