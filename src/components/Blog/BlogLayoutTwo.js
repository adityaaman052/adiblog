import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLayoutTwo = ({ blog }) => {
  if (!blog) return null; // Prevents crashes if blog is undefined

  return (
    <div className="group grid grid-cols-12 gap-4 items-center text-dark dark:text-light">
      <Link
        href={blog?.url || "#"}
        className="col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden"
      >
        {/* ✅ Ensure blog.image exists before rendering Image */}
        {blog?.image?.src && (
          <Image
            src={blog.image.src}
            placeholder="blur"
            blurDataURL={blog.image.blurDataURL || ""}
            alt={blog.title || "Blog Image"}
            width={blog.image.width || 800} // Default width
            height={blog.image.height || 600} // Default height
            className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
            sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
          />
        )}
      </Link>

      <div className="col-span-12 lg:col-span-8 w-full">
        <span className="inline-block w-full uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
          {blog?.tags?.[0] || "Uncategorized"}
        </span>
        <Link href={blog?.url || "#"} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-base sm:text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 dark:from-accentDark/50 to-accent/50 dark:to-accentDark/50 bg-[length:0px_6px]
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
            >
              {blog?.title || "Untitled Blog"}
            </span>
          </h2>
        </Link>

        <span className="inline-block w-full capitalize text-gray dark:text-light/50 font-semibold text-xs sm:text-base">
          {blog?.publishedAt
            ? format(new Date(blog.publishedAt), "MMMM dd, yyyy")
            : "Unknown Date"}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
