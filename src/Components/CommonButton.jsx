import React, { useState } from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";

const CommonButton = ({
  label,
  color,
  variant,
  onClick,
  fullWidth,
  disabled,
  rounded,
}) => {
  const [loading, setLoading] = useState(false); // Initialize loading state

  const handleClick = async () => {
    if (onClick) {
      onClick();
    }
  };

  const buttonStyle = {
    backgroundColor: "#4096ff",
    color: "#fff",
    borderRadius: rounded ? "50px" : "8",
    boxShadow: "none",
    height: "40px",
    width: fullWidth ? "100%" : "auto",
    fontSize: "13px",
    textTransform: "none",
    position: "relative",
  };

  return (
    <Button
      variant={variant}
      color={color}
      onClick={handleClick} // Use the updated handleClick function
      fullWidth={fullWidth}
      disabled={disabled || loading}
      style={buttonStyle}
    >
      {loading ? (
        <CircularProgress
          size={24}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            color: "#fff",
            marginTop: -12,
            marginLeft: -12,
          }}
        />
      ) : (
        label
      )}
    </Button>
  );
};

CommonButton.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
};

CommonButton.defaultProps = {
  color: "default",
  variant: "contained",
  fullWidth: false,
  disabled: false,
  rounded: false,
};

export default CommonButton;
