import React  from 'react';
import Timeline from './component/TimelineComponent';

interface HomeProps {
  info?: string;
}


const Home = (props:HomeProps) => {
  return <Timeline></Timeline>;
};

export default Home;