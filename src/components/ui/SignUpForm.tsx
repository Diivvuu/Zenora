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
    <div className="relative w-full mx-auto rounded-none md:rounded-2xl md:p-4 bg-[#1b1b1b] border-2 border-transparent bg-clip-padding">
      <h2 className="text-4xl text-white text-center font-semibold">
        Need any help?
      </h2>
      <p className="text-lg text-neutral-400 text-center mt-2">
        We&apos;re here to assist you in any way we can.
      </p>

      <form
        className="my-8 py-10 px-6 rounded-xl bg-[#1b1b1b] relative"
        onSubmit={handleSubmit}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-400 via-gray-700 to-gray-400 rounded-xl opacity-20 blur-md"></div>
        <div className="relative z-10">
          {formFields.map((field, index) => (
            <LabelInputContainer
              key={field.id}
              className={index !== formFields.length - 1 ? "mb-6" : "mb-8"}
            >
              <Label htmlFor={field.id} className="text-xl text-neutral-300">
                {field.label}
              </Label>
              {field.id === "message" ? (
                <textarea
                  className="bg-neutral-800 text-white border-none outline-none py-3 px-4 resize-none rounded-md transition-all focus:ring-2 focus:ring-indigo-500 placeholder:text-neutral-500"
                  id={field.id}
                  placeholder={field.placeholder}
                />
              ) : (
                <Input
                  className="bg-neutral-800 text-white border-none py-3 px-4 rounded-md transition-all focus:ring-2 focus:ring-cyan-500 placeholder:text-neutral-500"
                  id={field.id}
                  placeholder={field.placeholder}
                  type={field.type}
                />
              )}
            </LabelInputContainer>
          ))}

          <button
            className="bg-gradient-to-r from-gray-600 to-gray-900 w-full text-white rounded-md h-12 font-medium transition-all transform hover:scale-105 shadow-lg"
            type="submit"
          >
            Send Note &rarr;
          </button>
        </div>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        {/* <div className="flex justify-center gap-4">
          <SocialLoginButton icon={<IconBrandGithub />} />
          <SocialLoginButton icon={<IconBrandGoogle />} />
          <SocialLoginButton icon={<IconBrandOnlyfans />} />
        </div> */}
      </form>
      <p className="text-base text-center text-neutral-400 mt-4">
        We&apos;ll respond within 24 hours. Stay connected!
      </p>
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
