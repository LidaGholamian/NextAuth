import { JWTPayload, SignJWT } from "jose";
import { UserSession } from "../_types/auth.types";

const JWT_SECRET='RLBy2xVOo5zN4WNykVNZKAL/PHDYwW/EgSCBwxd818Y=';
const encodedKey = new TextEncoder().encode(JWT_SECRET);

export async function encryptSession(session: UserSession): Promise<string>{
    return new SignJWT(session as unknown as JWTPayload)
        .setProtectedHeader({alg:'HS256'})
        .sign(encodedKey)
}
