import Image from "next/image";

const Home = () => {
  return (
    <div className="m-auto h-screen flex justify-evenly border-red-500 border-2">
      <div className="border-black border-2 m-auto">
        <h1 className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight ">
          Salut,
        </h1>
        <h2 className="text-3xl font-extralight">
          Je suis Denis, Développeur Web full-Stack
        </h2>
      </div>
      <div className="border-yellow-600 border-2 m-auto">Picture</div>
    </div>
  );
};

export default Home;
