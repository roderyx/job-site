"use client"
import React, { ReactNode, Suspense } from 'react'
import { ClerkProvider as OGClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes'
import useIsDarkMode from "../../../hooks/useIsDarkMode.ts";


const ClerkProvider = ({children}: {children:ReactNode}) => {
  const isDarkMode = useIsDarkMode();
  return(
    <Suspense>
      <OGClerkProvider appearance={isDarkMode ? {baseTheme: [dark]}: undefined}>
        {children}
      </OGClerkProvider>
    </Suspense>
  )
};
export default ClerkProvider