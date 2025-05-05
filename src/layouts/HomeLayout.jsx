import React from "react";
import Header from "../components/Header";
import { Outlet, useNavigation } from "react-router";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayout/leftAside";
import RightAside from "../components/homeLayout/RightAside";
import Loading from "../components/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();

  return (
    <div className="container mx-auto">
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>

      <main className="mt-20 grid grid-cols-12">
        <aside className="col-span-3 sticky top-8 h-fit">
          <LeftAside></LeftAside>
        </aside>

        <div className="col-span-6">
          {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </div>

        <aside className="col-span-3 sticky top-8">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
