import React from "react";

const withcounter = (WrappedComponent, incrementNumber) => {
  class Withcounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementcount = () => {
      this.setState((prevstate) => {
        return {
          count: prevstate.count + incrementNumber,
        };
      });
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementcount={this.incrementcount}
          {...this.props}
        />
      );
    }
  }
  return Withcounter;
};

export default withcounter;
