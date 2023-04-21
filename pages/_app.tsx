import "../styles/globals.css";

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider , Session} from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { AppProps } from 'next/app'
import { Database } from "@/lib/database.types";

function MyApp({ Component, pageProps }: AppProps<{
  initialSession: Session,
}>) {
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}
export default MyApp
