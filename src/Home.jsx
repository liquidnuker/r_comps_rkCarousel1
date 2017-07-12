import RkCarousel1_01 from "./RkCarousel1-01_wrap.jsx";

export default function Home(props) {
  return (
    <div>
      {/*rkCarousel1-01 placeholder*/}
      <h2 className="item-id">rkCarousel1-01</h2>
      <div className="row">
        <div className="col-sm-3">39</div>
        <div className="col-sm-9">
        {/*begin rkCarousel1*/}
          <RkCarousel1_01 />
        {/*end rkCarousel1*/}
        </div>
      </div>
    {/*end rkCarousel1-01 placeholder*/}
    </div>
  );
}