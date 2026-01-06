export enum MediaType {
  MOVIE = "movie",
  TV_SERIES = "tv_series",
  WEB_SERIES = "web_series",

  CARTOON_MOVIE = "cartoon_movie",
  CARTOON_TV_SERIES = "cartoon_tv_series",

  ANIME_MOVIE = "anime_movie",
  ANIME_SERIES = "anime_series",

  DOCUMENTARY = "documentary",
  SHORT_FILM = "short_film",
}

export enum ContentRating {
  G = "G",
  PG = "PG",
  PG_13 = "PG-13",
  R = "R",
  NC_17 = "NC-17",
}

export enum VideoQuality {
  SD = "SD",
  HD = "HD",
  FULL_HD = "FHD",
  UHD_4K = "4K",
}

export enum AudioType {
  ORIGINAL = "original",
  DUBBED = "dubbed",
}

export interface AudioTrack {
  language: string;
  code: string; 
  type: AudioType; 
  url: string;
}

export interface Subtitle {
  language: string;
  code: string;
  url: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface CastMember {
  id: number;
  name: string;
  character?: string;
  profileImage?: string;
}

export interface CrewMember {
  id: number;
  name: string;
  role: string;
}

export interface VideoSource {
  id: string;
  quality: VideoQuality;
  url: string;
  sizeMB: number;
}

export interface Episode {
  id: string;
  episodeNumber: number;
  title: string;
  overview: string;
  duration: number;
  thumbnail: string;
  videoSources: VideoSource[];
}

export interface Season {
  id: string;
  seasonNumber: number;
  episodes: Episode[];
}

export interface Media {
  id: string;
  mediaType: MediaType;

  title: string;
  tagline?: string;
  overview: string;

  releaseDate: string;
  duration?: number;
  seasons?: Season[];

  genres: Genre[];
  originalLanguage: string;
  availableLanguages: string[];
  country: string;

  contentRating: ContentRating;
  availableQualities: VideoQuality[];

  poster: string;
  backdrop: string;
  trailerUrl?: string;

  cast: CastMember[];
  crew: CrewMember[];

  audioTracks: AudioTrack[];
  subtitles: Subtitle[];

  videoSources?: VideoSource[];

  isDubbedAvailable: boolean;
  isTrending: boolean;
  isOriginal: boolean;

  rating: number;
  popularity: number;
  views: number;

