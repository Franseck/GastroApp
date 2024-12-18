import LoginStyle, { StyledButton, StyledForm, StyledInput } from "./LoginStyle"
import { LoginContainer } from "./LoginStyle"
import { FormContainer } from "./LoginStyle"
import { Header } from "./LoginStyle"
import { StyledImg } from "./LoginStyle" 
import logo from "../../assets/Logo.png"
import { useNavigate } from "react-router-dom"


const Login = () => {

  const navigate = useNavigate();

  const userInfo = {
    username : "Seckin",
  };

const handleSubmit =(e)=>{
  e.preventDefault();
  sessionStorage.setItem("user", JSON.stringify(userInfo));
  navigate(-1);
}

  return (
    <LoginContainer>
<FormContainer>
  <StyledImg src={logo} >
  </StyledImg>
<Header>
Seckin Gastro App
</Header>
<StyledForm onSubmit={handleSubmit}>
<StyledInput type="text" placeholder="username" autoComplete="user" required/>
<StyledInput type="password" placeholder="password"  autoComplete="pass" required/>
<StyledButton type="submit">Login</StyledButton>
</StyledForm>

</FormContainer>
    </LoginContainer>
  )
}

export default Login