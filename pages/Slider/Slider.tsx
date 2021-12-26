import "../../styles/Slider.module.css";
import { v4 as uuidv4 } from "uuid";
import CardNews from "../../components/SliderComponents/CardNews";
import Carroussel from "../../components/SliderComponents/Carroussel";
import EditorJS from "@editorjs/editorjs";
import React, { useEffect, useState } from "react";

export default function Slider() {
  const [width, setWidth] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  let cards = [
    {
      content: <CardNews />,
    },
    {
      content: <CardNews />,
    },
    {
      content: <CardNews />,
    },
    {
      content: <CardNews />,
    },
    {
      content: <CardNews />,
    },
    {
      content: <CardNews />,
    },
    {
      content: <CardNews />,
    },
  ];

  return (
    <div className="App">
      <Carroussel
        cards={cards}
        height="500px"
        width="80%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}
