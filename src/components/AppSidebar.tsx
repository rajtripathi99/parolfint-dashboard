"use client"

import { ArrowRight, ChevronsUpDown, HelpCircle, LayoutDashboard, LogOut, MessageCircle, Receipt, Settings, ShoppingCart, TruckIcon, User2, UsersIcon } from "lucide-react";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, useSidebar } from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const items = [
    {
        title: "Dashboard",
        url: "/",
        icon: LayoutDashboard,

    }, {
        title: "Shipment",
        url: "#",
        icon: TruckIcon,
    }, {
        title: "Orders",
        url: "#",
        icon: ShoppingCart,
    }, {
        title: "Messages",
        url: "#",
        icon: MessageCircle,
    }, {
        title: "Customers",
        url: "#",
        icon: UsersIcon,
    }, {
        title: "Help & Support",
        url: "#",
        icon: HelpCircle,
    }, {
        title: "Settings",
        url: "#",
        icon: Settings,
    }
];

export default function AppSidebar() {
    const { state } = useSidebar();
    return (
        <Sidebar collapsible="icon">
            {/* Header */}
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="h-12" asChild>
                            <Link href="/" className="flex items-center gap-2">
                                <Image src="/parolfint-logo.svg" alt="logo" width={30} height={30} />
                                <div className="flex flex-col overflow-hidden">
                                    <span className="font-semibold truncate">ParolFint</span>
                                    <span className="text-xs text-muted-foreground truncate">Admin Panel</span>
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            {/* Content */}
            <SidebarGroup>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild >
                                <SidebarMenuButton className="h-auto p-3 border-2">
                                    <div className="flex items-center gap-3 w-full">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src="/logo.svg" alt="Aaron James" />
                                            <AvatarFallback>AJ</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col flex-1 text-left">
                                            <span className="font-semibold text-sm">Aaron James</span>
                                            <span className="text-xs text-muted-foreground">Paid plan</span>
                                        </div>
                                        <ChevronsUpDown className="h-4 w-4 ml-auto" />
                                    </div>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem><User2 /> Profile</DropdownMenuItem>
                                <DropdownMenuItem><Receipt /> Billing</DropdownMenuItem>
                                <DropdownMenuItem><Settings /> Settings</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-red-600"><LogOut className="text-red-600"/> Log out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map(item => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                    {
                                        item.title === "Dashboard" && (
                                            <SidebarMenuBadge className="bg-red-600 rounded-full text-xs text-white">9</SidebarMenuBadge>
                                        )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            {/* Footer */}
            <SidebarFooter>
                {state === "expanded" && (
                    <div className="border-2 rounded-md overflow-hidden mx-2 mb-2">
                        <div className="flex items-center gap-4 p-4">
                            <div className="flex-shrink-0">
                                <img src="/up-trend logo.svg" alt="logo" className="w-8 h-8" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-xs">Upgrade & Unlock</span>
                                <span className="font-semibold text-xs">all features</span>
                            </div>
                        </div>
                        <div className="px-4 pb-4">
                            <Button variant="ghost" className="w-full justify-between border-2" asChild>
                                <Link href="/">
                                    <span className="text-xs">Manage your plans</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                )}
            </SidebarFooter>
        </Sidebar>
    );
}