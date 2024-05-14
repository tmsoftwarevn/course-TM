import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert } from "@mui/material";
import AlertCustom from "../../alert/AlertCustom";
import HomeIcon from "@mui/icons-material/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { doLoginAction } from "../../redux/account/accountSlice";
import AlertSuccess from "../../alert/AlertSuccess";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mess = "Đăng xuất thành công";
  const location = useLocation();
  const isLogout = location?.state?.isLogout;
  console.log("ttttt", isLogout);
  
  // useEffect(() => {
  //   if (localStorage.getItem("access_token")) return navigate("/");
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    if (!data.get("email")) {
      setOpen(true);
      return;
    }
    if (!data.get("password")) {
      setOpen(true);
      return;
    }
    const login = {
      email: data.get("email"),
      password: data.get("password"),
    };
    const fakeData = {
      email: data.get("email"),
      fullName: "test email",
      id: 34,
    };
    console.log("llll", login);

    localStorage.setItem("access_token", "jfksfkjd");
    dispatch(doLoginAction(fakeData));
    navigate("/");
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#2196f3" }}>
              <HomeIcon
                className="cursor-pointer"
                onClick={() => navigate("/")}
              />
            </Avatar>
            <Typography component="h1" variant="h5">
              ĐĂNG NHẬP
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate={false}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Ghi nhớ"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Đăng nhập
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Quên mật khẩu?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/dang-ky" variant="body2">
                    {"Chưa có tài khoản? Đăng ký"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>

      <AlertCustom open={open} setOpen={setOpen} />

      {isLogout && <AlertSuccess mess={mess} isLogout = {isLogout} />}

    </>
  );
}
