import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { UserSession } from "../_types/auth.types";
import { cookies } from "next/headers";

const JWT_SECRET='RLBy2xVOo5zN4WNykVNZKAL/PHDYwW/EgSCBwxd818Y=';
const encodedKey = new TextEncoder().encode(JWT_SECRET);

export async function encryptSession(session: UserSession): Promise<string>{
    return new SignJWT(session as unknown as JWTPayload)
        .setProtectedHeader({alg:'HS256'})
        .sign(encodedKey)
}

export async function decryptSession(session: string){
    const {payload} = await jwtVerify(session, encodedKey, {
        algorithms: ['HS256']
    });
    return payload
}

export async function getSession(): Promise<UserSession | null> {
    const cookieStore = await cookies();
    try{
        const sessionCookie = cookieStore.get('clb-session')?.value;
        if (!sessionCookie){
            return null;
        }
        const session = await decryptSession(sessionCookie) as unknown as UserSession;
        return session;
    }
    catch{
        return null;
    }
}
