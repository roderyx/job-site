
import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "../components/ui/sidebar.tsx";
import { AppSidebarClient } from "./_AppSidebarClient.ts";

const HomePage = () => {
return(
  <div>
    <h1>Home Page</h1>
    <SidebarProvider className="overflow-y-hidden">
      <AppSidebarClient>
      <Sidebar collapsible="icon" className="overflow-hidden">
        <SidebarHeader className="flex-row">
          <SidebarTrigger/>
          <span className="text-xl text-nowrap">TEST JOBS</span>
        </SidebarHeader>
        <SidebarContent>content</SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>hola</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate a sequi adipisci deleniti facere, hic quas possimus voluptatem dolore, voluptatibus nulla, placeat aut in ex aliquam similique minima beatae! Dolorem!
      </main>
      </AppSidebarClient>
    </SidebarProvider>
  </div>

)
};

export default HomePage
