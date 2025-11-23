// components/StatsCard.tsx
import { LucideIcon } from "lucide-react";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  comparison: string;
  percentageChange: string;
  isIncrease?: boolean;
  bgColor?: string;
  icon?: LucideIcon;
}

export default function StatsCard({
  title,
  value,
  comparison,
  percentageChange,
  isIncrease = true,
  bgColor = "bg-background",
  icon: Icon,
}: StatsCardProps) {
  // Check if using a custom colored background
  const hasCustomBg = bgColor !== "bg-background" && bgColor !== "bg-card";
  
  return (
    <div className={`${bgColor} border border-border rounded-lg p-3 sm:p-4 relative`}>
      {/* Icon in top right */}
      {Icon && (
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700 dark:text-gray-300" />
        </div>
      )}

      {/* Content */}
      <div className="space-y-0.5 sm:space-y-1">
        <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
          {title}
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          {value}
        </h3>
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <span className="text-xs text-gray-700 dark:text-gray-300">
            {comparison}
          </span>
          <div className="flex items-center gap-0.5 sm:gap-1">
            {isIncrease ? (
              <ArrowUp className="h-3 w-3 text-green-600 dark:text-green-400" />
            ) : (
              <ArrowDown className="h-3 w-3 text-red-600 dark:text-red-400" />
            )}
            <span
              className={`text-xs font-semibold ${
                isIncrease 
                  ? "text-green-600 dark:text-green-400" 
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {percentageChange}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}