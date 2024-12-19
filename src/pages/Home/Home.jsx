import { useEffect, useState } from "react";
import HomeStyle, { HomeImg, ImgDiv } from "./HomeStyle"
import axios from "axios";
import Header from "../../components/Header/Header"
import Cards from "../../components/Cards/Cards"
import chef from "../../assets/home.png"

const Home = () => {

  const mealType = ["Breakfast", "Dinner", "Lunch", "Snack", "TeaTime" ];
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(mealType[0])
  const [recipes, setRecipes] = useState("")


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
<Cards recipes={recipes}/>
    </div>
  )
}

export default Home