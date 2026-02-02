export interface RCCardData {
  // Front side fields
  regnNo: string;
  dateOfRegn: string;
  regnValidity: string;
  chassisNumber: string;
  ownerSerial: string;
  engineNumber: string;
  ownerName: string;
  fuel: string;
  sonDaughterWifeOf: string;
  emissionNorms: string;
  address: string;
  cardIssueDate: string;
  
  // Back side fields
  vehicleClass: string;
  makersName: string;
  modelName: string;
  color: string;
  bodyType: string;
  seatingCapacity: string;
  monthYearOfMfg: string;
  unladenWeight: string;
  noOfCylinders: string;
  cubicCapHorsePower: string;
  financier: string;
  registrationAuthority: string;
}

export const defaultRCCardData: RCCardData = {
  regnNo: "",
  dateOfRegn: "",
  regnValidity: "",
  chassisNumber: "",
  ownerSerial: "",
  engineNumber: "",
  ownerName: "",
  fuel: "",
  sonDaughterWifeOf: "",
  emissionNorms: "",
  address: "",
  cardIssueDate: "",
  vehicleClass: "",
  makersName: "",
  modelName: "",
  color: "",
  bodyType: "",
  seatingCapacity: "",
  monthYearOfMfg: "",
  unladenWeight: "",
  noOfCylinders: "",
  cubicCapHorsePower: "",
  financier: "",
  registrationAuthority: "",
};
