import React, { useState } from "react";
import Header from "../SocailComponents/Header";
import Footer from "../SocailComponents/Footer";
import SideBar from "../SocailComponents/SideBar";
import Createpost from "../SocailComponents/CreatePost";
import Card from "../SocailComponents/Card";
import MyPostList from "../SocialStore/SocialPostlist";

export default function SocailMedia() {
  const [selectedtab, setSelectedtab] = useState("Home");

  return (
    <MyPostList>
      <div style={{ display: "flex" }}>
        <SideBar
          selectedtab={selectedtab}
          setSelectedtab={setSelectedtab}
        />
        <div style={{ width: "100%" }}>
          <Header />
          {selectedtab === "Home" ? <Card /> : <Createpost />}
          <Footer />
        </div>
      </div>
    </MyPostList>
  );
}
