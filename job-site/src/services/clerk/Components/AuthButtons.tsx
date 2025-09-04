import { ComponentProps } from "react";
import {
  SignUpButton as ClerkSignUpButton,
  SignInButton as ClerkSignInButton,
  SignOutButton as ClerkSignOutButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const SignUpButton = ({
  children = <Button>Sign Up</Button>,
  ...props
}: ComponentProps<typeof ClerkSignUpButton>) => {
  return <ClerkSignUpButton {...props}>{children}</ClerkSignUpButton>;
};

const SignInButton = ({
  children = <Button>Sign In</Button>,
  ...props
}: ComponentProps<typeof ClerkSignInButton>) => {
  return <ClerkSignInButton {...props}>{children}</ClerkSignInButton>;
};

const SignOutButton = ({
  children = <Button>Sign Out</Button>,
  ...props
}: ComponentProps<typeof ClerkSignOutButton>) => {
  return <ClerkSignOutButton {...props}>{children}</ClerkSignOutButton>;
};

export { SignUpButton, SignInButton, SignOutButton };
