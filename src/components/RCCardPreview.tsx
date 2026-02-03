import { useState, useRef } from "react";
import { createRoot } from "react-dom/client";
import { RCCardData } from "@/types/rcCard";
import RCCardFront from "./RCCardFront";
import RCCardBack from "./RCCardBack";
import { Button } from "@/components/ui/button";
import { Printer, RotateCcw, Copy } from "lucide-react";

interface RCCardPreviewProps {
  data: RCCardData;
}

const RCCardPreview = ({ data }: RCCardPreviewProps) => {
  const [showBack, setShowBack] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

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

  const handlePrintBoth = () => {
    const printWindow = window.open('', '_blank');
    
    if (printWindow) {
      // Create a container for React to render into
      const container = document.createElement('div');
      container.id = 'print-container';
      
      // Render both cards
      const frontContainer = document.createElement('div');
      frontContainer.className = 'card-page';
      const backContainer = document.createElement('div');
      backContainer.className = 'card-page';
      
      container.appendChild(frontContainer);
      container.appendChild(backContainer);
      
      // Use createRoot to render React components
      const frontRoot = createRoot(frontContainer);
      const backRoot = createRoot(backContainer);
      
      frontRoot.render(<RCCardFront data={data} />);
      backRoot.render(<RCCardBack data={data} />);
      
      // Wait for render then print
      setTimeout(() => {
        const frontHTML = frontContainer.innerHTML;
        const backHTML = backContainer.innerHTML;
        
        // Cleanup
        frontRoot.unmount();
        backRoot.unmount();
        
        printWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>RC Card - Both Sides</title>
              <style>
                @page {
                  size: 85.6mm 54mm;
                  margin: 0;
                }
                @media print {
                  .card-page {
                    page-break-after: always;
                    width: 85.6mm;
                    height: 54mm;
                  }
                  .card-page:last-child {
                    page-break-after: auto;
                  }
                }
                body {
                  margin: 0;
                  padding: 0;
                }
                .card-page {
                  width: 85.6mm;
                  height: 54mm;
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
            <body>
              <div class="card-page">${frontHTML}</div>
              <div class="card-page">${backHTML}</div>
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
        }, 250);
      }, 100);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap gap-2 justify-center">
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
        <Button
          variant="secondary"
          size="sm"
          onClick={handlePrintBoth}
          className="gap-2"
        >
          <Copy className="h-4 w-4" />
          Print Both Sides
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
