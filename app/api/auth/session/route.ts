import { decryptSession } from "@/app/utils/session";
import { cookies } from "next/headers";

export async function GET() {
    const cookieStore = await cookies();
    const encryptedSession = cookieStore.get('clb-session')?.value;

    if (!encryptedSession){
        return Response.json(null, {status: 401})
    }

    const session = await decryptSession(encryptedSession);
    return Response.json(session);

}
