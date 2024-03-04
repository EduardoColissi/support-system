import * as React from "react";

import Background_login from "../../assets/Background_login.png";
import Logo from "../../assets/Logo.png";
import { AuthContext } from "../../contexts/Auth";
import Loading from "../../components/animations/Loading";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { Row, Col, Button } from "antd";

import { CenteredDiv, LeftDiv, RightDiv } from "./styles";

const Login = () => {
  const { loginAuth, logoutAuth } = React.useContext(AuthContext);

  const [loading, setLoading] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    logoutAuth();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await loginAuth(email, password);
    setLoading(false);
  };

  const handleClickShowPassword = () => {
    setIsVisible(!isVisible);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {loading ? <Loading /> : null}
      <LeftDiv>
        <CenteredDiv>
          <img src={Logo} alt="logo" />
          <Row gutter={[16, 12]}>
            <Col span={24}>
              <TextField
                sx={{
                  width: "100%",
                }}
                label="E-mail"
                variant="outlined"
                type="email"
                name="email"
                autoComplete="on"
                size="small"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
            <Col span={24}>
              <TextField
                sx={{
                  width: "100%",
                }}
                label="Senha"
                variant="outlined"
                type={isVisible ? "text" : "password"}
                name="password"
                autoComplete="on"
                size="small"
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {isVisible ? (
                          <VisibilityOff
                            sx={{
                              width: "20px",
                            }}
                          />
                        ) : (
                          <Visibility
                            sx={{
                              width: "20px",
                            }}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Col>
            <Col span={8}>
              <Button type="primary" onClick={handleSubmit}>
                Entrar
              </Button>
            </Col>
          </Row>
        </CenteredDiv>
      </LeftDiv>
      <RightDiv>
        <img src={Background_login} alt="logo" />
      </RightDiv>
    </>
  );
};

export default Login;
