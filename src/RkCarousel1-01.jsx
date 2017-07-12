// use export default for async wrap
import {store} from "./js/store.js";

function PrevButton(props) {
  return (
    <button onClick={props.pr_onClick}>Prev</button>
  );
}

function NextButton(props) {
  return (
    <button onClick={props.pr_onClick}>Next</button>
  );
}

export default class RkCarousel1 extends React.Component {
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
    // return this.state.items[this.state.cIndex];  
    this.refresh();
  }

  prevItem() {
    if (this.state.cIndex === 0) {
      this.state.cIndex = this.state.items.length; // go to last
    }
    this.state.cIndex = this.state.cIndex - 1;
    // return this.state.items[this.state.cIndex];
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
      <div>
        {this.state.items[this.state.cIndex].itemName}
        <PrevButton pr_onClick={() => { this.prevItem() }} />
        <NextButton pr_onClick={() => { this.nextItem() }} />
        
        {/*pagebuttons*/}
        {this.state.items.map((i, index) =>
          <button onClick={() => { this.customPage(index) }}>
          {index}
          </button>
        )}
      {/*end pagebuttons*/}
      </div>
    );
  }
}