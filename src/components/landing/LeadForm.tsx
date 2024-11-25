import React from "react";
import { useForm, Resolver } from "react-hook-form";

type FormValues = {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

type FormErrors = {
  [K in keyof FormValues]?: {
    type: string;
    message: string;
  };
};

const resolver: Resolver<FormValues> = async (values) => {
  const errors: FormErrors = {};
  if (!values.fullName) {
    errors.fullName = {
      type: "required",
      message: "Full Name is required.",
    };
  }
  if (!values.email) {
    errors.email = {
      type: "required",
      message: "Email Address is required.",
    };
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = {
      type: "pattern",
      message: "Please enter a valid email address.",
    };
  }
  if (values.phoneNumber && !/^\d{10}$/.test(values.phoneNumber)) {
    errors.phoneNumber = {
      type: "pattern",
      message: "Phone Number must be 10 digits.",
    };
  }
  return {
    values: Object.keys(errors).length === 0 ? values : {},
    errors,
  };
};

const LeadForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const fields = [
    {
      name: "fullName",
      type: "text",
      label: "Full Name",
      placeholder: "Your Name",
    },
    {
      name: "email",
      type: "email",
      label: "Email Address",
      placeholder: "Your Email",
    },
    {
      name: "phoneNumber",
      type: "text",
      label: "Phone Number",
      placeholder: "Your Phone Number",
    },
    {
      name: "message",
      type: "textarea",
      label: "How can we help you?",
      placeholder: "Message",
    },
  ];

  return (
    <div className="z-10 flex items-center justify-center h-full relative overflow-hidden rounded-lg">
      <div className="absolute inset-0 hero-bg"></div>

      <div className="mirror-bg h-full w-full py-28 px-40">
        <h3 className="tertiary-heading">Let's connect</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field) => (
            <div key={field.name} className="input-box relative">
              {field.type === "textarea" ? (
                <textarea
                  {...register(field.name as keyof FormValues)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder={field.placeholder}
                ></textarea>
              ) : (
                <input
                  {...register(field.name as keyof FormValues)}
                  type={field.type}
                  className="input-form"
                />
              )}
              <label className="label-form">{field.label}</label>
              {errors[field.name as keyof FormValues] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[field.name as keyof FormValues]?.message}
                </p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Request a Call
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
