import { Suspense } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Activity, Server, Clock, AlertCircle } from "lucide-react";

interface BackendStatus {
  status: "ok" | "error";
  service: string;
  timestamp: string;
}

async function BackendStatusWidget() {
  const apiKey = process.env.NEST_LAB_API_KEY;
  const backendUrl = process.env.NEST_BACKEND_URL;

  if (!apiKey || !backendUrl) {
    return (
      <Card className="border-destructive/20 bg-destructive/5">
        <div className="flex items-center gap-3 text-destructive">
          <AlertCircle className="h-5 w-5" />
          <p className="font-medium">Configuration Error</p>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Missing environment variables for backend connection.
        </p>
      </Card>
    );
  }

  try {
    // Implement 60-second caching to protect the Nest.js API from being spammed by bots.
    // Even if the page is hit 10k times, Vercel will only call the backend once per minute.
    const res = await fetch(`${backendUrl}/api/v1/status`, {
      next: { revalidate: 60 },
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Service Unavailable");

    const data = (await res.json()) as BackendStatus;
    const isOk = data.status === "ok";

    return (
      <Card className="border-primary/10 bg-card/50 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Server className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">
              Backend Status
            </h2>
          </div>
          <Badge variant={isOk ? "default" : "destructive"} className="px-3">
            <span className="flex items-center gap-1.5">
              <span
                className={`h-2 w-2 rounded-full ${isOk ? "bg-emerald-500 animate-pulse" : "bg-destructive"}`}
              />
              {isOk ? "Operational" : "Error"}
            </span>
          </Badge>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-2">
              <Activity className="h-4 w-4" /> Service
            </span>
            <span className="text-foreground font-mono">{data.service}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-2">
              <Clock className="h-4 w-4" /> Last Updated
            </span>
            <span className="text-foreground font-mono text-xs">
              {new Date(data.timestamp).toLocaleString()}
            </span>
          </div>
        </div>
      </Card>
    );
  } catch (error: unknown) {
    return (
      <Card className="border-destructive/20 bg-destructive/5">
        <div className="flex items-center gap-3 text-destructive mb-2">
          <AlertCircle className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Connection Failed</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Unable to reach the backend service. The system status could not be retrieved at this time.
        </p>
      </Card>
    );
  }
}

function StatusSkeleton() {
  return (
    <Card className="border-primary/5">
      <div className="flex items-center justify-between mb-6">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-6 w-24 rounded-full" />
      </div>
      <div className="space-y-4">
        <div className="flex justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-32" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-40" />
        </div>
      </div>
    </Card>
  );
}

export default function LabPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center lg:text-left">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Lab
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Experimental features and real-time system status.
        </p>
      </div>

      <div className="grid gap-8">
        <div className="max-w-md space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Real-time health monitoring for my{" "}
            <span className="text-foreground font-medium">Nest.js</span>{" "}
            backend. This integration tracks service availability and API
            responsiveness across my projects.
          </p>
          <Suspense fallback={<StatusSkeleton />}>
            <BackendStatusWidget />
          </Suspense>
        </div>

        {/* Placeholder for future lab items */}
        <div className="rounded-xl border border-dashed border-border p-8 flex flex-col items-center justify-center text-center">
          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mb-3">
            <Activity className="h-5 w-5 text-muted-foreground" />
          </div>
          <h3 className="text-base font-semibold text-foreground">
            More coming soon
          </h3>
          <p className="text-sm text-muted-foreground max-w-[250px] mt-1">
            New experiments and integrations are currently in development.
          </p>
        </div>
      </div>
    </div>
  );
}
