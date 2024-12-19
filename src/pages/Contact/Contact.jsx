import { useNavigate } from "react-router-dom";
import ContactContainer from "./ContactStyle";


const Contact = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate("/")
  }
  
  return (
    <>
      <ContactContainer>
      <form onSubmit={handleSubmit}>
        <div className="background">
          CONTACT wıth<span> chef Seckin</span>
          <div className="app-contact">CONTACT INFO : +123456789</div>
          <div>
            <input placeholder="NAME" required />
            <input placeholder="EMAIL" required/>
            <input placeholder="TITLE" required/>
            <input placeholder="MESSAGE" required/>
          </div>
          <div >
            <button className="app-form-button">CANCEL</button>
            <button className="app-form-button" onClick={handleSubmit}>SEND</button>
          </div>
        </div>
        </form>
      </ContactContainer>
    </>
  );
};

export default Contact;