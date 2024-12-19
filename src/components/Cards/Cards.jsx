import { useNavigate } from "react-router-dom"
import CardsStyle, { Card, Header, MainContainer,Image, Button } from "./CardsStyle"

const Cards = ({recipes}) => {

const navigate = useNavigate();

  return (
    <MainContainer wrap="wrap">
      {recipes.map((recipe, index)=>(
        <Card>
          <Header>{recipe.name}</Header>
          <Image src={recipe.image} />
          <Button onClick={()=> navigate("details", {state: recipe, replace:false})}>View More</Button>
</Card>
      ))}

    </MainContainer>
  )
}

export default Cards