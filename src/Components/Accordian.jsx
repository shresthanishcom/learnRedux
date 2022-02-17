import React from "react";

const Accordian = () => {
  let accordianStyle = {
    height: "50px",
    width: "100%",
  };
  let planeStyle = { maxHeight: "0px", width: "100%", overflow: "hidden" };
  const handleClick = (e) => {
    let plane = e.target.nextElementSibling;

    if (plane.style.maxHeight === "0px") {
      plane.style.maxHeight = plane.scrollHeight + "px";
    } else {
      plane.style.maxHeight = "0px";
    }
  };
  return (
    <div>
      <button
        className="accordian"
        style={accordianStyle}
        onClick={handleClick}
      >
        Accordian
      </button>
      <div className="plane" style={planeStyle}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci harum
        tenetur quis necessitatibus ut ducimus officiis, autem labore inventore
        consectetur vero voluptatem, dignissimos maiores debitis suscipit nam
        hic omnis deleniti. Dolor minus mollitia magni reiciendis. Fugiat
        nostrum error vero amet ipsum repudiandae ut. Itaque id nemo
        voluptatibus quo unde aliquid.
      </div>
    </div>
  );
};

export default Accordian;
