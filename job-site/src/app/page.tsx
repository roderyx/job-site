import React, { Suspense } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebarClient } from "./_AppSidebarClient";
import { SignedOut } from "@/services/clerk/Components/SignInStatus";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

const HomePage = () => {
  return (
    <div>
      <SidebarProvider className="overflow-y-hidden">
        <AppSidebarClient>
          <Sidebar collapsible="icon" className="overflow-hidden">
            <SidebarHeader className="flex-row">
              <SidebarTrigger />
              <span className="text-xl text-nowrap">TEST JOBS</span>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarMenu>
                  <SignedOut>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/sign-in">
                          <LinkIcon />
                          <span>Log In</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SignedOut>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton></SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </Sidebar>
          <main className="flex-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            a sequi adipisci deleniti facere, hic quas possimus voluptatem
            dolore, voluptatibus nulla, placeat aut in ex aliquam similique
            minima beatae! Dolorem!
          </main>
        </AppSidebarClient>
      </SidebarProvider>
    </div>
  );
};

export default HomePage;
