import { useEffect, useState } from "react";
import { getUserInfo } from "services/user";
import useSWR, { mutate } from "swr";

export default function useLogin() {
  const fetcher = () => getUserInfo();
  const { data, mutate } = useSWR("/user_info", fetcher);

  const isLogged = !!data;

  return { mutate, isLogged, ...data };
}

export function refreshUser() {
  mutate("/user_info");
}
