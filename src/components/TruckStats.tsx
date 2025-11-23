import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

export default function TruckStats() {
    return (
        <div className="flex items-center justify-between gap-2">
            {/* Left */}
            <div className="flex flex-col gap-1.5 sm:gap-2 flex-1 min-w-0">
                <div>
                    <p className="text-[10px] text-muted-foreground">Shipment Number</p>
                    <p className="font-semibold text-sm sm:text-[16px] text-foreground truncate">#905236974178</p>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-muted-foreground flex-wrap">
                    <div className="flex items-center gap-1 sm:gap-1.5">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                        <p className="text-[10px] sm:text-xs text-blue-500 truncate">619 Ramsy place</p>
                    </div>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <div className="flex items-center gap-1 sm:gap-1.5">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                        <p className="text-[10px] sm:text-xs text-green-500 truncate">Railing Street</p>
                    </div>
                </div>
            </div>
            {/* Right */}
            <div className="flex-shrink-0">
                <Image 
                    src="/truck.svg" 
                    alt="truck" 
                    width={80} 
                    height={80}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-[100px] md:h-[100px]"
                />
            </div>
        </div>
    );
}