import React, { useState } from "react";
import copy from "copy-to-clipboard";

const MyClipboard = () => {
  const [copyText, setCopyText] = useState("");

  const copyToClipboard = () => {
    setCopyText("sondenis90@gmail.com");
    copy(copyText);
    alert(`You have copied "${copyText}"`);
  };

  return (
    <div>
      <p>Sondenis90@gmail.com</p>
      <button onClick={copyToClipboard}>Copiez dans le presse-papier</button>
    </div>
  );
};

export default MyClipboard;
