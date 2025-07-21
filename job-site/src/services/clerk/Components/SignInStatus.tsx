import { SidebarMenuButton } from "@/components/ui/sidebar";
import { SignedOut } from "@clerk/nextjs";
import { Link, LinkIcon } from "lucide-react";
import { Suspense } from "react";

const SignInStatus = () => {
  return (
    <Suspense>
      <SignedOut>
        <SidebarMenuButton asChild>
          <Link href="/sign-in">
            <LinkIcon />
            <span>Log In</span>
          </Link>
        </SidebarMenuButton>
      </SignedOut>
    </Suspense>
  );
};

export default SignInStatus;
