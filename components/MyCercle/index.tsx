export interface MyCercleProps {
  title?: string;
  description?: string;
}

const MyCercle = (props: MyCercleProps) => {
  return (
    <div className="w-96 h-96 shadow-2xl rounded-full text-xl bg-gradient-to-r from-cyan-200 to-orange-100 leading-8 text-center text-black">
      <div className="relative top-1/3">
        <h2>{props.title}</h2>
        <p> Hello La team Hello La team Hello La team</p>
      </div>
    </div>
  );
};

export default MyCercle;

// .circle
//     {
//     width:500px;
//     height:500px;
//     border-radius:250px;
//     font-size:50px;
//     color:#fff;
//     line-height:500px;
//     text-align:center;
//     background:#000
//     }
