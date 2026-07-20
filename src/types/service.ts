import { ReactNode } from "react";

export type Service = {
  id: string;
  title: string;
  price?: string;
  tagline: string;
  accent: string;
  lightAccent: string | undefined;
  short: string | undefined;
  body: string | ReactNode;
  tags: string[];
  details: string[];
};

export type CardSize = "hero" | "medium" | "smallCard";