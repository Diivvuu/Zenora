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

  return (
    <div className="z-10 flex items-center justify-center h-full section-padding">
      <div className="mirror-bg py-16 px-16">
        <h2 className=" text-2xl font-semibold text-gray-800 mb-4">
          Welcome to Zenora
        </h2>
        <p className="text-gray-600 mb-6">
          Connect with us to explore how Zenora can elevate your business.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              {...register("fullName")}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              {...register("email")}
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              {...register("phoneNumber")}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Phone Number"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              How can we help you?
            </label>
            <textarea
              {...register("message")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Message"
            ></textarea>
          </div>

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
