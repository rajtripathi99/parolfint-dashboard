import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Plus, Package, TrendingUp, CheckCircle, FileText, Filter } from "lucide-react";
import StatsCard from "@/components/StatsCard";
import TruckStats from "@/components/TruckStats";
import Image from "next/image";

export default function Page() {
  return (
    <div className="p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-5 md:space-y-6">
      {/* Header with tabs and actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-4 bg-muted p-1.5 sm:p-2 rounded-md w-full sm:w-auto">
          <Button className="font-semibold bg-background text-foreground hover:bg-background text-xs sm:text-sm flex-1 sm:flex-initial">Overviews</Button>
          <Button variant="ghost" className="text-muted-foreground text-xs sm:text-sm flex-1 sm:flex-initial">Tracking</Button>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
          {/* Drop Down Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-background text-foreground hover:bg-background border-2 border-border rounded-sm text-xs sm:text-sm flex-1 sm:flex-initial">
                Week <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Days</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Week</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Month</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Year</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* New Shipment Button */}
          <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 border-2 border-transparent rounded-sm text-xs sm:text-sm flex-1 sm:flex-initial">
            <Plus className="h-3 w-3 sm:h-4 sm:w-4" /> <span className="hidden xs:inline">New Shipment</span><span className="xs:hidden">New Shipment</span>
          </Button>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        <StatsCard
          title="Total Shipments"
          value="200"
          comparison="Vs Last Week"
          percentageChange="+34%"
          isIncrease={true}
          bgColor="bg-green-200 dark:bg-green-500/20"
          icon={FileText}
        />
        <StatsCard
          title="In Transit"
          value="120"
          comparison="Vs Last Week"
          percentageChange="+20%"
          isIncrease={true}
          bgColor="bg-yellow-200 dark:bg-yellow-500/20"
          icon={Package}
        />
        <StatsCard
          title="Revenue"
          value="$45K"
          comparison="Vs Last Week"
          percentageChange="+13%"
          isIncrease={true}
          bgColor="bg-purple-200 dark:bg-purple-500/20"
          icon={TrendingUp}
        />
        <StatsCard
          title="Delivered"
          value="80"
          comparison="Vs Last Week"
          percentageChange="+34%"
          isIncrease={true}
          bgColor="bg-blue-200 dark:bg-blue-500/20"
          icon={CheckCircle}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 md:gap-6">
        {/* Left Side - Shipment List */}
        <div className="lg:col-span-3 space-y-3 sm:space-y-4">
          <div className="flex items-center justify-between">
            <Button className="bg-background text-foreground hover:bg-background border-2 border-border rounded-sm h-7 w-7 sm:h-8 sm:w-8 p-0">
              <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button className="bg-background text-foreground hover:bg-background border-2 border-border rounded-sm text-xs sm:text-sm">
              <Filter className="h-3 w-3 sm:h-4 sm:w-4" /> Filter
            </Button>
          </div>
          <div className="space-y-2 sm:space-y-3">
            {/* ShipmentCard components */}
            <div className="border border-border rounded-lg p-3 sm:p-4 bg-card">
              <TruckStats />
            </div>
            <div className="border border-border rounded-lg p-3 sm:p-4 bg-card">
              <TruckStats />
            </div>
            <div className="border border-border rounded-lg p-3 sm:p-4 bg-card">
              <TruckStats />
            </div>
          </div>
        </div>

        {/* Right Side - Map View */}
        <div className="lg:col-span-9 lg:row-span-2">
          <div className="border border-border rounded-lg p-4 sm:p-5 md:p-6 h-full bg-card">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-2">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">On the way</h2>
              <span className="text-xs sm:text-sm text-muted-foreground">Jul 9, 2025</span>
            </div>
            {/* Map placeholder */}
            <div className="bg-muted rounded-lg h-48 sm:h-64 md:h-80 mb-3 sm:mb-4 relative overflow-hidden">
              <Image
                src="/map.svg"
                alt="map"
                fill
                className="object-cover"
              />
            </div>
            {/* Map details */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
              <div>
                <span className="text-xs text-muted-foreground">Category</span>
                <p className="font-semibold text-base sm:text-lg text-foreground">Electronic</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground">Distance</span>
                <p className="font-semibold text-base sm:text-lg text-foreground">69 Kms</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground">Estimation</span>
                <p className="font-semibold text-base sm:text-lg text-foreground">1d 21 hrs</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground">Weight</span>
                <p className="font-semibold text-base sm:text-lg text-foreground">100 Tons</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground">Fees</span>
                <p className="font-semibold text-base sm:text-lg text-foreground">$ 100K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 md:gap-6">
        {/* Left - Line Chart */}
        <div className="lg:col-span-7 border border-border rounded-lg p-4 sm:p-5 md:p-6 bg-card">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-3">
            <div className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
              <button className="font-semibold border-b-2 border-blue-600 dark:border-blue-500 pb-2 text-foreground text-xs sm:text-sm whitespace-nowrap">Shipment</button>
              <button className="text-muted-foreground pb-2 text-xs sm:text-sm whitespace-nowrap">Orders</button>
              <button className="text-muted-foreground pb-2 text-xs sm:text-sm whitespace-nowrap">Delivery</button>
              <button className="text-muted-foreground pb-2 text-xs sm:text-sm whitespace-nowrap">Waste</button>
              <button className="text-muted-foreground pb-2 text-xs sm:text-sm whitespace-nowrap">Delivered</button>
            </div>
            <select className="border border-border bg-background text-foreground rounded-md px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm">
              <option>Monthly</option>
            </select>
          </div>
          <div className="flex gap-4 sm:gap-6 md:gap-8 mb-3 sm:mb-4 overflow-x-auto">
            <div>
              <span className="text-2xl sm:text-3xl font-bold text-foreground">24k</span>
            </div>
            <div className="text-muted-foreground text-sm sm:text-base">
              <span>169</span>
            </div>
            <div className="text-muted-foreground text-sm sm:text-base">
              <span>420</span>
            </div>
            <div className="text-muted-foreground text-sm sm:text-base">
              <span>35</span>
            </div>
            <div className="text-muted-foreground text-sm sm:text-base">
              <span>14</span>
            </div>
          </div>
          {/* Chart placeholder */}
          <div className="h-48 sm:h-56 md:h-64 bg-muted rounded">
            {/* Line chart component */}
          </div>
        </div>
        {/* Right - Donut Chart */}
        <div className="lg:col-span-5 border border-border rounded-lg p-4 sm:p-5 md:p-6 bg-card">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-3">
            <h3 className="font-semibold text-foreground text-sm sm:text-base">Monthly Profits</h3>
            <select className="border border-border bg-background text-foreground rounded-md px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm">
              <option>Monthly</option>
            </select>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Total Profit of 25%</p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Donut chart */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-muted rounded-full flex-shrink-0">
              {/* Donut chart component */}
            </div>
            {/* Legend */}
            <div className="space-y-3 sm:space-y-4 w-full sm:w-auto">
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Offline Sales</p>
                <p className="font-semibold text-foreground text-sm sm:text-base">30%</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Affiliate Sales</p>
                <p className="font-semibold text-foreground text-sm sm:text-base">45%</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Store Sales</p>
                <p className="font-semibold text-foreground text-sm sm:text-base">20%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}