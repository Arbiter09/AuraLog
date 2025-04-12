"use client";
import React, { useState } from "react";
import { Fugaz_One } from "next/font/google";
import Button from "./Button";
import { useAuth } from "context/AuthContext";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const [authenticating, setAuthenticating] = useState(false);

  const { signup, login } = useAuth();

  async function handleSubmit() {
    if (!email || !password || password.length < 6) {
      setError(
        "Please enter a valid email address and a password with at least 6 characters."
      );
      return;
    }
    setAuthenticating(true);
    try {
      setError("");
      if (isRegister) {
        console.log("Signing in a new User");
        await signup(email, password);
      } else {
        console.log("Logging in existing user");
        await login(email, password);
      }
    } catch (err) {
      console.log("Error occurred during login/signup:");
      console.log(err.message);
      setError(err.message);
    } finally {
      setAuthenticating(false);
    }
  }

  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3 className={"text-4xl sm:text-5xl md:text-6xl " + fugaz.className}>
        {isRegister ? "Register" : "Log In"}
      </h3>
      <p className={error ? "text-red-500" : "text-slate-500"}>
        {error ? error : "You're one step away!"}
      </p>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="w-full max-w-[400px] mx-auto px-3 duration-200 hover:border-indigo-600 focus:border-indigo-600 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none"
        placeholder="Password"
        type="password"
      />
      <div className="max-w-[400px] w-full mx-auto">
        <Button
          clickHandler={handleSubmit}
          text={authenticating ? "Submitting" : "Submit"}
          full
        />
      </div>
      <p className="text-center">
        {isRegister ? "Already Have an account? " : "Don't have an account? "}
        <button
          onClick={() => {
            setError("");
            setIsRegister(!isRegister);
          }}
          className="cursor-pointer text-indigo-600 hover:text-indigo-800 hover:underline transition duration-200 "
        >
          {isRegister ? "Sign In" : "Sign Up"}
        </button>
      </p>
    </div>
  );
}
