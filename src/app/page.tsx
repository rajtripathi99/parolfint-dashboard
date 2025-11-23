import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Plus, Package, TrendingUp, CheckCircle, FileText, Filter } from "lucide-react";
import StatsCard from "@/components/StatsCard";
import TruckStats from "@/components/TruckStats";
import Image from "next/image";

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      {/* Header with tabs and actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 bg-muted p-2 rounded-md">
          <Button className="font-semibold bg-background text-foreground hover:bg-background">Overviews</Button>
          <Button variant="ghost" className="text-muted-foreground">Tracking</Button>
        </div>
        <div className="flex items-center gap-4">
          {/* Drop Down Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-background text-foreground hover:bg-background border-2 border-border rounded-sm">
                Week <ChevronDown />
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
          <Button className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 border-2 border-transparent rounded-sm">
            <Plus /> New Shipment
          </Button>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-4 gap-4">
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
      <div className="grid grid-cols-12 gap-6">
        {/* Left Side - Shipment List */}
        <div className="col-span-3 space-y-4">
          <div className="flex items-center justify-between">
            <Button className="bg-background text-foreground hover:bg-background border-2 border-border rounded-sm h-8 w-8">
              <Plus />
            </Button>
            <Button className="bg-background text-foreground hover:bg-background border-2 border-border rounded-sm ">
              <Filter /> Filter
            </Button>
          </div>
          <div className="space-y-3">
            {/* ShipmentCard components */}
            <div className="border border-border rounded-lg p-4 bg-card">
              <TruckStats />
            </div>
            <div className="border border-border rounded-lg p-4 bg-card">
              {/* Shipment card content */}
              <TruckStats />
            </div>
            <div className="border border-border rounded-lg p-4 bg-card">
              {/* Shipment card content */}
              <TruckStats />
            </div>
          </div>
        </div>

        {/* Right Side - Map View */}
        <div className="col-span-9 row-span-2">
          <div className="border border-border rounded-lg p-6 h-full bg-card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">On the way</h2>
              <span className="text-muted-foreground">Jul 9, 2025</span>
            </div>
            {/* Map placeholder */}
            <div className="bg-muted rounded-lg h-80 mb-4 relative overflow-hidden">
              {/* Map component goes here */}
              <Image
                src="/map.svg"
                alt="map"
                fill
                className="object-cover"
              />
            </div>
            {/* Map details */}
            <div className="grid grid-cols-5 gap-4">
              <div>
                <span className="text-xs text-muted-foreground">Category</span>
                <p className="font-semibold text-lg text-foreground">Electronic</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground">Distance</span>
                <p className="font-semibold text-lg text-foreground">69 Kms</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground">Estimation</span>
                <p className="font-semibold text-lg text-foreground">1d 21 hrs</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground">Weight</span>
                <p className="font-semibold text-lg text-foreground">100 Tons</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground">Fees</span>
                <p className="font-semibold text-lg text-foreground">$ 100K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Charts Section */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left - Line Chart */}
        <div className="col-span-7 border border-border rounded-lg p-6 bg-card">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-6">
              <button className="font-semibold border-b-2 border-blue-600 dark:border-blue-500 pb-2 text-foreground">Shipment</button>
              <button className="text-muted-foreground pb-2">Orders</button>
              <button className="text-muted-foreground pb-2">Delivery</button>
              <button className="text-muted-foreground pb-2">Waste</button>
              <button className="text-muted-foreground pb-2">Delivered</button>
            </div>
            <select className="border border-border bg-background text-foreground rounded-md px-3 py-2">
              <option>Monthly</option>
            </select>
          </div>
          <div className="flex gap-8 mb-4">
            <div>
              <span className="text-3xl font-bold text-foreground">24k</span>
            </div>
            <div className="text-muted-foreground">
              <span>169</span>
            </div>
            <div className="text-muted-foreground">
              <span>420</span>
            </div>
            <div className="text-muted-foreground">
              <span>35</span>
            </div>
            <div className="text-muted-foreground">
              <span>14</span>
            </div>
          </div>
          {/* Chart placeholder */}
          <div className="h-64 bg-muted rounded">
            {/* Line chart component */}
          </div>
        </div>
        {/* Right - Donut Chart */}
        <div className="col-span-5 border border-border rounded-lg p-6 bg-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-foreground">Monthly Profits</h3>
            <select className="border border-border bg-background text-foreground rounded-md px-3 py-2">
              <option>Monthly</option>
            </select>
          </div>
          <p className="text-sm text-muted-foreground mb-6">Total Profit of 25%</p>
          <div className="flex items-center justify-between">
            {/* Donut chart */}
            <div className="w-48 h-48 bg-muted rounded-full">
              {/* Donut chart component */}
            </div>
            {/* Legend */}
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Offline Sales</p>
                <p className="font-semibold text-foreground">30%</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Affiliate Sales</p>
                <p className="font-semibold text-foreground">45%</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Store Sales</p>
                <p className="font-semibold text-foreground">20%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}