import React from 'react';

class ToggleButton extends React.Component{
  constructor(props) {
    super(props);
    this.state= {
      toggleState: true,
      toggleText: 'ON'
    }

  }
  handleClick(toggleState) {
    let toggleText = this.state.toggleText;
    if(toggleState) {
      toggleText = 'ON';
    }
    else {
      toggleText = 'OFF';
    }
    this.setState({
      toggleText,
      toggleState: !toggleState
    });

  }
  render() {
    return(
      <div>
        <button onClick={()=>this.handleClick(this.state.toggleState)}>{this.state.toggleText}</button>
      </div>
    );
  }
}

export default ToggleButton;
