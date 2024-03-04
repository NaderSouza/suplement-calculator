import React from "react";
import { AlertTriangle, CheckCircle } from "lucide-react";

export const icons = {
  warning: <AlertTriangle className="text-yellow-400 size-12 pb-2 m-auto" />,
  success: <CheckCircle className="text-emerald-500 size-12 pb-2 m-auto" />,
};

interface IconProps {
  name: keyof typeof icons;
}

const Icon: React.FC<IconProps> = ({ name }) => {
  const selectedIcon = icons[name] || null;

  return <div className="inline-block">{selectedIcon}</div>;
};

export default Icon;