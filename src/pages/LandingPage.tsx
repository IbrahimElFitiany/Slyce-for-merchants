import Encorgement from "../components/Encorgement";
import HeaderComponent from "../components/HeaderComponent";
import RegistrationForm from "../components/RegistrationForm";

function LandingPage() {
  return (
    <div className="flex flex-col">
      <nav className="">
        <HeaderComponent/>
      </nav>
      <RegistrationForm/>
      <Encorgement/>
    </div>
  );
}

export default LandingPage;
