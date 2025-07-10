"use client";
import React, { Suspense } from "react";
import { FaCode } from "react-icons/fa";

const FallbackIcon = ({ className }: { className?: string }) => (
  <span className={className ?? "text-xl"}>
    <FaCode />
  </span>
);

interface LazyIconProps extends React.HTMLAttributes<HTMLElement> {
  iconName: string;
  className?: string;
}

const LazyIcon = ({ iconName, className, ...rest }: LazyIconProps) => {
  if (!iconName) return <FallbackIcon className={className} />;

  const match = iconName.match(/^([A-Z][a-z]+)/);
  const prefix = match ? match[1] : "";

  const importPathMap: Record<string, () => Promise<any>> = {
    Fa: () => import("react-icons/fa"),
    Si: () => import("react-icons/si"),
    Ai: () => import("react-icons/ai"),
    Bs: () => import("react-icons/bs"),
    Md: () => import("react-icons/md"),
    Io: () => import("react-icons/io"),
    Tb: () => import("react-icons/tb"),
    Hi: () => import("react-icons/hi"),
    Lu: () => import("lucide-react"),
  };

  const IconComponent = React.lazy(async () => {
    try {
      const iconPack = await importPathMap[prefix]?.();

      // Special handling for lucide-react (strip Lu)
      const realIconName = prefix === "Lu" ? iconName.replace(/^Lu/, "") : iconName;

      const Icon = iconPack?.[realIconName];
      if (!Icon) throw new Error(`Icon "${realIconName}" not found`);

      return {
        default: (props: any) => <Icon className={className} {...rest} {...props} />,
      };
    } catch (err) {
      console.error("Icon load error:", err);
      return {
        default: () => <FallbackIcon className={className} />,
      };
    }
  });

  return (
    <Suspense fallback={<FallbackIcon className={className} />}>
      <IconComponent />
    </Suspense>
  );
};

export default LazyIcon;