import React, { forwardRef } from "react";
import { withStyles } from "@material-ui/core/styles";
import SwiperComponent from './pagination';
import Dialog from "@material-ui/core/Dialog";
import Zoom from "@material-ui/core/Zoom";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const Transition = forwardRef(function Transition(props, ref) {
  return (
    <Zoom
      ref={ref}
      {...props}
    /> 
  );
});

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogComponent = ({ isOpen, handleClose }) => {
  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
      TransitionComponent={Transition}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Tutorial
      </DialogTitle>
      <DialogContent className="dialog__content">
        <SwiperComponent />
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
