"use client";
import { services } from "@/constants/data";
import { FocusCards } from "../ui/focus-cards";

function Services() {
  // const cardRef = useRef([]);

  return (
    <section className="section-services w-full section-padding-sm">
      <div>
        <h2 className="secondary-heading text-text-white">Our services</h2>
      </div>
      <FocusCards cards={services}></FocusCards>
    </section>
  );
}

export default Services;
