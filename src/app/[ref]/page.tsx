"use client";

import { useEffect } from "react";
import { useRouter, useParams, notFound } from "next/navigation";
import { REFERRAL_SLUGS } from "@/constants/referral-routes";

export default function ReferralEntry() {
  const router = useRouter();
  const { ref } = useParams<{ ref: string }>();

  if (!REFERRAL_SLUGS.includes(ref as (typeof REFERRAL_SLUGS)[number])) {
    notFound();
  }

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return null;
}
