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
    <div className="relative w-full mx-auto rounded-2xl md:p-4 flex flex-col sm:flex-row md:flex-col">
      <div className="flex flex-col justify-center">
        <h2 className="tertiary-heading highlighted-text-light mb-2 ">
          Need any help?
        </h2>
        <p className="subheading-light">
          We&apos;re here to assist you in any way we can.
        </p>
      </div>
      <form
        className="my-8 py-10 px-10 rounded-xl relative w-full"
        onSubmit={handleSubmit}
      >
        <div className="custom-background absolute w-[40rem] h-[40rem] rounded-[15rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute inset-0 z-1 bg-[#333] rounded-xl "></div>
        <div className="relative z-10">
          {formFields.map((field, index) => (
            <LabelInputContainer
              key={field.id}
              className={index !== formFields.length - 1 ? "mb-6" : "mb-8"}
            >
              <Label
                htmlFor={field.id}
                className="large-font-size highlighted-text-light mb-2"
              >
                {field.label}
              </Label>
              {field.id === "message" ? (
                <textarea
                  className="p-[2rem] bg-neutral-800 text-white border-none outline-none  resize-none rounded-md transition-all focus:ring-2 focus:ring-indigo-500 body-font-size placeholder:body-font-size placeholder:text-neutral-500"
                  id={field.id}
                  placeholder={field.placeholder}
                />
              ) : (
                <Input
                  className="p-[2rem] bg-neutral-800 text-white border-none rounded-md transition-all focus:ring-2 focus:ring-cyan-500 placeholder:text-neutral-500 body-font-size placeholder:body-font-size"
                  id={field.id}
                  placeholder={field.placeholder}
                  type={field.type}
                />
              )}
            </LabelInputContainer>
          ))}

          <button
            className="bg-gradient-to-r from-gray-600 to-gray-900 w-full rounded-md h-12 font-medium transition-all transform hover:scale-105 shadow-lg body-font-size text-text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const SocialLoginButton = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <button className="p-3 bg-neutral-800 rounded-full text-white transition-all transform hover:scale-110">
      {icon}
    </button>
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
