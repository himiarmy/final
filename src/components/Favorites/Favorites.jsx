import React, { useContext, useEffect } from "react";
import { List } from "antd";
import { favoritesContext } from "../../contexts/favoritesContext";
import FavoritesItem from "./FavoritesItem";

const Favorites = () => {
  const { getFavorites, favorites } = useContext(favoritesContext);
  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <div className="container" style={{ marginTop: "16vh" }}>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={favorites?.products}
        renderItem={(item) => <FavoritesItem item={item} />}
      />
    </div>
  );
};

export default Favorites;
