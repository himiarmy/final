import React, { useContext, useEffect } from "react";
import { Card } from "antd";

import { brandsContext } from "../../contexts/brandsContext";

const BrandsList = () => {
  const { getBrands, brands } = useContext(brandsContext);
  useEffect(() => {
    getBrands();
  }, []);
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "17vh",
      }}
    >
      <p>
        Amongst a myriad of environmental issues the world is facing today,
        climate change is one of the most serious and pressing ones. It's
        already having significant and costly effects on our communities, our
        health, and our environment. Climate change is also the most significant
        challenge to achieving sustainable development, and it threatens to drag
        millions of people into crushing poverty.
        <br />
        Climate change encompasses not only rising average temperatures but also extreme weather events,
        shifting wildlife populations and habitats, rising seas, and a range of
        other impacts. All of these changes are emerging as humans continue to
        add heat-trapping greenhouse gases to the atmosphere.
        <br />
        The impacts of climate change are plenty.
      </p>
      <img style={{width:"80vw"}} src="https://donorbox.org/nonprofit-blog/wp-content/uploads/2018/11/markus-spiske-1472456-unsplash-min-2048x1365.jpg"/>
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "17vh",
        }}
      >
        {brands.map((item) => (
          <Card
            hoverable
            style={{ width: "240px", height: "240px", margin: "10vh 10px" }}
            cover={<img alt="example" src={item.logo} />}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandsList;
