import React from "react";
import Button from "@/components/ui/button";

const ButtonDemo: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      {/* Primary Buttons */}
      <div>
        <h3 className="text-lg font-bold mb-4">Primary</h3>
        <div className="space-x-4">
          <Button variant="primary" state="default">
            Button
          </Button>
          <Button variant="primary" state="hover">
            Button
          </Button>
          <Button variant="primary" state="disabled">
            Button
          </Button>
          <Button variant="primary" state="active">
            Button
          </Button>
          <Button variant="primary" state="loading">
            Button
          </Button>
        </div>
      </div>

      {/* Secondary Buttons */}
      <div>
        <h3 className="text-lg font-bold mb-4">Secondary</h3>
        <div className="space-x-4">
          <Button variant="secondary" state="default">
            Button
          </Button>
          <Button variant="secondary" state="hover">
            Button
          </Button>
          <Button variant="secondary" state="disabled">
            Button
          </Button>
          <Button variant="secondary" state="active">
            Button
          </Button>
          <Button variant="secondary" state="loading">
            Button
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonDemo;
