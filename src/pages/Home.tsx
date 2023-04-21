import React from "react";
import Timeline from "./component/TimelineComponent";

interface HomeProps {
  info?: string;
}
type MyState = {
  count: number; // like this
};

class Home extends React.Component<HomeProps, MyState> {
  data: any;
  render() {
    return <Timeline ></Timeline>; //posts={this.data.data}
  }
}

export default Home;
