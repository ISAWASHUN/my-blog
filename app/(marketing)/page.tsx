import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link href={siteConfig.url} className="bg-muted px-4 rounded-2xl font-medium text-sm">Xをfollowする</Link>
            <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Post Writer</h1>
            <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">このアプリケーションはNext.jsのApp Routerで作られたものです。
              ユーザーは自由に投稿をポストすることがすることができます。
            </p>
          <div className="space-x-4">
            <Link href={"/login"} className={cn(buttonVariants({size: "lg"}))}>始める
            </Link>
            <Link href={siteConfig.links.github} className={cn(buttonVariants({size: "lg", variant: "outline"}))}target="_blank" rel="noreferrer">Github
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
