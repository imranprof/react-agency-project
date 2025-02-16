"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { formSchema } from "@/lib/schema";
import { Input } from "@/components/ui/input";
import CustomButton from "@/components/elements/button/CustomButton";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import hasFadeAnim from "@/lib/animation/hasFadeAnim";

const CommentForm = () => {
  const form = useForm<z.infer<typeof formSchema> & { phone?: string }>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values)
  }

  const containerRef = useRef<HTMLDivElement>(null!);

  useGSAP(
    () => {
      hasFadeAnim();
    },
    { scope: containerRef }
  );

  return (
    <div className=" section-spacing-top" ref={containerRef}>
      <h2 className="has_fade_anim inner-section-title font-normal">
        Write a comment
      </h2>
      <div className=" mt-[23px] lg:mt-[43px] xl:mt-[53px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className=" grid gap-y-[50px] gap-x-[30px] sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Name*"
                        {...field}
                        className="blog-form-input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email*"
                        {...field}
                        className="blog-form-input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Phone"
                        {...field}
                        className="blog-form-input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Subject*"
                        {...field}
                        className="blog-form-input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="sm:col-span-2">
                    <FormControl>
                      <Input
                        placeholder="Message*"
                        {...field}
                        className="blog-form-input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <CustomButton
              className="bg-black text-white !mt-[60px]"
              btnText="Submit Comment"
              type="submit"
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CommentForm;
