import React from "react";
import { motion } from "framer-motion";

const transition = { duration: 3, ease: "easeInOut" };

export default function Logo({ color = "white" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 512 512"
      widths="40px"
      height="40px"
    >
      <motion.path
        d="M500.65 154.4a5.12 5.12 0 00-4.38-1.73c-61.66 1.56-111.92 12.1-151.09 31q-22.48-58.88-83.12-122.86a6.14 6.14 0 00-8.63 0q-61.32 64.51-83.64 124.1c-39.57-19.73-90.91-30.64-154.06-32.24a5.27 5.27 0 00-4.38 1.73 6 6 0 00-1.74 4.38c2.74 107.1 31.75 180.89 86.24 219.32 32.69 23.06 68.64 29.23 97.83 29.23a208.28 208.28 0 0056.62-7.71l1.49.84V447a6 6 0 1011.92 0v-46.54l.33-.18a210.11 210.11 0 0054.3 7.05c29.18 0 65.13-6.17 97.81-29.23 54.51-38.43 83.52-112.22 86.24-219.32a6 6 0 00-1.74-4.38zm-398 213.89c-50.16-35.41-77.36-103.87-80.93-203.52 59.3 2.12 107.39 12.72 144.21 31.43-8.8 27.89-11.09 54.84-6.62 80.69a150.8 150.8 0 006.07 23.1l-45.14-45.15a6 6 0 10-8.45 8.45l68.09 68.08c17.23 28.49 40.47 48.06 56.57 59.34-24.85 5.29-84.25 12.59-133.82-22.42zm161.06 18.21V207a6 6 0 10-11.92 0v179.5c-20.27-12.83-70.13-50.09-80.74-111.76-10.42-60.49 18.75-128.14 86.7-201.12 67.94 73 97.1 140.63 86.7 201.12-10.61 61.67-60.45 98.93-80.74 111.76zm145.67-18.21c-47.81 33.75-104.82 28.12-131.13 23 17.5-12.13 43.88-34.48 61.61-67.61l60.35-60.35a6 6 0 10-8.45-8.45l-39.92 39.93a154.1 154.1 0 004.33-17.88c4.54-26.26 2.09-53.66-7.05-82 36.42-17.82 83.4-28 141.16-30.1-3.56 99.59-30.77 168.04-80.9 203.46z"
        fill="transparent"
        strokeWidth="15"
        stroke={color}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={transition}
      ></motion.path>
    </svg>
  );
}
