import LoginStyle, { StyledButton, StyledForm, StyledInput } from "./LoginStyle"
import { LoginContainer } from "./LoginStyle"
import { FormContainer } from "./LoginStyle"
import { Header } from "./LoginStyle"
import { StyledImg } from "./LoginStyle" 
import logo from "../../assets/Logo.png"
import { useNavigate } from "react-router-dom"


const Login = () => {

  const navigate = useNavigate();
const handleSubmit =(e)=>{
  e.prevent.default();
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
<StyledInput type="text" placeholder="username" required/>
<StyledInput type="password" placeholder="password" required/>
<StyledButton type="submit">Login</StyledButton>
</StyledForm>

</FormContainer>
    </LoginContainer>
  )
}

export default Login