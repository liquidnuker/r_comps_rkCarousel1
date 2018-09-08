// use export default for async wrap
import {store} from "../js/store.js";

function PrevButton(props) {
  return (
    <button className="rkCarousel101_previous" onClick={props.pr_onClick}>
    <svg xmlns="http://www.w3.org/2000/svg">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    </svg>
    <span>Previous</span>
    </button>
  );
}

function NextButton(props) {
  return (
    <button className="rkCarousel101_next" onClick={props.pr_onClick}>
    <span>Next</span>
    <svg xmlns="http://www.w3.org/2000/svg">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
    </svg>
    </button>
  );
}

export default class RkCarousel101 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: store.items,
      cIndex: 0
    };

    // binders
  }

  // lifecycle hooks
  
  // methods
  nextItem() {
    this.state.cIndex = this.state.cIndex + 1;
    this.state.cIndex = this.state.cIndex % this.state.items.length; // go to first
    // return state.items[state.cIndex];  
    this.refresh();
  }

  prevItem() {
    if (this.state.cIndex === 0) {
      this.state.cIndex = this.state.items.length; // go to last
    }
    this.state.cIndex = this.state.cIndex - 1;
    this.refresh();
  }

  customPage(index) {
    this.state.cIndex = index;
    this.refresh();
  }

  refresh() {
    this.setState(prevState => ({
      cIndex: this.state.cIndex
    }));
  }
  
  render() {
    return (
      <div className="rkCarousel101">
      <div className="rkCarousel101_content">
      {this.state.items[this.state.cIndex].itemName}
      </div>

      <nav className="rkCarousel101_pagination">
      {this.state.items.map((i, index) =>
        <button className="rkCarousel101_pagebuttons" onClick={() => { this.customPage(index) }}>
        {index}
        </button>
        )}
      </nav>

      <div className="rkCarousel101_prevnext">
      <PrevButton pr_onClick={() => { this.prevItem() }} />
      <NextButton pr_onClick={() => { this.nextItem() }} />
      </div>
      </div>
    );
  }
}