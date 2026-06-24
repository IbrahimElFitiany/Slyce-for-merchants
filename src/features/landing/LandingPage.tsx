import RegistrationForm from "@/features/landing/components/RegistrationForm";
import LandingImage from "@/features/landing/components/LandingImage";
import Encorgement from "./components/Encorgement";
import LandingHeader from "./components/LandingHeader";

function LandingPage() {
  return (
    <div className="flex flex-col">
      <LandingHeader/>
      <LandingImage/>
      <RegistrationForm/>
      <Encorgement/>
    </div>
  );
}

export default LandingPage;