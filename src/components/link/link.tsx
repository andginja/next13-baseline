import React from "react";
import Link from "next/link";

type LinkProps = {
  href?: string;
  children?: React.ReactNode;
  className?: string;
};

const CustomLink = ({
  href = "#",
  children,
  className,
  ...props
}: LinkProps) => {
  const isExternalLink = href && /^(http:|https:|\/\/)/.test(href);

  if (isExternalLink) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} {...props} passHref>
      {children}
    </Link>
  );
};

export default CustomLink;
