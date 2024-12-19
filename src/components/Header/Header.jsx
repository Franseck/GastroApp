import { Button, FoodInput, FormContainer, HeaderContainer, MainHeader } from "./HeaderStyle"

const Header = ({setQuery}) => {


  return   (
  <HeaderContainer>
<MainHeader>
  Welcome to GastroApp
</MainHeader>
<FormContainer>
  <FoodInput type="text" placeholder="search" onChange={(e)=>setQuery(e.target.value)}/>
<Button type="submit">Search</Button>
<Select name
>

</Select>

</FormContainer>
    </HeaderContainer>
  );
};

export default Header