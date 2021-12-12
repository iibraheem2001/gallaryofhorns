import React from 'react';
import HornedBeasts from './HornedBeasts.js'

class Main extends React.Component {
  render() {
    return (
        <>
        <p>Here is a list of Beasts!</p>
        <HornedBeasts title={'Goat'} 
        img={"https://i.natgeofe.com/n/e9023026-7589-45ac-9e71-e510730329f3/Goat-portrait_3x4.jpg"}
        description={'its a goat!'}/>

        <HornedBeasts title={'Unicorn'} 
        img={"https://cdn.shopify.com/s/files/1/1365/2497/products/Rainbow-unicorn-mask_1024x.png?v=1553633323"}
        description={'its a Unicorn!'}/>

        

        </>
    
    )
  }
};

export default Main;