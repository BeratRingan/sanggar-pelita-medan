import { Skeleton } from "@/components/ui/skeleton";

export default function AdminDashboardLoading() {
  return (
    <section className="space-y-8 p-8">
      {/* Header Dashboard Placeholder */}
      <div className="space-y-2">
        <Skeleton className="h-9 w-48" /> {/* Title: Dashboard */}
        <Skeleton className="h-5 w-72" /> {/* Description */}
      </div>

      {/* Article Cards Placeholder */}
      <div className="space-y-4">
        {/* Card 1 */}
        <div className="flex flex-col gap-4 rounded-lg border bg-card p-4 shadow-sm sm:flex-row sm:p-6">
          {/* Thumbnail */}
          <Skeleton className="aspect-video w-full shrink-0 rounded-lg border sm:aspect-square sm:h-24 sm:w-24" />
          
          {/* Content */}
          <div className="min-w-0 flex-1 space-y-3">
            {/* Title */}
            <Skeleton className="h-6 w-3/4 sm:h-7" />
            
            {/* Meta info */}
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-32" /> {/* Date */}
              <Skeleton className="h-4 w-48" /> {/* Slug */}
            </div>

            {/* Actions */}
            <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between sm:pt-2">
              {/* Status Badge */}
              <Skeleton className="h-6 w-20 rounded-full" />
              
              {/* Action Buttons */}
              <div className="flex w-full items-center gap-2 sm:w-auto">
                <Skeleton className="h-9 flex-1 rounded-md sm:flex-none sm:w-16" />
                <Skeleton className="h-9 flex-1 rounded-md sm:flex-none sm:w-16" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-4 rounded-lg border bg-card p-4 shadow-sm sm:flex-row sm:p-6">
          <Skeleton className="aspect-video w-full shrink-0 rounded-lg border sm:aspect-square sm:h-24 sm:w-24" />
          <div className="min-w-0 flex-1 space-y-3">
            <Skeleton className="h-6 w-2/3 sm:h-7" />
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-40" />
            </div>
            <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between sm:pt-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <div className="flex w-full items-center gap-2 sm:w-auto">
                <Skeleton className="h-9 flex-1 rounded-md sm:flex-none sm:w-16" />
                <Skeleton className="h-9 flex-1 rounded-md sm:flex-none sm:w-16" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col gap-4 rounded-lg border bg-card p-4 shadow-sm sm:flex-row sm:p-6">
          <Skeleton className="aspect-video w-full shrink-0 rounded-lg border sm:aspect-square sm:h-24 sm:w-24" />
          <div className="min-w-0 flex-1 space-y-3">
            <Skeleton className="h-6 w-4/5 sm:h-7" />
            <div className="space-y-1.5">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-56" />
            </div>
            <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between sm:pt-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <div className="flex w-full items-center gap-2 sm:w-auto">
                <Skeleton className="h-9 flex-1 rounded-md sm:flex-none sm:w-16" />
                <Skeleton className="h-9 flex-1 rounded-md sm:flex-none sm:w-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}