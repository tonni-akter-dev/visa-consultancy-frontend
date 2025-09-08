
export const formatDate = (date: string | undefined) => {
  if (!date) return "";
  const d = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return d.toLocaleDateString("en-GB", options); // "23 Oct 2025"
};


export interface VisaData {
  familyName: string;
  givenNames: string;
  visaDescription: string;
  dateOfBirth: string;
  documentNumber: string;
  visaGrantNumber: string;
  visaClass: string;
  visaApplicant: string;
  visaGrantDate: string;
  visaExpiryDate: string;
  location: string;
  visaStatus: string;
  periodOfStay: string;
  visaType: string;
  enterBeforeDate: string;
  passportCountry: string;
  applicationId: string;
  transactionRef: string;
}
