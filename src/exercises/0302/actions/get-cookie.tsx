'use server'

import { cookies } from "next/headers"

export async function GetCookie(key: string) {
  const tokenCookie = cookies().get(key)?.value;
  return tokenCookie;
}