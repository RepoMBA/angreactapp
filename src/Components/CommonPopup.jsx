import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import CommonButton1 from "../Buttons/CommonButton1";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(4),
  },
  dialogContainer: {
    "& .MuiDialog-paper": {
      width: "550px",
      borderRadius: "10px",
      padding: "10px",
    },
    "&.fullWidth": {
      "& .MuiDialog-paper": {
        width: "80vw",
        maxWidth: "90vw",
      },
    },
  },
  buttonContainer: {
    textTransform: "none",
    fontSize: "14px",
    marginTop: "30px",
    fontWeight: 500,
    textAlign: "center",
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
  },
  button: {
    width: "300px",
    height: "40px",
    color: "#fff",
    backgroundColor: "#00A0F6",
    borderRadius: "4px",
    padding: "5px 20px",
    margin: "0px 20px",
    "&:hover": {
      backgroundColor: "#00A0F6",
    },
  },
  listItem: {
    padding: theme.spacing(1, 2),
  },
  listItemIcon: {
    minWidth: theme.spacing(4),
  },
  dialogHeader: {
    padding: "10px 20px",
    "& .MuiTypography-root.MuiTypography-h6": {
      fontSize: "14px",
      fontWeight: 550,
    },
  },
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
  },
}));

const CommonPopup = ({
  isOpen,
  setIsOpen,
  buttonLabel,
  headerAction = "",
  dialogTitle = "",
  bodyContent = "Modal Body Content",
  primaryBtnLabel = "Primary Button",
  primaryBtnHandleClick = () => {
    console.log("primary button clicked");
  },
  isLoading = false,
  isPrimaryBtnRequired = true,
  isSecondaryBtnRequired = false,
  secondaryBtnLabel = "Secondary Button",
  secondaryBtnHandleClick = () => {
    console.log("secondary button clicked");
  },
  fullWidth = false,
  closeOnClickOutside = true,
}) => {
  const classes = useStyles();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={classes.root}>
      <Dialog
        open={isOpen}
        onClose={closeOnClickOutside && handleClose}
        aria-labelledby="popup-title"
        className={`${classes.dialogContainer} ${fullWidth && "fullWidth"}`}
      >
        <div>
          <DialogTitle id="popup-title" className={classes.dialogHeader}>
            {dialogTitle}
          </DialogTitle>
          <div
            style={{
              position: "absolute",
              right: "50px",
              top: "10px",
              cursor: "pointer",
            }}
          >
            {headerAction}
          </div>
          <CloseIcon
            onClick={handleClose}
            style={{
              position: "absolute",
              right: "10px",
              top: "20px",
              cursor: "pointer",
            }}
          />
        </div>
        <DialogContent>
          <DialogContentText>{bodyContent}</DialogContentText>
          <div className={classes.buttonContainer}>
            {isSecondaryBtnRequired && (
              <CommonButton1
                label={secondaryBtnLabel}
                size="small"
                variant="outlined"
                handleClick={secondaryBtnHandleClick}
                disabled={isLoading}
              />
            )}
            {isPrimaryBtnRequired && (
              <CommonButton1
                label={primaryBtnLabel}
                size="small"
                handleClick={primaryBtnHandleClick}
                disabled={isLoading}
                isLoading={isLoading}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CommonPopup;
