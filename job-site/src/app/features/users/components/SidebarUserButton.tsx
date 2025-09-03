import { auth } from "@clerk/nextjs/server";
import React, { Suspense } from "react";
import SidebarUserButtonClient from "./_SidebarUserButtonClient";
const SidebarUserButton = () => {
  return (
    <Suspense>
      <SidebarUserSuspense />
    </Suspense>
  );
};

const SidebarUserSuspense = async () => {
  const { userId } = await auth();

  return <SidebarUserButtonClient email="email@mail.com" name="hola js" />;
};
export default SidebarUserButton;
