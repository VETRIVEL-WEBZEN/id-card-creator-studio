import { RCCardData } from "@/types/rcCard";
import rcFrontBg from "@/assets/RC_1.png";

interface RCCardFrontProps {
  data: RCCardData;
}

const RCCardFront = ({ data }: RCCardFrontProps) => {
  return (
    <div
      className="rc-card relative overflow-hidden"
      style={{
        width: "323px", // 85.6mm * 3.78 (approx px per mm at 96dpi scaled)
        height: "204px", // 54mm * 3.78
        backgroundImage: `url(${rcFrontBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Regn. No */}
      <div className="absolute text-[9px] font-semibold text-foreground" style={{ top: "52px", left: "120px" }}>
        {data.regnNo}
      </div>
      
      {/* Date of Regn */}
      <div className="absolute text-[9px] font-semibold text-foreground" style={{ top: "52px", left: "195px" }}>
        {data.dateOfRegn}
      </div>
      
      {/* Regn. Validity */}
      <div className="absolute text-[9px] font-semibold text-foreground" style={{ top: "52px", left: "270px" }}>
        {data.regnValidity}
      </div>
      
      {/* Chassis Number */}
      <div className="absolute text-[8px] font-semibold text-foreground" style={{ top: "72px", left: "120px" }}>
        {data.chassisNumber}
      </div>
      
      {/* Owner Serial */}
      <div className="absolute text-[9px] font-semibold text-foreground" style={{ top: "72px", left: "265px" }}>
        {data.ownerSerial}
      </div>
      
      {/* Engine Number */}
      <div className="absolute text-[8px] font-semibold text-foreground" style={{ top: "95px", left: "120px" }}>
        {data.engineNumber}
      </div>
      
      {/* Owner Name */}
      <div className="absolute text-[9px] font-semibold text-foreground" style={{ top: "118px", left: "70px" }}>
        {data.ownerName}
      </div>
      
      {/* Fuel */}
      <div className="absolute text-[9px] font-semibold text-foreground" style={{ top: "138px", left: "30px" }}>
        {data.fuel}
      </div>
      
      {/* Son/Daughter/Wife of */}
      <div className="absolute text-[8px] font-semibold text-foreground" style={{ top: "150px", left: "70px", maxWidth: "180px" }}>
        {data.sonDaughterWifeOf}
      </div>
      
      {/* Emission Norms */}
      <div className="absolute text-[8px] font-semibold text-foreground" style={{ top: "168px", left: "65px" }}>
        {data.emissionNorms}
      </div>
      
      {/* Address */}
      <div className="absolute text-[7px] font-semibold text-foreground leading-tight" style={{ top: "180px", left: "50px", maxWidth: "220px" }}>
        {data.address}
      </div>
      
      {/* Card Issue Date */}
      <div className="absolute text-[8px] font-semibold text-foreground" style={{ top: "100px", right: "8px", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
        {data.cardIssueDate}
      </div>
    </div>
  );
};

export default RCCardFront;
