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
  constructor(home: HomeProps) {
    super(home);
    this.data = require("../Resource/temp.json");
  }

  render() {
    return <Timeline posts={this.data.data}></Timeline>;
  }
}

export default Home;
