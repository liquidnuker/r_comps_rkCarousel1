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
    let state = this.state; // "this" remover
    state.cIndex = state.cIndex + 1;
    state.cIndex = state.cIndex % state.items.length; // go to first
    // return state.items[state.cIndex];  
    this.refresh();
  }

  prevItem() {
    let state = this.state;
    if (state.cIndex === 0) {
      state.cIndex = state.items.length; // go to last
    }
    state.cIndex = state.cIndex - 1;
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