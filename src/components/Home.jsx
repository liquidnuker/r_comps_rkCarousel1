import RkCarousel1_01 from "./RkCarousel1-01_wrap.jsx";
import RkCarousel1_02 from "./RkCarousel1-02_wrap.jsx";
import RkCarousel1_03 from "./RkCarousel1-03_wrap.jsx";
import RkCarousel1_04 from "./RkCarousel1-04_wrap.jsx";

export default function Home(props) {
  return (
    <div>
      {/*rkCarousel1-01 placeholder*/}
      <h2 className="item-id">rkCarousel1-01</h2>
      <div className="row">
        <div className="col-sm-12">
          <RkCarousel1_01 />
        </div>
      </div>
    {/*end rkCarousel1-01 placeholder*/}

  {/*rkCarousel1-02 placeholder*/}
      <h2 className="item-id">rkCarousel1-02</h2>
      <div className="row">
        <div className="col-sm-12">
          <RkCarousel1_02 />
        </div>
      </div>
    {/*end rkCarousel1-02 placeholder*/}

  {/*rkCarousel1-03 placeholder*/}
      <h2 className="item-id">rkCarousel1-03</h2>
      <div className="row">
        <div className="col-sm-12">
          <RkCarousel1_03 />
        </div>
      </div>
    {/*end rkCarousel1-03 placeholder*/}

  {/*rkCarousel1-04 placeholder*/}
      <h2 className="item-id">rkCarousel1-04</h2>
      <div className="row">
        <div className="col-sm-12">
          <RkCarousel1_04 />
        </div>
      </div>
    {/*end rkCarousel1-04 placeholder*/}
    </div>
  );
}