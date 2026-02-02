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
      {/* Regn. No - below "Regn. No" label */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "40px", left: "48px" }}>
        {data.regnNo}
      </div>
      
      {/* Date of Regn - below "Date of Regn." label */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "60px", left: "170px" }}>
        {data.dateOfRegn}
      </div>
      
      {/* Regn. Validity - below "Regn. Validity" label */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "60px", left: "260px" }}>
        {data.regnValidity}
      </div>
      
      {/* Chassis Number - below "Chassis Number" label */}
      <div className="absolute text-[9px] font-bold text-foreground" style={{ top: "92px", left: "68px" }}>
        {data.chassisNumber}
      </div>
      
      {/* Owner Serial - next to "Serial" on right side */}
      <div className="absolute text-[11px] font-bold text-foreground" style={{ top: "88px", left: "270px" }}>
        {data.ownerSerial}
      </div>
      
      {/* Engine Number - below "Engine / Motor Number" label */}
      <div className="absolute text-[9px] font-bold text-foreground" style={{ top: "118px", left: "68px" }}>
        {data.engineNumber}
      </div>
      
      {/* Owner Name - below "Owner Name" label */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "145px", left: "68px" }}>
        {data.ownerName}
      </div>
      
      {/* Fuel - below "Fuel" label on the left */}
      <div className="absolute text-[9px] font-bold text-foreground" style={{ top: "168px", left: "8px" }}>
        {data.fuel}
      </div>
      
      {/* Son/Daughter/Wife of - right side of that row */}
      <div className="absolute text-[8px] font-semibold text-foreground" style={{ top: "162px", left: "68px", maxWidth: "170px" }}>
        {data.sonDaughterWifeOf}
      </div>
      
      {/* Emission Norms - below "Emission Norms" label */}
      <div className="absolute text-[8px] font-bold text-foreground" style={{ top: "188px", left: "8px" }}>
        {data.emissionNorms}
      </div>
      
      {/* Address - below "Address" label */}
      <div className="absolute text-[7px] font-semibold text-foreground leading-tight" style={{ top: "188px", left: "68px", maxWidth: "200px" }}>
        {data.address}
      </div>
      
      {/* Card Issue Date - vertical text on right edge */}
      <div className="absolute text-[9px] font-bold text-foreground" style={{ top: "75px", right: "5px", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
        {data.cardIssueDate}
      </div>
    </div>
  );
};

export default RCCardFront;
