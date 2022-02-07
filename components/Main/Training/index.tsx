import Image from "next/image";
import MyFeeds from "../../MyFeeds";

const Training = () => {
  return (
    <div className="flex justify-around p-20 m-auto">
      <div>Image</div>
      <div>
        <MyFeeds />
      </div>
    </div>
  );
};

export default Training;
