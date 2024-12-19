import { useState } from "react";
import  { HeaderText, HomeImg, ImgDiv } from "./HomeStyle"
import axios from "axios";
import Header from "../../components/Header/Header"
import Cards from "../../components/Cards/Cards"
import chef from "../../assets/home.png"

const Home = () => {

  const mealType = ["Breakfast", "Dinner", "Lunch", "Snack", "TeaTime" ];
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(mealType[0])
  const [recipes, setRecipes] = useState(null)


const URL ='https://dummyjson.com/recipes'


const getData = async () => {
  if(query) {
    try {
    const {data} = await axios(URL);
  setRecipes(data.recipes)
} catch (error) {
  console.log(error);
}
} else{
  alert("Please write your meal")
}
}
console.log(recipes);


  return (
    <div>
      <Header 
      setQuery={setQuery} 
      setMealType={setSelectedMeal} 
      mealType={mealType}  
      getData={getData}/>
      {!recipes && (
        <ImgDiv>
        <HomeImg src={chef}/>
        </ImgDiv>
      )}
      {recipes?.length===0 && (
        <HeaderText>The food cannot be found</HeaderText>
      )}
      {recipes?.length>0 && 
<Cards recipes={recipes}/> }
    </div>
  )
}

export default Home