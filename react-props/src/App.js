import "./App.css";
import ProfileComponent from "./profile/ProfileComponent";
import PropTypes from "prop-types";
const App = () => {
  const styleObject = {
    color: "black",
    textAlign: "center",
    fontSize: "150%",
  };
  const handleName = (name) => {
    alert(`Hello, I'm Karama Mrakben`);
  };
  return (
    <div style={styleObject}>
      <ProfileComponent
        FullName="Karama Mrakben"
        bio="My name is Karama Mrakben I'm 27 years old I'm currently a student at GOMYCODE and I'm tunisian and I live in Djerba"
        profession="Student"
        className="bio"
        image="https://st3.depositphotos.com/3369547/12852/v/950/depositphotos_128525738-stock-illustration-woman-female-avatar-isolated.jpg"
        className="image"
        handleName={handleName}
      />
    </div>
  );
};
ProfileComponent.defaultProps = {
  FullName: "uncknown",
  image:
    "https://cdn1.vectorstock.com/i/thumb-large/45/70/female-avatar-profile-picture-silhouette-light-vector-4684570.jpg",
};
ProfileComponent.PropTypes = {
  FullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  image: PropTypes.string,
};
export default App;