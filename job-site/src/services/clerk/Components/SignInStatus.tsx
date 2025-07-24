import { SidebarMenuButton } from "@/components/ui/sidebar";
import {
  SignedOut as ClerkSignedOut,
  SignedIn as ClerkSignIn,
} from "@clerk/nextjs";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode, Suspense } from "react";

export const SignedOut = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense>
      <ClerkSignedOut>{children}</ClerkSignedOut>
    </Suspense>
  );
};

export const SignedIn = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense>
      <ClerkSignIn>{children}</ClerkSignIn>
    </Suspense>
  );
};

<SidebarMenuButton asChild>
  <Link href="/sign-in">
    <LinkIcon />
    <span>Log In</span>
  </Link>
</SidebarMenuButton>;
