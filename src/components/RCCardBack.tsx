import { RCCardData } from "@/types/rcCard";
import rcBackBg from "@/assets/RC_2.png";

interface RCCardBackProps {
  data: RCCardData;
}

const RCCardBack = ({ data }: RCCardBackProps) => {
  return (
    <div
      className="rc-card relative overflow-hidden"
      style={{
        width: "323px",
        height: "204px",
        backgroundImage: `url(${rcBackBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Vehicle Class - after "Vehicle Class:" label at top */}
      <div className="absolute text-[11px] font-bold text-foreground" style={{ top: "6px", left: "150px" }}>
        {data.vehicleClass}
      </div>
      
      {/* Regn. Number - below "Regn. Number" label on left */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "24px", left: "5px" }}>
        {data.regnNo}
      </div>
      
      {/* Maker's Name - below "Maker's Name" label */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "24px", left: "118px" }}>
        {data.makersName}
      </div>
      
      {/* Model Name - below "Model Name" label */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "68px", left: "128px" }}>
        {data.modelName}
      </div>
      
      {/* Color - below "Color" label */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "88px", left: "128px" }}>
        {data.color}
      </div>
      
      {/* Body Type - below "Body Type" label */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "108px", left: "128px" }}>
        {data.bodyType}
      </div>
      
      {/* Seating Capacity - below "Seating (in all) Capacity" label */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "128px", left: "128px" }}>
        {data.seatingCapacity}
      </div>
      
      {/* Month - Year of Mfg - below label on left side */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "162px", left: "5px" }}>
        {data.monthYearOfMfg}
      </div>
      
      {/* Unladen Weight - below "Unladen Weight (Kg)" label */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "148px", left: "128px" }}>
        {data.unladenWeight}
      </div>
      
      {/* No of Cylinders - after "No of Cylinders :" label at bottom left */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "180px", left: "82px" }}>
        {data.noOfCylinders}
      </div>
      
      {/* Cubic Cap / Horse Power / Wheel Base - three values in row */}
      <div className="absolute text-[10px] font-bold text-foreground" style={{ top: "180px", left: "128px" }}>
        {data.cubicCapHorsePower}
      </div>
      
      {/* Financier - below "Financier" label at bottom */}
      <div className="absolute text-[8px] font-bold text-foreground text-center" style={{ top: "194px", left: "5px", maxWidth: "140px" }}>
        {data.financier}
      </div>
      
      {/* Registration Authority - below "Registration Authority" label */}
      <div className="absolute text-[9px] font-bold text-foreground text-center" style={{ top: "194px", left: "200px", maxWidth: "120px" }}>
        {data.registrationAuthority}
      </div>
    </div>
  );
};

export default RCCardBack;
