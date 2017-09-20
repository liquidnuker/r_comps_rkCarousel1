// use export default for async wrap
// import {store} from "../js/store.js";

function PrevButton(props) {
  return (
    <button className="rkCarousel102_previous" onClick={props.pr_onClick}>
    <svg xmlns="http://www.w3.org/2000/svg">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
    </svg>
    <span>Previous</span>
    </button>
  );
}

function NextButton(props) {
  return (
    <button className="rkCarousel102_next" onClick={props.pr_onClick}>
    <span>Next</span>
    <svg xmlns="http://www.w3.org/2000/svg">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
    </svg>
    </button>
  );
}

export default class RkCarousel102 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
      {
        itemName: "item1",
        description: "desc1",
        imgSrc: "",
        isActive: true
      }, 
      {
        itemName: "item2",
        description: "desc2",
        imgSrc: "",
        isActive: false
      }, 
      {
        itemName: "item3",
        description: "desc3",
        imgSrc: "",
        isActive: false
      }],
      cIndex: 0,
      activePageButton: 0,
    };

    // binders
  }

  // lifecycle hooks
  
  // methods
  nextItem() {
    let state = this.state; // "this" remover
    state.cIndex = state.cIndex + 1;
    state.cIndex = state.cIndex % state.items.length; // go to first
    
    this.setActivePageButton(state.cIndex);
  }

  prevItem() {
    let state = this.state;
    if (state.cIndex === 0) {
      state.cIndex = state.items.length; // go to last
    }
    state.cIndex = state.cIndex - 1;
    
    this.setActivePageButton(state.cIndex);
  }

  customPage(index) {
    this.state.cIndex = index;
    this.setActivePageButton(index);
  }

  setActivePageButton(index) {
    let activeItem = index;
    let state = this.state;
    
    state.items[activeItem].isActive = true;

    if (state.activePageButton !== activeItem) {
      state.items[state.activePageButton].isActive = false;

      // set current activePageButton
      state.activePageButton = activeItem;
    }

    this.refresh();
  }

  refresh() {
    this.setState(prevState => ({
      cIndex: this.state.cIndex
    }));
  }
  
  render() {
    const items = this.state.items;
    const isActive = this.state.isActive;

    return (
      <div className="rkCarousel102">
      <div className="rkCarousel102_content">
      {items[this.state.cIndex].itemName}
      </div>

      <nav className="rkCarousel102_pagination">
      {items.map((i, index) =>
        <div className={ items[index].isActive 
          ? 'rkCarousel102_pagebuttons rkCarousel102_active': 'rkCarousel102_pagebuttons' } 
          onClick={() => { this.customPage(index) }}>
          </div>
          )}
      </nav>

      <div className="rkCarousel102_prevnext">
      <PrevButton pr_onClick={() => { this.prevItem() }} />
      <NextButton pr_onClick={() => { this.nextItem() }} />
      </div>
      </div>
    );
  }
}