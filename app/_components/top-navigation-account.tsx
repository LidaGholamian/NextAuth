"use client";

import { useSessionStore } from "../_stores/auth.store";
import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";

export const TopNavigationAccount = () => {
  const status = useSessionStore((state) => state.status);
  const session = useSessionStore((state) => state.session);

  if (status === "loading") {
    return <p></p>;
  }

  return (
    <>
      {status === "authenticated" ? (
        <div className="flex items-center gap-3">
          <Image
            className="rounded-full"
            src={session!.pic}
            width={48}
            height={48}
            alt=""
          />
          <p>{session!.fullName}</p>|
          <Link href={""} className="text-error">
            خروج
          </Link>
        </div>
      ) : (
        <Button variant="outlined" href="/signin">
          ورود به سایت
        </Button>
      )}
    </>
  );
};
