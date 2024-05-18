import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import CredentialsProvider from "next-auth/providers/credentials";
import { createData } from "./core/http-service/http-service";
import { VerifyUserModel } from "./app/[lng]/(auth)/verify/types/verify-user.type";
import { User, UserSession, UserToken } from "./types/user.interface";
import { API_URL } from "./configs/global";
import { jwtDecode } from 'jwt-decode';
import { JWT } from 'next-auth/jwt';

declare module "next-auth" {
    interface User {
        accessToken: string;
    }

    interface Session {
        user: UserSession
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        user: UserToken;
    }
}

export const { signIn, signOut, auth, handlers: { GET, POST } } = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "username", type: "text" },
                code: { label: "code", type: "text" }
            },

            async authorize(credentials) {
                try {
                    const user = await createData<VerifyUserModel, User>(`${API_URL}/verify`, {
                        username: credentials.username as string,
                        code: credentials.code as string
                    });

                    return {
                        accessToken: user.token,
                    };

                } catch (error: unknown) {
                    throw new Error("Invalid username or code");
                }
            }

        })
    ],

    callbacks: {
        
        async jwt({ token, user }) {
            if (user) {
                token.user = jwtDecode<UserToken>(user.accessToken);
                token.user.accessToken = user.accessToken;
                console.log(token.user);
            }
            return token;
        },

        async session({ session, token }) {
            Object.assign(session.user, token.user ?? {});
            return session;
        }
    }
})