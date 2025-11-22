"use client"

import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Bell, ChevronDown, Moon, Search, Settings, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Page() {

    const { setTheme } = useTheme()
    return (
        <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-10 border-b">
            {/* Left */}
            <div className="flex items-center gap-2">
                <SidebarTrigger />
                <Link href="/" className="font-semibold">Dashboard</Link>
            </div>
            {/* Right */}
            <div className="flex items-center gap-2">
                <Button variant="outline">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center">
                                ENG
                                <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Language</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>English</DropdownMenuItem>
                            <DropdownMenuItem>Arabic</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline" className="relative h-8 w-8 rounded-md p-4">
                    <Search className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="relative h-8 w-8 rounded-md p-2">
                    <Bell className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="relative h-8 w-8 rounded-md p-2">
                    <Settings className="h-4 w-4" />
                </Button>
            </div>
        </nav>
    );
}