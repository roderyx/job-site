"use client";
import { SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronsUpDown } from "lucide-react";
import React from "react";

type UserType = {
  name: string;
  imageUrl?: string;
  email: string;
};

const SidebarUserButtonClient = (user: UserType) => {
  const isMobile = useIsMobile();

  return (
    <SidebarMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            size={"lg"}
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground:"
          >
            <UserInfo {...user} />
            <ChevronsUpDown className="ml-auto group-data-[state=collapsed]:hidden" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent>Hi</DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenu>
  );
};
export default SidebarUserButtonClient;

const UserInfo = ({ name, imageUrl, email }: UserType) => {
  const nameInitials = name
    .split(" ")
    .slice(0, 2)
    .map((str) => str[0])
    .join(" ");
  return (
    <Avatar className="rounded-lg size-8">
      <AvatarImage src={imageUrl} alt={name} />
      <AvatarFallback className="uppercase bg-primary text-primary-foreground">
        {nameInitials}
      </AvatarFallback>
      <div className="flex flex-col flex-1 min-w-0 leading-tight group-data-[state-collapsed]:hidden">
        <span className="truncate text-sm font-semibold">{name}</span>
        <span className="truncate text-xs">{email}</span>
      </div>
    </Avatar>
  );
};
