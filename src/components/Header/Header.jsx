import { Button, FoodInput, FormContainer, HeaderContainer, MainHeader, Select } from "./HeaderStyle"

const Header = ({setQuery, setSelectedMeal, getData, mealType}) => {

  const handleSubmit=(e)=> {
    e.preventDefault();
    getData()
  }

  return   (
  <HeaderContainer>
<MainHeader>
  Welcome to GastroApp
</MainHeader>
<FormContainer onSubmit={handleSubmit}>
  <FoodInput type="text" placeholder="search" onChange={(e)=>setQuery(e.target.value)}/>
<Button type="submit">Search</Button>
<Select  name="mealType" id="mealType" onChange={(e)=>setSelectedMeal(e.target.value)} >
{mealType.map((meal, index)=>(
  <option key={index} value={meal.toLowerCase()}>{meal}</option>
))}
</Select>

</FormContainer>  
    </HeaderContainer>
  );
};

export default Header