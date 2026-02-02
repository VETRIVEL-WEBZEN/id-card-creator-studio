import { useState } from "react";
import { RCCardData, defaultRCCardData } from "@/types/rcCard";
import RCCardForm from "@/components/RCCardForm";
import RCCardPreview from "@/components/RCCardPreview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

const Index = () => {
  const [cardData, setCardData] = useState<RCCardData>(defaultRCCardData);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="p-2 bg-primary rounded-lg">
              <CreditCard className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Vehicle RC Card Maker
            </h1>
          </div>
          <p className="text-muted-foreground text-sm">
            Create your Vehicle Registration Certificate card with live preview
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Form Section */}
          <Card className="order-2 lg:order-1">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                Enter Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RCCardForm data={cardData} onChange={setCardData} />
            </CardContent>
          </Card>

          {/* Preview Section */}
          <Card className="order-1 lg:order-2">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Live Preview
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <RCCardPreview data={cardData} />
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-8">
          Card dimensions: 85.6 mm × 54 mm (Standard ID Card Size)
        </p>
      </div>
    </div>
  );
};

export default Index;
