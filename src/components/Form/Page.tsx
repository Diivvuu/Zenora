import React from "react";
import { Input, Label } from "../ui/input";

const Page = () => {
  return (
    <form action="/submit" method="POST">
      <Label />
      <Input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your username"
        required
      />

      <label for="email">Email:</label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
      />

      <label for="password">Password:</label>
      <Input
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
