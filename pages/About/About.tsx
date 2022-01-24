import Link from "next/link";
import mycv from "../../public/MonCV.png";

const About = () => {
  return (
    <div className="m-auto h-screen border-purple-500 border-2">
      <div className="bg-green-600 border-2 cover h-full w-full inline ">
        Picture
      </div>
      <div className="border-black border-2 block z-50 relative top-1/3 text-center">
        <h1 className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight ">
          Qui suis-je ?
        </h1>
        <h2 className="text-2xl font-extralight">
          I am Denis, I am a React Software Engineer
        </h2>
      </div>
    </div>
  );
};

export default About;
