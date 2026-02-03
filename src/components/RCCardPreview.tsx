import { useState, useRef } from "react";
import { RCCardData } from "@/types/rcCard";
import RCCardFront from "./RCCardFront";
import RCCardBack from "./RCCardBack";
import { Button } from "@/components/ui/button";
import { Download, RotateCcw } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface RCCardPreviewProps {
  data: RCCardData;
}

const RCCardPreview = ({ data }: RCCardPreviewProps) => {
  const [showBack, setShowBack] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 20, // High resolution for HD quality
        useCORS: true,
        backgroundColor: "#ffffff",
      });
      
      // RC card dimensions: 85.6 × 54 mm
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [85.6, 54],
      });
      
      const imgData = canvas.toDataURL("image/png", 1.0);
      pdf.addImage(imgData, "PNG", 0, 0, 85.6, 54);
      pdf.save(`rc-card-${showBack ? "back" : "front"}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
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
          onClick={handleDownload}
          className="gap-2"
        >
          <Download className="h-4 w-4" />
          Download
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
