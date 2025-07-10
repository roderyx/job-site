"use client"

import { ReactNode } from "react";
import { useIsMobile } from "../hooks/use-mobile.ts";

export const  AppSidebarClient = ({children}: {children: ReactNode}) => {
  const isMobile = useIsMobile();
  if (isMobile){
    return null;
  }

  return children;
}