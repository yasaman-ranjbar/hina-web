import { NextAuthConfig } from 'next-auth';

export const authConfig = {
    
    pages: {
        signIn: '/fa/signin',
    },
    callbacks: {
        
    },
    providers: []
} satisfies NextAuthConfig