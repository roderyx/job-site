"use client";
import { SidebarMenu } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import React from "react";

type UserType = {
  name: string;
  imageUrl?: string;
  email: string;
};

const SidebarUserButtonClient = ({ user }: UserType) => {
  const isMobile = useIsMobile();

  return (
    <SidebarMenu>
      <DropdownMenu></DropdownMenu>
    </SidebarMenu>
  );
};
export default SidebarUserButtonClient;
