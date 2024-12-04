import React from "react";
import { Input, Label } from "../ui/input";
import Label 

const Page = () => {
  return (
    <form action="/submit" method="POST">
      <Label />
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your username"
        required
      />

      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
      />

      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Page;
