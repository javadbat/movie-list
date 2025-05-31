import { Skeleton } from "@components/ui/skeleton"
import clsx from "clsx"
import type { HTMLAttributes } from "react"
export function SkeletonCard(props:HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props
  return (
    <div className={clsx("flex flex-col space-y-3",className) } {...rest}>
      <Skeleton className="aspect-square w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[25%]" />
        <Skeleton className="h-4 w-[50%]" />
        <Skeleton className="h-4 w-[50%]" />
      </div>
    </div>
  )
}