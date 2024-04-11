import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

const Alert_info = (props) => {
  const { open, setOpen, err } = props;
  const [vertical, setVertical] = useState("top");
  const [horizontal, setHorizontal] = useState("center");

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {/* Tài khoản hoặc mật khẩu không chính xác ! */}
          {err}
        </Alert>
      </Snackbar>
      
    </>
  );
};

export default Alert_info;
