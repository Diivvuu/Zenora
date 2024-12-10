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
    <figure
      className={cn(
        "relative w-64 h-full cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col justify-center gap-y-2">
          <p className="text-sm font-medium p-0 m-0 dark:text-white">{name}</p>
          <p className="text-xs font-medium p-0 m-0 dark:text-white/40">
            {role}
          </p>
        </div>
      </div>
      <p className="text-left font-semibold">{comment}</p>
      <blockquote className="text-sm">{body}</blockquote>
    </figure>
  );
};

const Testimonials = () => {
  return (
    <div className="relative flex h-[60vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="h-[50%] [--duration:20s]">
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
