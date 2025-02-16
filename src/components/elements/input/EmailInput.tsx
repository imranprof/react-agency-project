"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

type Props = {
  className?: string;
};

const EmailInput = ({ className }: Props) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log('Email submitted:', email)
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-[38px]">
      <div
        className={cn(
          " bg-[#202020] rounded-[20px] flex gap-[10px] items-center py-[18px] px-[25px] xl:p-[25px] ",
          className
        )}
      >
        <span>
          <FaRegEnvelope className="text-white-2" />
        </span>
        <input
          type="email"
          className="text-[14px] text-white-2  focus:outline-none bg-[#202020] w-full border-0"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">
          <FaPaperPlane className="text-white email-input-icon" />
        </button>
      </div>
    </form>
  );
};

export default EmailInput;
