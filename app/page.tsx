"use client";

import { lazy, Suspense } from "react";
import { navItems } from "@/data";
import Head from "next/head";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Hero = lazy(() => import("@/components/Hero"));
const Grid = lazy(() => import("@/components/Grid"));
const Footer = lazy(() => import("@/components/Footer"));
const Clients = lazy(() => import("@/components/Clients"));
const Experience = lazy(() => import("@/components/Experience"));
const RecentProjects = lazy(() => import("@/components/RecentProjects"));

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <Hero />
        <Grid />
        <Experience />
        <RecentProjects />
        <Clients />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
