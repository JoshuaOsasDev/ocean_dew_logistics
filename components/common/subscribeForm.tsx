"use client";

import * as Yup from "yup";

export const subscribeSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "Name is too short")
    .required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

import { Formik, Form, Field, ErrorMessage } from "formik";

export default function SubscribeForm({ style }: { style: string }) {
  return (
    <div className="w-full max-w-[396px]   py-4">
      <Formik
        initialValues={{ fullName: "", email: "" }}
        validationSchema={subscribeSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-8">
            {/* Full Name */}
            <div>
              <Field
                name="fullName"
                placeholder="Full Name"
                className="w-full rounded-[8px] bg-white px-4 py-3 text-[12px] font-normal text-[#01011B] outline-none placeholder:text-gray-400"
                style={{
                  fontFamily: "Inter",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              />
              <ErrorMessage name="fullName">
                {(msg) => (
                  <p className="mt-1 flex items-start gap-1 text-[11px] italic text-[#6B7280]">
                    <span className="text-[#FF6B35]">•</span>
                    {msg}
                  </p>
                )}
              </ErrorMessage>
            </div>

            {/* Email */}
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="w-full rounded-[8px] bg-white px-4 py-3 text-[12px] font-normal text-[#01011B] outline-none placeholder:text-gray-400"
                style={{
                  fontFamily: "Inter",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              />
              <ErrorMessage name="email">
                {(msg) => (
                  <p className="mt-1 flex items-start gap-1 text-[11px] italic text-[#6B7280]">
                    <span className="text-[#FF6B35]">•</span>
                    {msg}
                  </p>
                )}
              </ErrorMessage>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-fit rounded-[8px]  px-6 py-3 text-[12px] font-medium text-white transition hover:opacity-90 disabled:opacity-60 ${style}`}
              style={{
                fontFamily: "Inter",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Subscribe
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
