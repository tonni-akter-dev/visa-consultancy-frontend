import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable"; // or import { autoTable } from "jspdf-autotable" depending on your version

interface GenerateProps {
  data: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    visaType: string;
    visaStatus: string;
  };
}

const Generate: React.FC<GenerateProps> = ({ data }) => {
  const generate = () => {
    const doc = new jsPDF();

    // autoTable is now a standalone function
    autoTable(doc, {
      head: [["First Name", "Last Name", "Date of Birth", "Visa Type", "Visa Status"]],
      body: [
        [data.firstName, data.lastName, data.dateOfBirth, data.visaType, data.visaStatus],
      ],
    });

    doc.save("visa-details.pdf");
  };

  return (
    <div>
      <button className="bg-red-500 p-5 cursor-pointer" onClick={generate}>
        Download PDF
      </button>
    </div>
  );
};

export default Generate;
