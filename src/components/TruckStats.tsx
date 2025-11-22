import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";

export default function Page() {
    return (
        <div className="flex items-center justify-between gap-2">
            {/* Left */}
            <div className="flex flex-col gap-2">
                <div>
                    <p className="text-[10px] text-muted-foreground">Shipment Number</p>
                    <p className="font-semibold text-[16px] text-foreground">#905236974178</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <p className="text-xs text-blue-500">619 Ramsy place</p>
                    <ArrowRight className="w-4 h-4" />
                    <MapPin className="w-4 h-4 text-green-500" />
                    <p className="text-xs text-green-500">Railing Street</p>
                </div>
            </div>
            {/* Right */}
            <div className="">
                <Image 
                    src="/truck.svg" 
                    alt="truck" 
                    width={100} 
                    height={100} 
                />
            </div>
        </div>
    );
}