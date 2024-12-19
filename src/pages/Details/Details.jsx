import { DetailContainer, DetailPart, HeaderContainer, ImgContainer, IngContainer, OtherPart } from "./DetailsStyle"
import { useLocation } from "react-router-dom"
import recipe from "../../assets/recip.png"

const Details = () => {
const {state} = useLocation("");
 
  return (
    <DetailContainer>
      <HeaderContainer>
      <h1>Recipe</h1>
        <img src={recipe} alt="" />
      </HeaderContainer>
      <DetailPart wrap="wrap">
<OtherPart>
<h1>{state.name}</h1>
</OtherPart>
<ImgContainer>
<img src={state.image} alt="" />
</ImgContainer>
<IngContainer>
  <h4>Ingredients :</h4>
   {state.ingredients.map((line,index)=>(
    <div>
      <p>
        {index + 1 } - {line}
      </p>
    </div>
   ))}
</IngContainer>
<IngContainer>
  <h4>Instructions :</h4>
   {state.instructions.map((line,index)=>(
    <div>
      <p>
        {index + 1 } - {line}
      </p>
    </div>
   ))}
</IngContainer>
      </DetailPart>
    </DetailContainer>
  )
}

export default Details