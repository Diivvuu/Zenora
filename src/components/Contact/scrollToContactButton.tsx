import React from "react";
import { Mail } from "lucide-react";

function ScrollToContactButton() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("section-contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-white w-fit fixed bottom-20 right-20 z-10">
      <div onClick={scrollToContact} style={{ cursor: "pointer" }}>
        <div className="border-[3px] border-[var(--color-primary-500)] rounded-full p-3">
          <Mail className="text-[var(--color-primary-500)]" />
        </div>
      </div>
    </div>
  );
}

export default ScrollToContactButton;
