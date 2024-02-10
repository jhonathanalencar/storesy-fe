import NextAuth from 'next-auth';

import { authOptions } from '@shared/modules/configs/auth.config';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
