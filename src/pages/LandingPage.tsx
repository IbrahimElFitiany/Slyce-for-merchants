import Encorgement from "@components/Encorgement";
import LandingHeader from "@components/LandingHeader";
import RegistrationForm from "@/features/auth/components/RegistrationForm";
import LandingImage from "@/features/auth/components/LandingImage";

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
