import { cva, type VariantProps } from "class-variance-authority";

export const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "font-caption scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "font-caption scroll-m-20 text-3xl font-semibold tracking-tight transition-colors",
      h3: "font-caption scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      default: "",
      quote: "mt-6 border-l-2 pl-6 italic",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      link: "font-medium text-cyan-600 hover:underline dark:text-primary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type TypographyVariants = VariantProps<typeof typographyVariants>;
export type TypographyVariant = TypographyVariants["variant"];

type TypographyElementMap = Record<
  NonNullable<TypographyVariant>,
  keyof HTMLElementTagNameMap
>;

export type TypographyElementKeys = keyof typeof defaultElementMapping;

export const defaultElementMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p: "p",
  quote: "p",
  code: "code",
  lead: "p",
  large: "p",
  small: "p",
  muted: "p",
  link: "a",
  default: "p",
} satisfies TypographyElementMap;
