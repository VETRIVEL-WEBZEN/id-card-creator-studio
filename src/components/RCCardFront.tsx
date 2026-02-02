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
        width: "323px",
        height: "204px",
        backgroundImage: `url(${rcFrontBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Regn. No - below "Regn. No" label */}
      <div className="absolute text-[8px] font-bold text-foreground" style={{ top: "50px", left: "92px" }}>
        {data.regnNo}
      </div>
      
      {/* Date of Regn - below "Date of Regn." label */}
      <div className="absolute text-[8px] font-bold text-foreground" style={{ top: "50px", left: "175px" }}>
        {data.dateOfRegn}
      </div>
      
      {/* Regn. Validity - below "Regn. Validity" label */}
      <div className="absolute text-[8px] font-bold text-foreground" style={{ top: "50px", left: "256px" }}>
        {data.regnValidity}
      </div>
      
      {/* Chassis Number - below "Chassis Number" label */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "74px", left: "92px" }}>
        {data.chassisNumber}
      </div>
      
      {/* Owner Serial - next to "Serial" on right side */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "88px", left: "272px" }}>
        {data.ownerSerial}
      </div>
      
      {/* Engine Number - below "Engine / Motor Number" label */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "100px", left: "92px" }}>
        {data.engineNumber}
      </div>
      
      {/* Owner Name - below "Owner Name" label */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "116px", left: "92px" }}>
        {data.ownerName}
      </div>
      
      {/* Fuel - below "Fuel" label on the left */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "174px", left: "5px" }}>
        {data.fuel}
      </div>
      
      {/* Son/Daughter/Wife of - same row as fuel, next to label */}
      <div className="absolute text-[10px] font-semibold text-foreground" style={{ top: "167px", left: "90px", maxWidth: "180px" }}>
        {data.sonDaughterWifeOf}
      </div>
      
      {/* Emission Norms - below "Emission Norms" label */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "195px", left: "5px" }}>
        {data.emissionNorms}
      </div>
      
      {/* Address - below "Address" label */}
      <div className="absolute text-[8px] font-semibold text-foreground leading-tight" style={{ top: "195px", left: "90px", maxWidth: "220px" }}>
        {data.address}
      </div>

      {/* Card Issue Date - vertical text on right edge */}
      <div className="absolute text-[8px] font-bold text-foreground" style={{ top: "58px", right: "3px", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
        {data.cardIssueDate}
      </div>
    </div>
  );
};

export default RCCardFront;
