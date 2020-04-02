import React from "react";


const HomePage = props => {


  return (
    <div style={{ width: "100%" }}>
      <div className="wrapper"
      >
        <img
        className="CTAimage"
          style={{ 
            opacity: ".8",
        }}
          src={require(`../images/wimber-cancho-MXeIRZQ5kh8-unsplash.jpg`)}
          alt="avo"
        />
        <div className="CTA"
         style={{
          width: "44%",
          color: "rgb(250,236,230)",
          fontSize: "2rem!important",
          flexWrap: "wrap",
          // textAlign: "start",
          alignContent: "center",
          alignItems: "center",
          padding: "1%",
          paddingBottom: "5%"
         }}
        >
          <h1>
            ALWAYS FRESH, RIDICULOUSLY CHEAP
          </h1>
          <button
          style={{
            color: "rgb(250,236,230)",
            background: "transparent",
            border: "4px solid rgb(250,236,230)",
            fontSize: "1.5rem",
            fontFamily: "Montserrat",
            marginLeft: "34.5%",
            padding: "3%"
          }}
          onClick={() => window.open('/shop')}
          > Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;