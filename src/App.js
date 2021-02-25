import React from "react";
import PinInput from "react-pin-input";
import "./App.css";

class App extends React.PureComponent {
  state = {
    value: ""
  };

  onChange = value => {
    this.setState({ value });
  };

  onClear = () => {
    this.setState({
      value: ""
    });
    this.pin.clear();
  };

  render() {
    const { value } = this.state;
    return (
      <>
      <h2>Login</h2>
      <div className="app">
        <PinInput
          length={4}
          focus
          // disabled
          secret
          ref={p => (this.pin = p)}
          type="numeric"
          onChange={this.onChange}
        />
        {/* <div>{value}</div> */}
        <button className="btn" onClick={this.onClear}>Clear</button>
      </div>
      </>
    );
  }
}
export default App;
