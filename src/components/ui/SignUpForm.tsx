"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const formFields = [
    {
      id: "name",
      label: "Name",
      placeholder: "Jason",
      type: "text",
    },
    {
      id: "email",
      label: "Email Address",
      placeholder: "projectmayhem@fc.com",
      type: "email",
    },
    {
      id: "message",
      label: "Message",
      placeholder: "Type down your message for us",
      type: "textarea",
    },
  ];

  return (
    <div className="w-full mx-auto rounded-none md:rounded-2xl md:p-8 shadow-input ">
      <h2 className="text-3xl text-text-white">Need any help?</h2>
      <p className="body-font-size text-text-white">
        Connect with us to get the help you need!
      </p>

      <form
        className="my-8 py-12 px-8 rounded-xl  bg-[#1a1a1a]"
        onSubmit={handleSubmit}
      >
        {formFields.map((field, index) => (
          <LabelInputContainer
            key={field.id}
            className={index !== formFields.length - 1 ? "mb-4" : "mb-8"}
          >
            <Label htmlFor={field.id} className="text-xl mx-2">
              {field.label}
            </Label>
            {field.id === "message" ? (
              <textarea
                className="bg-[#0003] text-white h-40 border-none outline-none py-2 px-3 resize-none
                placeholder:text-neutral-400 dark:placeholder-text-neutral-600"
                id={field.id}
                placeholder={field.placeholder}
              />
            ) : (
              <Input
                className="bg-[#0003] text-white border-none text-sm"
                id={field.id}
                placeholder={field.placeholder}
                type={field.type}
              />
            )}
          </LabelInputContainer>
        ))}

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send Note &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
