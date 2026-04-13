import { Suspense } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Activity, Server, Clock, AlertCircle, Gamepad2, User } from "lucide-react";

interface BackendStatus {
  status: "ok" | "error";
  service: string;
  timestamp: string;
}

interface SummonerProfile {
  id: string;
  puuid: string;
  gameName: string;
  tagLine: string;
  profileIconId: number;
  summonerLevel: number;
  summonerId: string | null;
  accountId: string | null;
  isStale: boolean;
  updatedAt: string;
  createdAt: string;
}

interface MatchParticipant {
  puuid: string;
  win: boolean;
  championName: string;
  kills: number;
  deaths: number;
  assists: number;
  totalDamageDealtToChampions: number;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  item6: number;
}

interface MatchData {
  info: {
    gameMode: string;
    gameDuration: number;
    gameCreation: number;
    participants: MatchParticipant[];
  };
}

interface MatchEntry {
  id: string;
  puuid: string;
  data: MatchData;
  createdAt: string;
}

interface MatchesResponse {
  matches: MatchEntry[];
  isStale: boolean;
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

async function SummonerProfileWidget() {
  const apiKey = process.env.NEST_LAB_API_KEY;
  const backendUrl = process.env.NEST_BACKEND_URL;

  if (!apiKey || !backendUrl) {
    return (
      <Card className="border-destructive/20 bg-destructive/5">
        <div className="flex items-center gap-3 text-destructive mb-2">
          <AlertCircle className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Configuration Error</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Missing environment variables for backend connection.
        </p>
      </Card>
    );
  }

  try {
    const [res, versionsRes] = await Promise.all([
      fetch(`${backendUrl}/api/v1/summoner/profile`, {
        next: { revalidate: 60 },
        headers: {
          "x-api-key": apiKey,
          "Content-Type": "application/json",
        },
      }),
      fetch("https://ddragon.leagueoflegends.com/api/versions.json", {
        next: { revalidate: 86400 }, // Cache versions for 24 hours
      }),
    ]);

    if (!res.ok) throw new Error("Service Unavailable");

    const data = (await res.json()) as SummonerProfile;
    const versions = (await versionsRes.json()) as string[];
    const latestVersion = versions[0];
    const iconUrl = `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/profileicon/${data.profileIconId}.png`;

    return (
      <Card className="border-primary/10 bg-card/50 backdrop-blur-sm relative overflow-hidden">
        {data.isStale && (
          <div className="absolute top-0 right-0 left-0 h-1 bg-amber-500/50" />
        )}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">
              League of Legends
            </h2>
          </div>
          <div className="flex gap-2">
            {data.isStale && (
              <Badge variant="outline" className="px-2 bg-amber-500/10 text-amber-600 border-amber-500/20 gap-1.5">
                <AlertCircle className="h-3 w-3" /> Stale
              </Badge>
            )}
            <Badge variant="secondary" className="px-3 bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20 border-indigo-500/20">
              Lv. {data.summonerLevel}
            </Badge>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-12 w-12 rounded-lg overflow-hidden border border-primary/20 bg-muted shrink-0">
            <Image 
              src={iconUrl} 
              alt="Profile Icon" 
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <User className="h-4 w-4 shrink-0" /> Riot ID
            </p>
            <p className="text-foreground font-semibold truncate">
              {data.gameName} <span className="text-muted-foreground font-normal">#{data.tagLine}</span>
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-3 border-t border-primary/5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-2">
              <Clock className="h-4 w-4" /> Last Updated
            </span>
            <span className="text-foreground font-mono text-xs">
              {new Date(data.updatedAt).toLocaleString()}
            </span>
          </div>
          {data.isStale && (
            <p className="text-[10px] text-amber-600/80 bg-amber-500/5 p-2 rounded border border-amber-500/10">
              Note: Data is currently served from cache as the Riot API key has expired.
            </p>
          )}
        </div>
      </Card>
    );
  } catch (error: unknown) {
    return (
      <Card className="border-destructive/20 bg-destructive/5">
        <div className="flex items-center gap-3 text-destructive mb-2">
          <AlertCircle className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Profile Unavailable</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Unable to retrieve summoner profile at this time.
        </p>
      </Card>
    );
  }
}

async function MatchHistoryWidget() {
  const apiKey = process.env.NEST_LAB_API_KEY;
  const backendUrl = process.env.NEST_BACKEND_URL;

  if (!apiKey || !backendUrl) {
    return (
      <Card className="border-destructive/20 bg-destructive/5 flex flex-col h-full">
        <div className="flex items-center gap-3 text-destructive mb-2">
          <AlertCircle className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Configuration Error</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Missing environment variables for backend connection.
        </p>
      </Card>
    );
  }

  try {
    const [res, versionsRes] = await Promise.all([
      fetch(`${backendUrl}/api/v1/summoner/matches`, {
        next: { revalidate: 60 },
        headers: {
          "x-api-key": apiKey,
          "Content-Type": "application/json",
        },
      }),
      fetch("https://ddragon.leagueoflegends.com/api/versions.json", {
        next: { revalidate: 86400 },
      }),
    ]);

    if (!res.ok) throw new Error("Matches Unavailable");

    const data = (await res.json()) as MatchesResponse;
    const versions = (await versionsRes.json()) as string[];
    const latestVersion = versions[0];

    return (
      <Card className="border-primary/10 bg-card/50 backdrop-blur-sm relative overflow-hidden flex flex-col h-full">
        {data.isStale && (
          <div className="absolute top-0 right-0 left-0 h-1 bg-amber-500/50" />
        )}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">
              Recent Matches
            </h2>
          </div>
          {data.isStale && (
            <Badge variant="outline" className="px-2 bg-amber-500/10 text-amber-600 border-amber-500/20 gap-1.5">
              <AlertCircle className="h-3 w-3" /> Stale
            </Badge>
          )}
        </div>

        <div className="flex-1 space-y-3">
          {data.matches.slice(0, 3).map((match) => {
            const participant = match.data.info.participants.find(
              (p) => p.puuid === match.puuid
            );
            if (!participant) return null;

            const isWin = participant.win;
            const durationMin = Math.floor(match.data.info.gameDuration / 60);
            const champIconUrl = `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${participant.championName}.png`;

            return (
              <div 
                key={match.id}
                className={`flex items-center gap-3 p-2.5 rounded-lg border transition-colors ${
                  isWin 
                    ? "bg-emerald-500/5 border-emerald-500/10 hover:border-emerald-500/20" 
                    : "bg-destructive/5 border-destructive/10 hover:border-destructive/20"
                }`}
              >
                <div className="relative h-12 w-12 rounded overflow-hidden border border-primary/10 shrink-0">
                  <Image 
                    src={champIconUrl}
                    alt={participant.championName}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-sm font-bold ${isWin ? "text-emerald-500" : "text-destructive"}`}>
                      {isWin ? "VICTORY" : "DEFEAT"}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">
                      {match.data.info.gameMode} • {durationMin}m
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium truncate">
                        {participant.championName}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">
                        {participant.kills}/{participant.deaths}/{participant.assists}
                      </span>
                    </div>
                    <div className="flex gap-1">
                      {[participant.item0, participant.item1, participant.item2, participant.item3, participant.item4, participant.item5, participant.item6].map((itemId, i) => (
                        <div key={i} className={`h-5 w-5 rounded-sm overflow-hidden bg-foreground/5 shrink-0 relative ${i === 6 ? "rounded-full" : ""}`}>
                          {itemId !== 0 && (
                            <Image 
                              src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/item/${itemId}.png`}
                              alt={`Item`}
                              fill
                              className="object-cover"
                              sizes="20px"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {data.isStale && (
          <div className="mt-4 pt-3 border-t border-primary/5">
            <p className="text-[10px] text-amber-600/80 bg-amber-500/5 p-2 rounded border border-amber-500/10">
              Note: Data is currently served from cache as the Riot API key has expired.
            </p>
          </div>
        )}
      </Card>
    );
  } catch (error: unknown) {
    return (
      <Card className="border-destructive/20 bg-destructive/5 flex flex-col h-full">
        <div className="flex items-center gap-3 text-destructive mb-2">
          <AlertCircle className="h-5 w-5" />
          <h2 className="text-lg font-semibold">Matches Unavailable</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Unable to retrieve match history at this time.
        </p>
      </Card>
    );
  }
}

function WidgetSkeleton() {
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

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 w-full mx-auto lg:mx-0 max-w-md lg:max-w-none">
          <p className="text-sm text-muted-foreground leading-relaxed h-14">
            Real-time health monitoring for my{" "}
            <span className="text-foreground font-medium">Nest.js</span>{" "}
            backend. This integration tracks service availability.
          </p>
          <Suspense fallback={<WidgetSkeleton />}>
            {/* @ts-expect-error Async Server Component */}
            <BackendStatusWidget />
          </Suspense>
        </div>

        <div className="space-y-4 w-full mx-auto lg:mx-0 max-w-md lg:max-w-none">
          <p className="text-sm text-muted-foreground leading-relaxed h-14">
            Live fetching of my <span className="text-foreground font-medium">League of Legends</span> profile data through my backend API.
          </p>
          <Suspense fallback={<WidgetSkeleton />}>
            {/* @ts-expect-error Async Server Component */}
            <SummonerProfileWidget />
          </Suspense>
        </div>

        <div className="space-y-4 w-full mx-auto lg:col-span-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Displaying the <span className="text-foreground font-medium">Last 3 Matches</span> from my League of Legends history.
          </p>
          <Suspense fallback={<WidgetSkeleton />}>
            {/* @ts-expect-error Async Server Component */}
            <MatchHistoryWidget />
          </Suspense>
        </div>
      </div>
      
      <div className="mt-16">
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
