import { useState, useRef } from "react";
import ReactCardFlip from "react-card-flip";
import image_1 from "../assets/image_1.jfif";
import image_3 from "../assets/image_3.jpg";
import myImage from "../assets/my-image.jfif";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Flipcard: React.FC = () => {
  const [flipcard, setFlipcard] = useState<boolean>(false);
  const frontCardRef = useRef<null | HTMLDivElement>(null);
  // const [width, setWidth] = useState(0);
  // const [height, setHeight] = useState(0);

  const handleFlipCard = () => setFlipcard(!flipcard);

  // useLayoutEffect(() => {
  //   if (frontCardRef.current) {
  //     setWidth(frontCardRef.current.offsetWidth);
  //     setHeight(frontCardRef.current.clientHeight);
  //   }
  // }, []);

  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={flipcard}>
      <div
        onClick={handleFlipCard}
        className="w-[40%] md:w-[60%] sm:w-[95%] lg-[75%] mx-auto border box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; rounded-md bg-white text-white font-bold "
        ref={frontCardRef}
      >
        <div className="relative pb-20">
          <img src={image_3} alt="Banner" />
          <img
            src={myImage}
            alt="Developer_Gulam"
            className="rounded-full w-36 absolute bottom-1 right-3 border-4 border-white"
          />
        </div>
        <div className="flex flex-col  px-3 font-sans">
          <h1 className="text-gray-900 font-serif text-[28px] mb-5">
            Gulam Murtuza
          </h1>
          <blockquote>
            <p className="capitalize text-sm font-normal text-gray-400 ">
              Designation
            </p>
            <p className="text-gray-800 font-semibold text-base mb-2">
              Frontend Developer
            </p>
          </blockquote>
          <blockquote>
            <p className="capitalize text-sm font-normal text-gray-400 ">
              location
            </p>
            <p className="text-gray-800 font-semibold text-base mb-5">
              Mumbai, Maharashtra
            </p>
          </blockquote>
          <p className=" text-sm font-normal text-gray-400 ">
            Experienced Frontend Developer with expertise in React, JavaScript,
            TypeScript, HTML, CSS, and a proven track record in building
            responsive web interfaces. Driven Entry-Level Developer dedicated to
            solving complex challenges and committed to a thriving career in
            software development. Possesses strong communication, collaboration,
            and technical documentation skills.
          </p>
        </div>

        <div className="px-3 mt-7">
          <a
            href="https://www.linkedin.com/in/murtuza-g/"
            target="_blank"
            className="px-12 py-2 font-semibold rounded-full bg-[#0a66c2] "
          >
            More
          </a>
        </div>
        {/* <div className="gradient py-1 mt-10 rounded-b-md text-center font-medium">
          <a href="https://www.linkedin.com/in/murtuza-g/" className="">
            Check
          </a>
        </div> */}
      </div>

      {/* Back card */}
      <div
        onClick={handleFlipCard}
        // style={{ height: `${height}px`, width: `${width}px` }}
        className=" mx-auto border box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px rounded-b-md bg-white font-bold pb-5 mt-48 sm:mt-10"
      >
        <img
          src={image_1}
          alt="My-Image"
          className="object-cover"
          height={500}
        />

        <div className="flex flex-col gap-2 p-4">
          <h1 className="text-gray-900 font-serif text-[28px] ">
            Gulam Murtuza
          </h1>
          <p className="text-gray-800 font-semibold text-base mb-5">
            Frontend Developer
            <span className="italic">
              | HTML | CSS | JavaScript <br /> | Typescript | React | Next.js
            </span>
          </p>
          <p className="social">
            <a
              href="https://www.linkedin.com/in/murtuza-g/"
              className="text-sky-900 hover:mr-0.5"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/murtuza-g/"
              className="text-gray-700 hover:text-sky-900 hover:underline"
            >
              Linkedin
            </a>
          </p>
          <p className="social">
            <a
              href="https://api.whatsapp.com/send?phone=919336938754"
              className="text-green-600 hover:mr-0.5"
            >
              <WhatsAppIcon />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919336938754"
              className="text-gray-700 hover:text-green-600 hover:underline"
            >
              WhatsApp
            </a>
          </p>
          <p className="social">
            <a href="https://github.com/gulam161" className="hover:mr-0.5">
              <GitHubIcon />
            </a>
            <a
              href="https://github.com/gulam161"
              className="text-gray-700 hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </ReactCardFlip>
  );
};
export default Flipcard;
