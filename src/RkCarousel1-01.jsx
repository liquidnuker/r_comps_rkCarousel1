// use export default for async wrap

export default class RkCarousel1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: "default"
    };

    // binders
  }

  // lifecycle hooks
  
  // methods
  
  render() {
    return (
      <div>{this.state.items}</div>
    );
  }
}