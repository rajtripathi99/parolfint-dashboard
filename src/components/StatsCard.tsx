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
  return (
    <div className={`${bgColor} border border-border rounded-lg p-4 relative`}>
      {/* Icon in top right */}
      {Icon && (
        <div className="absolute top-4 right-4">
          <Icon className="h-5 w-5 text-muted-foreground/80 dark:text-muted-foreground" />
        </div>
      )}

      {/* Content */}
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground/90 dark:text-muted-foreground">{title}</p>
        <h3 className="text-3xl font-bold text-foreground">{value}</h3>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground/90 dark:text-muted-foreground">{comparison}</span>
          <div className="flex items-center gap-1">
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