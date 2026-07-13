"use client";

import { useEffect } from "react";
import { useSessionStore } from "../_stores/auth.store";

export const TopNavigationAccount = () => {
  const status = useSessionStore((state) => state.status);

  return <>{status}</>;
};
