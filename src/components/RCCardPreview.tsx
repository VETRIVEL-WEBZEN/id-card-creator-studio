import { useState, useRef } from "react";
import { RCCardData } from "@/types/rcCard";
import RCCardFront from "./RCCardFront";
import RCCardBack from "./RCCardBack";
import { Button } from "@/components/ui/button";
import { Printer, RotateCcw } from "lucide-react";

interface RCCardPreviewProps {
  data: RCCardData;
}

const RCCardPreview = ({ data }: RCCardPreviewProps) => {
  const [showBack, setShowBack] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (!cardRef.current) return;
    
    const printContent = cardRef.current.innerHTML;
    const printWindow = window.open('', '_blank');
    
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>RC Card - ${showBack ? "Back" : "Front"}</title>
            <style>
              @page {
                size: 85.6mm 54mm;
                margin: 0;
              }
              body {
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
              }
            </style>
            <link rel="stylesheet" href="${window.location.origin}/src/index.css">
          </head>
          <body>${printContent}</body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowBack(!showBack)}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          {showBack ? "Show Front" : "Show Back"}
        </Button>
        <Button
          size="sm"
          onClick={handlePrint}
          className="gap-2"
        >
          <Printer className="h-4 w-4" />
          Print
        </Button>
      </div>
      
      <div className="relative">
        <div 
          ref={cardRef}
          className="shadow-xl overflow-hidden border border-border"
        >
          {showBack ? <RCCardBack data={data} /> : <RCCardFront data={data} />}
        </div>
        
        <p className="text-center mt-3 text-xs text-muted-foreground">
          {showBack ? "Back Side" : "Front Side"} • 85.6 × 54 mm
        </p>
      </div>
    </div>
  );
};

export default RCCardPreview;
