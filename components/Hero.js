"use client";
import React, { useEffect, useState } from "react";
import { Fugaz_One } from "next/font/google";
import Button from "./Button";
import Calender from "./Calender";
import Link from "next/link";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <div className="py-4 md:py-12 flex flex-col gap-8 sm:gap-10">
      <h1
        className={
          "text-5xl sm:text-6xl md:text-7xl text-center leading-snug " +
          fugaz.className
        }
      >
        <span className="textGradient">AuraLog</span> helps you track your{" "}
        <span className="textGradient">daily</span> mood!
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">
        Create your mood record and see how you feel on
        <span className="font-semibold"> every day of the every year</span>
      </p>
      <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
        <Link href={"/dashboard"}>
          <Button text="Sign Up " />
        </Link>
        <Link href={"/dashboard"}>
          <Button text="LogIn " dark />
        </Link>
      </div>
      <Calender demo />
    </div>
  );
}
