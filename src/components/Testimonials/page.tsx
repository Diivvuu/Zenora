import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Bonnie Green",
    role: "Developer at Open AI",
    comment: "Very easy this was to integrate.",
    body: "If you care for you time, I hands down would go with this.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Roberta Casas",
    role: "Lead designer at Dropbox",
    comment: "Solid foundation for any project",
    body: "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Jese Leos",
    role: "Software Engineer at Facebook",
    comment: "Mindblowing workflow",
    body: "Aesthetically, the well designed components are beatuiful and will undoubtely level up your next application.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Joseph McFall",
    role: "CTO at Google",
    comment: "Efficient Collaborating",
    body: "You have many examples that can be used to create a fast prototype for your team.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    role: "Googler at Google",
    comment: "Nice work",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  role,
  comment,
  body,
}: {
  img: string;
  name: string;
  role: string;
  comment: string;
  body: string;
}) => {
  return (
    <div className="border-2 rounded-lg card-padding w-[40rem] ">
      <blockquote className="body-font-size">
        “Ernest has the when it comes to design. His skillset translates across
        traditional design to web and even motion graphics. He needs little
        direction to achieve great work so when a solid brief is written, you
        can expect ”
      </blockquote>
      <div className="flex items-center mt-5">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYuBVY7REViir2mWv1_fo79Q3PIRL0mZ1wQ&s"
          alt="Author"
          className="bg-white w-20 h-20 rounded-full mr-4"
        />
        <div>
          <p className="large-font-size highlighted-text-dark">{name}</p>
          {/* <p className="small-font-size">{role}</p> */}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border section-padding section-mb">
      <div className=" mb-[4rem] text-center">
        <h2 className="tertiary-heading highlighted-text-dark ">
          Testimonials
        </h2>
        <p className="subheading">What do our customer say about us?</p>
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};
export default Testimonials;