  createdAt: string;
}

export const mediaList: Media[] = [
  {
    id: "ct-001",
    mediaType: MediaType.CARTOON_TV_SERIES,
    title: "Galaxy Kids",
    overview: "A group of kids explore the universe, learning science and friendship.",
    releaseDate: "2023-06-01",

    genres: [
      { id: 1, name: "Cartoon" },
      { id: 2, name: "Adventure" },
      { id: 3, name: "Kids" },
    ],

    originalLanguage: "English",
    availableLanguages: ["English", "Sinhala", "Tamil"],
    country: "USA",

    contentRating: ContentRating.G,
    availableQualities: [VideoQuality.HD, VideoQuality.FULL_HD],

    poster: "https://i.ytimg.com/vi/XfjHdpN10qI/maxresdefault.jpg",
    backdrop: "https://i.ytimg.com/vi/XfjHdpN10qI/maxresdefault.jpg",

    cast: [],
    crew: [],

    audioTracks: [
      { language: "English", code: "en", type: AudioType.ORIGINAL, url: "/audio/galaxy-en.mp3" },
      { language: "Sinhala", code: "si", type: AudioType.DUBBED, url: "/audio/galaxy-si.mp3" },
    ],

    subtitles: [
      { language: "English", code: "en", url: "/subs/galaxy-en.vtt" },
      { language: "Tamil", code: "ta", url: "/subs/galaxy-ta.vtt" },
    ],

    seasons: [],
    isDubbedAvailable: true,
    isTrending: true,
    isOriginal: false,

    rating: 7.8,
    popularity: 85,
    views: 540000,
    createdAt: "2024-01-10",
  },
  {
    id: "mv-101",
    mediaType: MediaType.MOVIE,
    title: "Shadow Protocol",
    tagline: "Trust no one.",
    overview: "A covert agent uncovers a deadly international conspiracy.",
    releaseDate: "2024-09-18",
    duration: 134,

    genres: [
      { id: 4, name: "Action" },
      { id: 5, name: "Thriller" },
    ],

    originalLanguage: "English",
    availableLanguages: ["English", "Sinhala", "Tamil", "Hindi"],
    country: "USA",

    contentRating: ContentRating.PG_13,
    availableQualities: [VideoQuality.HD, VideoQuality.FULL_HD, VideoQuality.UHD_4K],

    poster: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/02/guardians-of-the-galaxy-vol-3-rocket-sad-ending.jpg",
    backdrop: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/02/guardians-of-the-galaxy-vol-3-rocket-sad-ending.jpg",
    trailerUrl: "https://youtube.com/watch?v=shadow",

    cast: [
      { id: 1, name: "Alex Carter", character: "Ethan Cole" },
    ],
    crew: [
      { id: 1, name: "Michael Stone", role: "Director" },
    ],

    audioTracks: [
      { language: "English", code: "en", type: AudioType.ORIGINAL, url: "/audio/shadow-en.mp3" },
      { language: "Sinhala", code: "si", type: AudioType.DUBBED, url: "/audio/shadow-si.mp3" },
      { language: "Tamil", code: "ta", type: AudioType.DUBBED, url: "/audio/shadow-ta.mp3" },
    ],

    subtitles: [
      { language: "English", code: "en", url: "/subs/shadow-en.vtt" },
      { language: "Sinhala", code: "si", url: "/subs/shadow-si.vtt" },
    ],

    videoSources: [
      { id: "vid-101", quality: VideoQuality.FULL_HD, url: "/videos/shadow-1080p.mp4", sizeMB: 4800 },
    ],

    isDubbedAvailable: true,
    isTrending: true,
    isOriginal: true,

    rating: 8.6,
    popularity: 94,
    views: 1200000,
    createdAt: "2025-01-02",
  },
  {
    id: "an-201",
    mediaType: MediaType.ANIME_SERIES,
    title: "Neo Titan",
    overview: "Humanity fights for survival against mysterious giant beings.",
    releaseDate: "2022-04-01",

    genres: [
      { id: 6, name: "Anime" },
      { id: 7, name: "Fantasy" },
      { id: 8, name: "Action" },
    ],

    originalLanguage: "Japanese",
    availableLanguages: ["Japanese", "English"],
    country: "Japan",

    contentRating: ContentRating.PG_13,
    availableQualities: [VideoQuality.HD, VideoQuality.FULL_HD],

    poster: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1LO5ph.img?w=1200&h=675&m=4&q=100",
    backdrop: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1LO5ph.img?w=1200&h=675&m=4&q=100",

    cast: [],
    crew: [],

    audioTracks: [
      { language: "Japanese", code: "ja", type: AudioType.ORIGINAL, url: "/audio/neo-ja.mp3" },
      { language: "English", code: "en", type: AudioType.DUBBED, url: "/audio/neo-en.mp3" },
    ],

    subtitles: [
      { language: "English", code: "en", url: "/subs/neo-en.vtt" },
    ],

    seasons: [],
    isDubbedAvailable: true,
    isTrending: true,
    isOriginal: false,

    rating: 9.1,
    popularity: 98,
    views: 3200000,
    createdAt: "2023-02-12",
  },
  {
    id: "dc-301",
    mediaType: MediaType.DOCUMENTARY,
    title: "Inside Silicon Valley",
    overview: "The rise of the world's most powerful tech companies.",
    releaseDate: "2021-11-20",
    duration: 98,

    genres: [
      { id: 9, name: "Documentary" },
      { id: 10, name: "Technology" },
    ],

    originalLanguage: "English",
    availableLanguages: ["English"],
    country: "USA",

    contentRating: ContentRating.PG,
    availableQualities: [VideoQuality.HD],

    poster: "https://www.eldorado.ru/storage/resize/w794/publication/0/42/SxUzVbhSzBhMPgW0FnkBi9KaLEQJUYF5GPCSyHjr.jpeg?utm_source=yandex&utm_medium=organic&utm_campaign=yandex&utm_referrer=yandex",
    backdrop: "https://www.eldorado.ru/storage/resize/w794/publication/0/42/SxUzVbhSzBhMPgW0FnkBi9KaLEQJUYF5GPCSyHjr.jpeg?utm_source=yandex&utm_medium=organic&utm_campaign=yandex&utm_referrer=yandex",

    cast: [],
    crew: [],

    audioTracks: [
      { language: "English", code: "en", type: AudioType.ORIGINAL, url: "/audio/sv-en.mp3" },
    ],

    subtitles: [
      { language: "English", code: "en", url: "/subs/sv-en.vtt" },
    ],

    videoSources: [
      { id: "vid-301", quality: VideoQuality.HD, url: "/videos/sv-720p.mp4", sizeMB: 2100 },
    ],

    isDubbedAvailable: false,
    isTrending: false,
    isOriginal: false,

    rating: 8.2,
    popularity: 70,
    views: 450000,
    createdAt: "2022-01-05",
  },
];
