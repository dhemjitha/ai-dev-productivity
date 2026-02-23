import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/app-sidebar"
import { Separator } from "@/components/ui/separator"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex flex-1 flex-col min-h-screen w-full">
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-4" />
          <span className="text-sm text-muted-foreground">AI Dev Productivity</span>
        </header>
        <main className="flex flex-1 flex-col">
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}