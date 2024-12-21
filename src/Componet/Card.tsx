 
import { ShareIcon } from "../icons/ShareIcon";
import { TrashIcon } from "../icons/TrashIcon";
 

// Interface for the card validation
interface CardProps {
  title: string;
  type: "Video" | "Twitter" | "Document" | "Link";
  content?: string;
  link: string;
  cardIcon:JSX.Element;
}

// Default style for the card
const defaultStyle = "bg-white min-w-75 min-h-48 border-2 rounded-2xl p-4   shadow-md outline-gray-200";

export const Card = ({ title, link, cardIcon, type }: CardProps) => {
  return (
    <div className={`${defaultStyle}`}>
      <div className="flex justify-between items-center">
        <div className="flex text-lg font-semibold">
          <div className="pr-4 text-gray-400">{cardIcon}</div>
          {title}
        </div>

        <div className="flex justify-between">
          <div className="pr-4 text-gray-400 font-extrabold">
            <a aria-label={`Navigate to ${title}`} href={link}>
              <ShareIcon />
            </a>
          </div>
          <div className="pr-3 text-gray-400 font-extrabold">
          <a aria-label={`Navigate to ${title}`} href={link}>
            <TrashIcon />
            </a>
          </div>
        </div>
      </div>

      <div>
        <h1>{title}</h1>
        {type === "Video" && (
          <div className="pt-2  ">
            <iframe
  className="w-full h-56 rounded-2xl border-4"
  width="560"
  height="315"
  src={
    link.includes("youtu.be")
      ? link.replace("https://youtu.be", "https://www.youtube.com/embed")
      : link
  }
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

          </div>
        )}
{type === "Twitter" && (
  <blockquote className="twitter-tweet  border-4">
    <a aria-label={`Navigate to ${title}`} href={link.replace("x.com","twitter.com")}></a>
  </blockquote>
)}
      </div>
    </div>
  );
};
