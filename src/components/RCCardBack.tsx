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
      {/* Vehicle Class */}
      <div className="absolute text-[9px] font-bold text-foreground" style={{ top: "12px", left: "180px" }}>
        {data.vehicleClass}
      </div>
      
      {/* Regn. Number */}
      <div className="absolute text-[9px] font-semibold text-foreground" style={{ top: "38px", left: "15px" }}>
        {data.regnNo}
      </div>
      
      {/* Maker's Name */}
      <div className="absolute text-[9px] font-semibold text-foreground" style={{ top: "38px", left: "130px" }}>
        {data.makersName}
      </div>
      
      {/* Model Name */}
      <div className="absolute text-[9px] font-semibold text-foreground" style={{ top: "55px", left: "130px" }}>
        {data.modelName}
      </div>
      
      {/* Color */}
      <div className="absolute text-[9px] font-semibold text-foreground" style={{ top: "72px", left: "130px" }}>
        {data.color}
      </div>
      
      {/* Body Type */}
      <div className="absolute text-[9px] font-semibold text-foreground" style={{ top: "88px", left: "130px" }}>
        {data.bodyType}
      </div>
      
      {/* Seating Capacity */}
      <div className="absolute text-[9px] font-semibold text-foreground" style={{ top: "105px", left: "130px" }}>
        {data.seatingCapacity}
      </div>
      
      {/* Month - Year of Mfg */}
      <div className="absolute text-[9px] font-semibold text-foreground" style={{ top: "122px", left: "15px" }}>
        {data.monthYearOfMfg}
      </div>
      
      {/* Unladen Weight */}
      <div className="absolute text-[9px] font-semibold text-foreground" style={{ top: "122px", left: "130px" }}>
        {data.unladenWeight}
      </div>
      
      {/* No of Cylinders */}
      <div className="absolute text-[9px] font-semibold text-foreground" style={{ top: "148px", left: "15px" }}>
        {data.noOfCylinders}
      </div>
      
      {/* Cubic Cap / Horse Power / Wheel Base */}
      <div className="absolute text-[8px] font-semibold text-foreground" style={{ top: "140px", left: "130px", maxWidth: "180px" }}>
        {data.cubicCapHorsePower}
      </div>
      
      {/* Financier */}
      <div className="absolute text-[9px] font-semibold text-foreground" style={{ top: "165px", left: "60px" }}>
        {data.financier}
      </div>
      
      {/* Registration Authority */}
      <div className="absolute text-[9px] font-semibold text-foreground" style={{ top: "165px", left: "200px" }}>
        {data.registrationAuthority}
      </div>
    </div>
  );
};

export default RCCardBack;
