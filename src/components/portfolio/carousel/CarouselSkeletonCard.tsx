import { Skeleton } from "@/components/ui/skeleton"

export function CarouselSkeletonCard() {
  return (
    <div className="flex  space-y-3 items-center">
      <Skeleton className="h-[200px] xs:h-[250px]  xl:h-[300px] xxl:h-[400px] w-[100px] xl:w-[150px]  xxl:w-[200px] rounded-none" />
      <Skeleton className="h-[310px] xs:h-[360px] w-[500px] xl:h-[450px] lg:w-[600px] xl:w-[700px] xxl:h-[550px] xxl:w-[800px] !max-w-[calc(100%-48px)]" />
      <Skeleton className="h-[200px] xs:h-[250px]  xl:h-[300px] xxl:h-[400px] w-[100px] xl:w-[150px]  xxl:w-[200px] rounded-none" />
    </div>
  )
}
