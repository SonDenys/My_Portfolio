export interface MyTitleProps {
  title?: string;
}

const MyTitle = (props: MyTitleProps) => {
  const title = props.title || "Title Default";

  return (
    <div className="m-auto text-center py-5 pt-40">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
};

export default MyTitle;
