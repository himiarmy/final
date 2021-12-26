import { makeStyles } from "@material-ui/core";
import React from "react";
import "../Home/Home.css";
import { Carousel } from "react-bootstrap";
// import { authContext, useAuth } from "../../contexts/authContext";
// import { useContext } from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  carousel: {
    marginTop: "0",
    borderRadius: "45px",
    margin: "auto",
  },
}));

const Home = () => {
  const classes = useStyles();
  // const { handleLogout, user } = useContext(authContext);
  return (
    <>
      <div className={classes.header}>
        {/* carousel starts */}

        <div className={classes.carousel}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                style={{
                  maxHeight: "100vh",
                }}
                className="d-block w-100"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/13834990620397.5e1d54204e23c.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                style={{
                  maxHeight: "100vh",
                }}
                className="d-block w-100"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/bc43de90620397.5e1d542050cea.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                style={{
                  maxHeight: "100vh",
                }}
                className="d-block w-100"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/87e45690620397.5e1d54204ed5f.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div
        className="container"
        style={{ textAlign: "center", fontSize: "150%" }}
      >
        <h3 style={{ marginTop: "20px" }}>ABOUT US</h3>
        <p className="abus">
          Moé is a lifestyle Select-shop brand that sells products throughout
          life. We are always trying to introduce various design products from
          all over the world that are beautiful but practical and do not go out
          of fashion over the years. All Moé collections go beyond simple beauty
          and introduce a wide range of practical and well-used items such as
          household items and fashion products. In order to establish a new
          brand value system for Moé and establish itself as a more
          differentiated lifestyle concept brand, we conducted an integrated
          rebranding.
        </p>
        <img style={{width:"90%"}} src="https://cdn.dribbble.com/userupload/910392/file/original-6077fb90329928d6238988573f675008.jpg?compress=1&resize=1600x1200&vertical=top"/>
        <div>
          <div>
            <iframe
              width="80%"
              height="600px"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=%D0%B1%D0%B8%D1%88%D0%BA%D0%B5%D0%BA%20%D0%BC%D0%BE%D0%B5&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
