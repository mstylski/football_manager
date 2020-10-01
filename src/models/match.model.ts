export interface Filters {
  dateFrom: string;
  dateTo: string;
  permission: string;
}

export interface Area {
  name: string;
  code: string;
  ensignUrl: string;
}

export interface Competition {
  id: number;
  name: string;
  area: Area;
}

export interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner?: any;
}

export interface Odds {
  msg: string;
}

export interface FullTime {
  homeTeam?: number;
  awayTeam?: number;
}

export interface HalfTime {
  homeTeam?: number;
  awayTeam?: number;
}

export interface ExtraTime {
  homeTeam?: any;
  awayTeam?: any;
}

export interface Penalties {
  homeTeam?: any;
  awayTeam?: any;
}

export interface Score {
  winner: string;
  duration: string;
  fullTime: FullTime;
  halfTime: HalfTime;
  extraTime: ExtraTime;
  penalties: Penalties;
}

export interface HomeTeam {
  id: number;
  name: string;
}

export interface AwayTeam {
  id: number;
  name: string;
}

export interface Referee {
  id: number;
  name: string;
  nationality?: any;
}

export interface Match {
  id: number;
  competition: Competition;
  season: Season;
  utcDate: Date;
  status: string;
  matchday: number;
  stage: string;
  group: string;
  lastUpdated: Date;
  odds: Odds;
  score: Score;
  homeTeam: HomeTeam;
  awayTeam: AwayTeam;
  referees: Referee[];
}

export interface MatchesApiResponse {
  count: number;
  filters: Filters;
  matches: Match[];
}
