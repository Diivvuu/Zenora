"use client";

interface CardProps {
  title: string;
  description: string;
  url: string;
}

const Card = ({ title, description, url }: CardProps) => {
  return (
    <div
      // ref={cardRef}
      className="service-card w-full p-4 text-white z-40"
    >
      <h2 className="text-center text-2xl font-semibold">{title}</h2>

      <p className="text-base font-semibold">{description}</p>
      <div className=" mt-4 rounded-xl border-2 border-white w-fit px-3 py-2">
        Know more
      </div>
    </div>
  );
};

export default Card;
