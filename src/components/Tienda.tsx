import { deskTop, rotate, setHoverLink } from "../types/Types";
import Carousel from "./Carousel";

type Tienda = {
  rotate: rotate;
  setHoverLink: setHoverLink;
  deskTop: deskTop;
};

const Tienda = (props: Tienda) => {
  const { rotate, setHoverLink, deskTop } = props;

  return (
    <div className="main-wrapper">
      <section className="picture-container">
        <div className="tienda-picture">
          <div
            style={{ transform: `rotateZ(${rotate}deg)` }}
            className="left-dec"
          ></div>
          <div
            style={{ transform: `rotate(-${rotate}deg)` }}
            className="right-dec"
          ></div>
        </div>
      </section>
      <section className="section-container">
        <Carousel setHoverLink={setHoverLink} deskTop={deskTop} />
      </section>
    </div>
  );
};

export default Tienda;
