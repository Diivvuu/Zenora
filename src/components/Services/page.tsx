"use client";
import { services } from "@/constants/data";
import Card from "./Card";
import { CardSpotlight } from "../ui/card-spotlight";

function Services() {
  // const cardRef = useRef([]);

  return (
    <section className="h-[50vh] w-full">
      <div className="flex items-center h-full justify-center gap-x-8">
        {services.map((service, i) => (
          <CardSpotlight key={i} className="rounded-xl">
            <Card
              title={service.title}
              description={service.description}
              url={service.link}
              // cardRef={(el: Event) => (cardRef.current[i] = el)}
            />
          </CardSpotlight>
        ))}
      </div>
    </section>
  );
}

export default Services;
