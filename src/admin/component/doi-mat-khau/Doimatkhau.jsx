import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import { useEffect } from "react";
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Doimatkhau() {
  const refForm = React.useRef();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem("access_token")) return navigate("/");
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      fullName: data.get("fullName"),
      phone: data.get("phone"),
      cf_password: data.get("confirm-password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          component="form"
          noValidate={false}
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                name="pass_old"
                required
                fullWidth
                id="pass_old"
                label="Mật khẩu cũ"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                fullWidth
                id="pass_new"
                label="Mật khẩu mới"
                name="pass_new"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="confirm_pass_new"
                label="Xác nhận mật khẩu mới"
                name="confirm_pass_new"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Cập nhật
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
