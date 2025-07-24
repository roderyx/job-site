import { auth } from "@clerk/nextjs/server";
import React, { Suspense } from "react";
const SidebarUserButton = () => {
  return (
    <Suspense>
      <SidebarUserSuspense />
    </Suspense>
  );
};

const SidebarUserSuspense = async () => {
  const { userId } = await auth();

  return (
    <SidebarUserButtonClient user={{ email: "email@mail.com", name: "hola" }} />
  );
};
export default SidebarUserButton;
