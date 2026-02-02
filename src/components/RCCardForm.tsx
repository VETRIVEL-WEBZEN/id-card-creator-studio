import { RCCardData } from "@/types/rcCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface RCCardFormProps {
  data: RCCardData;
  onChange: (data: RCCardData) => void;
}

const RCCardForm = ({ data, onChange }: RCCardFormProps) => {
  const handleChange = (field: keyof RCCardData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <Tabs defaultValue="front" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="front">Front Side</TabsTrigger>
          <TabsTrigger value="back">Back Side</TabsTrigger>
        </TabsList>
        
        <TabsContent value="front" className="space-y-3 mt-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="regnNo" className="text-xs">Regn. No</Label>
              <Input
                id="regnNo"
                value={data.regnNo}
                onChange={(e) => handleChange("regnNo", e.target.value)}
                placeholder="TN01AB1234"
                className="h-8 text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="dateOfRegn" className="text-xs">Date of Regn.</Label>
              <Input
                id="dateOfRegn"
                value={data.dateOfRegn}
                onChange={(e) => handleChange("dateOfRegn", e.target.value)}
                placeholder="01/01/2024"
                className="h-8 text-sm"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="regnValidity" className="text-xs">Regn. Validity</Label>
              <Input
                id="regnValidity"
                value={data.regnValidity}
                onChange={(e) => handleChange("regnValidity", e.target.value)}
                placeholder="01/01/2039"
                className="h-8 text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="ownerSerial" className="text-xs">Owner Serial</Label>
              <Input
                id="ownerSerial"
                value={data.ownerSerial}
                onChange={(e) => handleChange("ownerSerial", e.target.value)}
                placeholder="1"
                className="h-8 text-sm"
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="chassisNumber" className="text-xs">Chassis Number</Label>
            <Input
              id="chassisNumber"
              value={data.chassisNumber}
              onChange={(e) => handleChange("chassisNumber", e.target.value)}
              placeholder="MALA851DLJM123456"
              className="h-8 text-sm"
            />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="engineNumber" className="text-xs">Engine / Motor Number</Label>
            <Input
              id="engineNumber"
              value={data.engineNumber}
              onChange={(e) => handleChange("engineNumber", e.target.value)}
              placeholder="K12MN1234567"
              className="h-8 text-sm"
            />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="ownerName" className="text-xs">Owner Name</Label>
            <Input
              id="ownerName"
              value={data.ownerName}
              onChange={(e) => handleChange("ownerName", e.target.value)}
              placeholder="JOHN DOE"
              className="h-8 text-sm"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="fuel" className="text-xs">Fuel</Label>
              <Input
                id="fuel"
                value={data.fuel}
                onChange={(e) => handleChange("fuel", e.target.value)}
                placeholder="PETROL"
                className="h-8 text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="emissionNorms" className="text-xs">Emission Norms</Label>
              <Input
                id="emissionNorms"
                value={data.emissionNorms}
                onChange={(e) => handleChange("emissionNorms", e.target.value)}
                placeholder="BHARAT STAGE VI"
                className="h-8 text-sm"
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="sonDaughterWifeOf" className="text-xs">Son / Daughter / Wife of</Label>
            <Input
              id="sonDaughterWifeOf"
              value={data.sonDaughterWifeOf}
              onChange={(e) => handleChange("sonDaughterWifeOf", e.target.value)}
              placeholder="FATHER NAME"
              className="h-8 text-sm"
            />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="address" className="text-xs">Address</Label>
            <Input
              id="address"
              value={data.address}
              onChange={(e) => handleChange("address", e.target.value)}
              placeholder="123, Street Name, City - 600001"
              className="h-8 text-sm"
            />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="cardIssueDate" className="text-xs">Card Issue Date</Label>
            <Input
              id="cardIssueDate"
              value={data.cardIssueDate}
              onChange={(e) => handleChange("cardIssueDate", e.target.value)}
              placeholder="01/01/2024"
              className="h-8 text-sm"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="back" className="space-y-3 mt-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="vehicleClass" className="text-xs">Vehicle Class</Label>
              <Input
                id="vehicleClass"
                value={data.vehicleClass}
                onChange={(e) => handleChange("vehicleClass", e.target.value)}
                placeholder="LMV"
                className="h-8 text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="makersName" className="text-xs">Maker's Name</Label>
              <Input
                id="makersName"
                value={data.makersName}
                onChange={(e) => handleChange("makersName", e.target.value)}
                placeholder="MARUTI SUZUKI"
                className="h-8 text-sm"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="modelName" className="text-xs">Model Name</Label>
              <Input
                id="modelName"
                value={data.modelName}
                onChange={(e) => handleChange("modelName", e.target.value)}
                placeholder="SWIFT VXI"
                className="h-8 text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="color" className="text-xs">Color</Label>
              <Input
                id="color"
                value={data.color}
                onChange={(e) => handleChange("color", e.target.value)}
                placeholder="WHITE"
                className="h-8 text-sm"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="bodyType" className="text-xs">Body Type</Label>
              <Input
                id="bodyType"
                value={data.bodyType}
                onChange={(e) => handleChange("bodyType", e.target.value)}
                placeholder="HATCHBACK"
                className="h-8 text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="seatingCapacity" className="text-xs">Seating Capacity</Label>
              <Input
                id="seatingCapacity"
                value={data.seatingCapacity}
                onChange={(e) => handleChange("seatingCapacity", e.target.value)}
                placeholder="5"
                className="h-8 text-sm"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="monthYearOfMfg" className="text-xs">Month - Year of Mfg.</Label>
              <Input
                id="monthYearOfMfg"
                value={data.monthYearOfMfg}
                onChange={(e) => handleChange("monthYearOfMfg", e.target.value)}
                placeholder="01/2024"
                className="h-8 text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="unladenWeight" className="text-xs">Unladen Weight (Kg)</Label>
              <Input
                id="unladenWeight"
                value={data.unladenWeight}
                onChange={(e) => handleChange("unladenWeight", e.target.value)}
                placeholder="890"
                className="h-8 text-sm"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="noOfCylinders" className="text-xs">No of Cylinders</Label>
              <Input
                id="noOfCylinders"
                value={data.noOfCylinders}
                onChange={(e) => handleChange("noOfCylinders", e.target.value)}
                placeholder="4"
                className="h-8 text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="cubicCapHorsePower" className="text-xs">CC / HP / Wheel Base</Label>
              <Input
                id="cubicCapHorsePower"
                value={data.cubicCapHorsePower}
                onChange={(e) => handleChange("cubicCapHorsePower", e.target.value)}
                placeholder="1197 / 82 / 2450"
                className="h-8 text-sm"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="financier" className="text-xs">Financier</Label>
              <Input
                id="financier"
                value={data.financier}
                onChange={(e) => handleChange("financier", e.target.value)}
                placeholder="HDFC BANK"
                className="h-8 text-sm"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="registrationAuthority" className="text-xs">Registration Authority</Label>
              <Input
                id="registrationAuthority"
                value={data.registrationAuthority}
                onChange={(e) => handleChange("registrationAuthority", e.target.value)}
                placeholder="RTO CHENNAI"
                className="h-8 text-sm"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RCCardForm;
