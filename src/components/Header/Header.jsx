import React, { useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ButtonBase } from "@mui/material";

import { Button } from "antd";
import { useAuth } from "../../contexts/authContext";

import Login from "../Auth/Login";
import Auth from "../Auth/Auth";
import { Link } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";
import { favoritesContext } from "../../contexts/favoritesContext";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BookmarkBorder } from "@mui/icons-material";

const Header = () => {
  const { getCart, cartLength } = React.useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);

  const { getFavorites, favoritesLength } = React.useContext(favoritesContext);
  useEffect(() => {
    getFavorites();
  }, []);

  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowRes, setModalShowRes] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const {
    handleLogout,
    user: { email },
  } = useAuth();
  console.log({ email });

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {email ? (
        <Button onClick={handleLogout}>
          Log Out
        </Button>
      ) : (
        <>
          <MenuItem
            onClick={() => {
              setModalShow(true);
              handleMenuClose();
            }}
          >
            {" "}
            Log In{" "}
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalShowRes(true);
              handleMenuClose();
            }}
          >
            {" "}
            Sign In{" "}
          </MenuItem>

          <Login show={modalShow} onHide={() => setModalShow(false)} />
          <Auth show={modalShowRes} onHide={() => setModalShowRes(false)} />
        </>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    </Menu>
  );

  return (
    //navbar start
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        backgroundColor: "rgba(255,229,204, 0.05)",
      }}
    >
      <Container>
        <Navbar.Brand
          href="/"
          style={{
            color: "#000",
            fontSize: "5vw",
            fontWeight: "700",
          }}
        >
          MOÉ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "black",
            }}
          >
            <Nav.Link
              href="/shop"
              style={{
                color: "black",
              }}
            >
              SHOP
            </Nav.Link>
            <Nav.Link
              href="/brands"
              style={{
                color: "black",
              }}
            >
              ECOLOGY
            </Nav.Link>
            <Nav.Link
              href="/chat  "
              style={{
                color: "black",
              }}
            >
              FORUM
            </Nav.Link>
          </Nav>

          <Box sx={{ flexGrow: 0.5, border: 0 }}>
            <AppBar
              position="static"
              style={{ backgroundColor: "rgba(0,0,0, 0.04)" }}
            >
              <Toolbar>
                <Link style={{ color: "black" }} to="/favorites">
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                  >
                    <Badge badgeContent={+favoritesLength} color="error">
                      <BookmarkBorder />
                    </Badge>
                  </IconButton>
                </Link>

                <Box sx={{ flexGrow: 1 }} />

                  <Link style={{ color: "black" }} to="/cart">
                    <IconButton
                      size="large"
                      aria-label="show 4 new mails"
                      color="inherit"
                    >
                      <Badge badgeContent={+cartLength} color="error">
                        <ShoppingCartIcon />
                      </Badge>
                    </IconButton>
                  </Link>

                {email ? (
                  <>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="admin"
                    >
                      <ButtonBase
                        style={{ marginRight: "10px" }}
                        variant="text"
                      >
                        Profile
                      </ButtonBase>
                    </Link>
                    <Button onClick={handleLogout}  style={{color:"black", border:"1px solid black"}}>
                      Log Out
                    </Button>
                  </>
                ) : (
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/"
                  >
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                  </Link>
                )}
              </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
          </Box>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
