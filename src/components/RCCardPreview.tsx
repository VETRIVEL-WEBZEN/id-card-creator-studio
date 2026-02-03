import { useState, useRef } from "react";
import { RCCardData } from "@/types/rcCard";
import RCCardFront from "./RCCardFront";
import RCCardBack from "./RCCardBack";
import { Button } from "@/components/ui/button";
import { Printer, RotateCcw, Copy } from "lucide-react";
import html2canvas from "html2canvas";

interface RCCardPreviewProps {
  data: RCCardData;
}

const RCCardPreview = ({ data }: RCCardPreviewProps) => {
  const [showBack, setShowBack] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  const handlePrint = async () => {
    if (!cardRef.current) return;
    
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 20,
        useCORS: true,
        backgroundColor: "#ffffff",
      });
      
      const imgData = canvas.toDataURL("image/png", 1.0);
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
                img {
                  width: 85.6mm;
                  height: 54mm;
                  object-fit: contain;
                }
                * {
                  -webkit-print-color-adjust: exact !important;
                  print-color-adjust: exact !important;
                }
              </style>
            </head>
            <body>
              <img src="${imgData}" alt="RC Card" />
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
        }, 250);
      }
    } catch (error) {
      console.error("Error generating print:", error);
    }
  };

  const handlePrintBoth = async () => {
    if (!frontRef.current || !backRef.current) return;
    
    try {
      const [frontCanvas, backCanvas] = await Promise.all([
        html2canvas(frontRef.current, {
          scale: 20,
          useCORS: true,
          backgroundColor: "#ffffff",
        }),
        html2canvas(backRef.current, {
          scale: 20,
          useCORS: true,
          backgroundColor: "#ffffff",
        }),
      ]);
      
      const frontImg = frontCanvas.toDataURL("image/png", 1.0);
      const backImg = backCanvas.toDataURL("image/png", 1.0);
      
      const printWindow = window.open('', '_blank');
      
      if (printWindow) {
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
                img {
                  width: 85.6mm;
                  height: 54mm;
                  object-fit: contain;
                }
                * {
                  -webkit-print-color-adjust: exact !important;
                  print-color-adjust: exact !important;
                }
              </style>
            </head>
            <body>
              <div class="card-page"><img src="${frontImg}" alt="RC Card Front" /></div>
              <div class="card-page"><img src="${backImg}" alt="RC Card Back" /></div>
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
          printWindow.print();
          printWindow.close();
        }, 250);
      }
    } catch (error) {
      console.error("Error generating print:", error);
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
      
      {/* Hidden refs for capturing both sides */}
      <div className="absolute -left-[9999px]">
        <div ref={frontRef}>
          <RCCardFront data={data} />
        </div>
        <div ref={backRef}>
          <RCCardBack data={data} />
        </div>
      </div>
    </div>
  );
};

export default RCCardPreview;
