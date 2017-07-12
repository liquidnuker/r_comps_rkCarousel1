// use export default for async wrap
import {store} from "./js/store.js";

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
  
  render() {
    return (
      <div>{this.state.items[this.state.cIndex].itemName}</div>
    );
  }
}