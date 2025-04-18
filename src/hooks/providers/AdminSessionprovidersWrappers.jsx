// // app/providers.jsx
// 'use client';

// import { SessionProvider } from 'next-auth/react';
// // import { AuthProvider } from '../admin_authContext';

// export default function AdminSessionprovidersWrappers({ children,session }) {
//   return (
//     <SessionProvider
//     session={pageProps.session}
//   basePath="/api/admin/auth">
//     {children}
//     </SessionProvider>
//   );
// } 

// app/providers.jsx
'use client';

import { SessionProvider } from 'next-auth/react';

export default function AdminSessionprovidersWrappers({ children, session }) {
  return (
    <SessionProvider session={session} basePath="/api/admin/auth">
      {children}
    </SessionProvider>
  );
}
