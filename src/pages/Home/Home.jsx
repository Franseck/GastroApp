import { useEffect, useState } from "react";
import HomeStyle from "./HomeStyle"
import axios from "axios";
import Header from "../../components/Header/Header"

const Home = () => {

  const mealType = ["Breakfast", "Dinner", "Lunch", "Snack", "TeaTime" ];
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(mealType[0])
  const [recipes, setRecipes] = useState("")


const BASE_URL ='https://dummyjson.com/recipes'


const getData = async () => {
try {
    const {data} = await axios(URL);
  console.log(data.recipes)
} catch (error) {
  console.log(error);
}


};

useEffect(()=>{
  getData();
},[]);


  return (
    <div>
      <Header setQuery={setQuery} setMealType={setSelectedMeal} mealType={mealType}  />

    </div>
  )
}

export default Home