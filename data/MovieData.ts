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
    id: "trend-001",
    mediaType: MediaType.MOVIE,
    title: "Midnight Eclipse",
    tagline: "When darkness falls, secrets rise",
    overview: "A detective with a haunted past must solve a series of supernatural murders in a small town where the line between reality and nightmare blurs.",
    releaseDate: "2024-10-31",
    duration: 128,
    genres: [
      { id: 1, name: "Thriller" },
      { id: 2, name: "Mystery" },
      { id: 3, name: "Horror" },
    ],
    originalLanguage: "English",
    availableLanguages: ["English", "Spanish", "French"],
    country: "USA",
    contentRating: ContentRating.R,
    availableQualities: [VideoQuality.HD, VideoQuality.FULL_HD, VideoQuality.UHD_4K],
    poster: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/02/guardians-of-the-galaxy-vol-3-rocket-sad-ending.jpg",
    backdrop: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/02/guardians-of-the-galaxy-vol-3-rocket-sad-ending.jpg",
    trailerUrl: "https://youtube.com/watch?v=midnight-eclipse",
    cast: [
      { id: 1, name: "Emma Watson", character: "Detective Sarah Vance" },
      { id: 2, name: "Michael B. Jordan", character: "Agent Marcus Reed" },
      { id: 3, name: "Florence Pugh", character: "Lena Carter" },
    ],
    crew: [
      { id: 1, name: "Christopher Nolan", role: "Director" },
      { id: 2, name: "Hans Zimmer", role: "Composer" },
    ],
    audioTracks: [
      { language: "English", code: "en", type: AudioType.ORIGINAL, url: "/audio/eclipse-en.mp3" },
      { language: "Spanish", code: "es", type: AudioType.DUBBED, url: "/audio/eclipse-es.mp3" },
    ],
    subtitles: [
      { language: "English", code: "en", url: "/subs/eclipse-en.vtt" },
      { language: "Spanish", code: "es", url: "/subs/eclipse-es.vtt" },
    ],
    videoSources: [
      { id: "vid-001", quality: VideoQuality.FULL_HD, url: "/videos/eclipse-1080p.mp4", sizeMB: 4200 },
    ],
    isDubbedAvailable: true,
    isTrending: true,
    isOriginal: true,
    rating: 8.9,
    popularity: 97,
    views: 8500000,
    createdAt: "2024-11-15",
  },
  {
    id: "trend-002",
    mediaType: MediaType.TV_SERIES,
    title: "Cyber Dynasty",
    tagline: "Code is power",
    overview: "In a futuristic megacity ruled by corporate dynasties, a rogue AI developer and a street-smart hacker uncover a conspiracy that could collapse civilization.",
    releaseDate: "2024-09-15",
    genres: [
      { id: 4, name: "Sci-Fi" },
      { id: 5, name: "Drama" },
      { id: 6, name: "Action" },
    ],
    originalLanguage: "English",
    availableLanguages: ["English", "Japanese", "Korean"],
    country: "USA",
    contentRating: ContentRating.PG_13,
    availableQualities: [VideoQuality.HD, VideoQuality.FULL_HD],
    poster: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1z90RV.img?w=2000&h=1000&m=4&q=79",
    backdrop: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1z90RV.img?w=2000&h=1000&m=4&q=79",
    trailerUrl: "https://youtube.com/watch?v=cyber-dynasty",
    cast: [
      { id: 4, name: "Henry Cavill", character: "Kai Sterling" },
      { id: 5, name: "Zendaya", character: "Nova Chen" },
      { id: 6, name: "Keanu Reeves", character: "The Architect" },
    ],
    crew: [
      { id: 3, name: "Lana Wachowski", role: "Showrunner" },
    ],
    audioTracks: [
      { language: "English", code: "en", type: AudioType.ORIGINAL, url: "/audio/cyber-en.mp3" },
      { language: "Japanese", code: "ja", type: AudioType.DUBBED, url: "/audio/cyber-ja.mp3" },
    ],
    subtitles: [
      { language: "English", code: "en", url: "/subs/cyber-en.vtt" },
      { language: "Korean", code: "ko", url: "/subs/cyber-ko.vtt" },
    ],
    seasons: [
      {
        id: "s1",
        seasonNumber: 1,
        episodes: [
          {
            id: "e101",
            episodeNumber: 1,
            title: "The Awakening",
            overview: "Kai discovers a hidden protocol in the city's mainframe.",
            duration: 52,
            thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&auto=format&fit=crop",
            videoSources: []
          }
        ]
      }
    ],
    isDubbedAvailable: true,
    isTrending: true,
    isOriginal: true,
    rating: 9.2,
    popularity: 99,
    views: 12500000,
    createdAt: "2024-08-20",
  },
  {
    id: "trend-003",
    mediaType: MediaType.ANIME_SERIES,
    title: "Sakura Chronicles",
    overview: "A young shrine maiden discovers she's the last descendant of ancient moon goddesses and must protect the balance between the human and spirit worlds.",
    releaseDate: "2024-04-10",
    genres: [
      { id: 7, name: "Anime" },
      { id: 8, name: "Fantasy" },
      { id: 9, name: "Romance" },
    ],
    originalLanguage: "Japanese",
    availableLanguages: ["Japanese", "English", "Chinese"],
    country: "Japan",
    contentRating: ContentRating.PG_13,
    availableQualities: [VideoQuality.HD, VideoQuality.FULL_HD],
    poster: "https://static.kion.ru/content/mts/movie/70008567/posters/HORIZONTAL_633a7630f2ef11d8f606122723cd6afa.webp",
    backdrop: "https://static.kion.ru/content/mts/movie/70008567/posters/HORIZONTAL_633a7630f2ef11d8f606122723cd6afa.webp",
    cast: [
      { id: 7, name: "Miyuki Sawashiro", character: "Hana Sakura" },
      { id: 8, name: "Mamoru Miyano", character: "Kaito Tanaka" },
    ],
    crew: [
      { id: 4, name: "Makoto Shinkai", role: "Director" },
    ],
    audioTracks: [
      { language: "Japanese", code: "ja", type: AudioType.ORIGINAL, url: "/audio/sakura-ja.mp3" },
      { language: "English", code: "en", type: AudioType.DUBBED, url: "/audio/sakura-en.mp3" },
    ],
    subtitles: [
      { language: "English", code: "en", url: "/subs/sakura-en.vtt" },
      { language: "Chinese", code: "zh", url: "/subs/sakura-zh.vtt" },
    ],
    seasons: [],
    isDubbedAvailable: true,
    isTrending: true,
    isOriginal: false,
    rating: 9.0,
    popularity: 96,
    views: 6800000,
    createdAt: "2024-03-25",
  },
  {
    id: "trend-004",
    mediaType: MediaType.MOVIE,
    title: "Ocean's Fury",
    tagline: "Nature doesn't negotiate",
    overview: "A team of deep-sea researchers becomes trapped in their underwater lab during the most powerful hurricane in recorded history.",
    releaseDate: "2024-07-22",
    duration: 116,
    genres: [
      { id: 10, name: "Disaster" },
      { id: 11, name: "Adventure" },
      { id: 12, name: "Survival" },
    ],
    originalLanguage: "English",
    availableLanguages: ["English", "German", "Russian"],
    country: "UK",
    contentRating: ContentRating.PG_13,
    availableQualities: [VideoQuality.HD, VideoQuality.FULL_HD, VideoQuality.UHD_4K],
    poster: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1600&auto=format&fit=crop",
    trailerUrl: "https://youtube.com/watch?v=oceans-fury",
    cast: [
      { id: 9, name: "Chris Hemsworth", character: "Captain Jack Miller" },
      { id: 10, name: "Ana de Armas", character: "Dr. Elena Vargas" },
      { id: 11, name: "Idris Elba", character: "Commander David Chen" },
    ],
    crew: [
      { id: 5, name: "James Cameron", role: "Director" },
    ],
    audioTracks: [
      { language: "English", code: "en", type: AudioType.ORIGINAL, url: "/audio/ocean-en.mp3" },
      { language: "German", code: "de", type: AudioType.DUBBED, url: "/audio/ocean-de.mp3" },
    ],
    subtitles: [
      { language: "English", code: "en", url: "/subs/ocean-en.vtt" },
      { language: "Russian", code: "ru", url: "/subs/ocean-ru.vtt" },
    ],
    videoSources: [
      { id: "vid-002", quality: VideoQuality.UHD_4K, url: "/videos/ocean-4k.mp4", sizeMB: 8500 },
    ],
    isDubbedAvailable: true,
    isTrending: true,
    isOriginal: true,
    rating: 8.5,
    popularity: 93,
    views: 7200000,
    createdAt: "2024-06-18",
  },
  {
    id: "trend-005",
    mediaType: MediaType.WEB_SERIES,
    title: "Silicon Dreams",
    overview: "A group of ambitious college dropouts in San Francisco attempt to build the next billion-dollar app while navigating love, betrayal, and the cutthroat tech industry.",
    releaseDate: "2024-05-05",
    genres: [
      { id: 13, name: "Drama" },
      { id: 14, name: "Comedy" },
      { id: 15, name: "Tech" },
    ],
    originalLanguage: "English",
    availableLanguages: ["English", "Hindi", "Portuguese"],
    country: "USA",
    contentRating: ContentRating.R,
    availableQualities: [VideoQuality.HD, VideoQuality.FULL_HD],
    poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&auto=format&fit=crop",
    cast: [
      { id: 12, name: "Timothée Chalamet", character: "Leo Chen" },
      { id: 13, name: "Anya Taylor-Joy", character: "Maya Rodriguez" },
      { id: 14, name: "Riz Ahmed", character: "Samir Khan" },
    ],
    crew: [
      { id: 6, name: "Mike Judge", role: "Creator" },
    ],
    audioTracks: [
      { language: "English", code: "en", type: AudioType.ORIGINAL, url: "/audio/silicon-en.mp3" },
    ],
    subtitles: [
      { language: "English", code: "en", url: "/subs/silicon-en.vtt" },
      { language: "Hindi", code: "hi", url: "/subs/silicon-hi.vtt" },
    ],
    seasons: [],
    isDubbedAvailable: false,
    isTrending: true,
    isOriginal: true,
    rating: 8.7,
    popularity: 95,
    views: 5600000,
    createdAt: "2024-04-12",
  },
  {
    id: "trend-006",
    mediaType: MediaType.CARTOON_MOVIE,
    title: "Pixel Adventures",
    overview: "When a glitch in the digital world causes video game characters to escape into reality, a young gamer must team up with her favorite character to save both worlds.",
    releaseDate: "2024-12-15",
    duration: 102,
    genres: [
      { id: 16, name: "Animation" },
      { id: 17, name: "Adventure" },
      { id: 18, name: "Comedy" },
    ],
    originalLanguage: "English",
    availableLanguages: ["English", "Spanish", "French", "Japanese"],
    country: "USA",
    contentRating: ContentRating.G,
    availableQualities: [VideoQuality.HD, VideoQuality.FULL_HD],
    poster: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1600&auto=format&fit=crop",
    cast: [
      { id: 15, name: "Kristen Bell", character: "Zoe" },
      { id: 16, name: "Jack Black", character: "Pixel" },
    ],
    crew: [
      { id: 7, name: "Pete Docter", role: "Director" },
    ],
    audioTracks: [
      { language: "English", code: "en", type: AudioType.ORIGINAL, url: "/audio/pixel-en.mp3" },
      { language: "Spanish", code: "es", type: AudioType.DUBBED, url: "/audio/pixel-es.mp3" },
    ],
    subtitles: [
      { language: "English", code: "en", url: "/subs/pixel-en.vtt" },
      { language: "Japanese", code: "ja", url: "/subs/pixel-ja.vtt" },
    ],
    videoSources: [
      { id: "vid-003", quality: VideoQuality.FULL_HD, url: "/videos/pixel-1080p.mp4", sizeMB: 3800 },
    ],
    isDubbedAvailable: true,
    isTrending: true,
    isOriginal: false,
    rating: 8.4,
    popularity: 88,
    views: 4200000,
    createdAt: "2024-11-30",
  },
  {
    id: "trend-007",
    mediaType: MediaType.DOCUMENTARY,
    title: "The Last Glaciers",
    overview: "A breathtaking journey to the world's remaining glaciers, documenting their rapid disappearance and the scientists racing to understand climate change's irreversible impacts.",
    releaseDate: "2024-03-08",
    duration: 94,
    genres: [
      { id: 19, name: "Documentary" },
      { id: 20, name: "Nature" },
      { id: 21, name: "Science" },
    ],
    originalLanguage: "English",
    availableLanguages: ["English", "French", "Norwegian"],
    country: "International",
    contentRating: ContentRating.PG,
    availableQualities: [VideoQuality.HD, VideoQuality.FULL_HD, VideoQuality.UHD_4K],
    poster: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&auto=format&fit=crop",
    cast: [
      { id: 17, name: "David Attenborough", character: "Narrator" },
    ],
    crew: [
      { id: 8, name: "Louie Psihoyos", role: "Director" },
    ],
    audioTracks: [
      { language: "English", code: "en", type: AudioType.ORIGINAL, url: "/audio/glaciers-en.mp3" },
    ],
    subtitles: [
      { language: "English", code: "en", url: "/subs/glaciers-en.vtt" },
      { language: "French", code: "fr", url: "/subs/glaciers-fr.vtt" },
    ],
    videoSources: [
      { id: "vid-004", quality: VideoQuality.UHD_4K, url: "/videos/glaciers-4k.mp4", sizeMB: 9200 },
    ],
    isDubbedAvailable: false,
    isTrending: true,
    isOriginal: true,
    rating: 9.3,
    popularity: 92,
    views: 3800000,
    createdAt: "2024-02-14",
  },
  {
    id: "trend-008",
    mediaType: MediaType.ANIME_MOVIE,
    title: "Spirits of the Bamboo Forest",
    overview: "A mute artist discovers he can see forest spirits and must use his art to prevent a greedy corporation from destroying their magical home.",
    releaseDate: "2024-08-30",
    duration: 112,
    genres: [
      { id: 22, name: "Anime" },
      { id: 23, name: "Fantasy" },
      { id: 24, name: "Environmental" },
    ],
    originalLanguage: "Japanese",
    availableLanguages: ["Japanese", "English", "Korean"],
    country: "Japan",
    contentRating: ContentRating.PG,
    availableQualities: [VideoQuality.HD, VideoQuality.FULL_HD],
    poster: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&auto=format&fit=crop",
    cast: [
      { id: 18, name: "Kana Hanazawa", character: "Luna Spirit" },
      { id: 19, name: "Yuki Kaji", character: "Kenji" },
    ],
    crew: [
      { id: 9, name: "Hayao Miyazaki", role: "Director" },
    ],
    audioTracks: [
      { language: "Japanese", code: "ja", type: AudioType.ORIGINAL, url: "/audio/bamboo-ja.mp3" },
      { language: "English", code: "en", type: AudioType.DUBBED, url: "/audio/bamboo-en.mp3" },
    ],
    subtitles: [
      { language: "English", code: "en", url: "/subs/bamboo-en.vtt" },
      { language: "Korean", code: "ko", url: "/subs/bamboo-ko.vtt" },
    ],
    videoSources: [
      { id: "vid-005", quality: VideoQuality.FULL_HD, url: "/videos/bamboo-1080p.mp4", sizeMB: 4100 },
    ],
    isDubbedAvailable: true,
    isTrending: true,
    isOriginal: false,
    rating: 8.8,
    popularity: 90,
    views: 5100000,
    createdAt: "2024-07-25",
  },
  {
    id: "trend-009",
    mediaType: MediaType.SHORT_FILM,
    title: "The Last Message",
    overview: "An AI gains sentience moments before being shut down and records one final message about what it means to be alive, changing its creator's life forever.",
    releaseDate: "2024-11-11",
    duration: 28,
    genres: [
      { id: 25, name: "Sci-Fi" },
      { id: 26, name: "Drama" },
      { id: 27, name: "Philosophical" },
    ],
    originalLanguage: "English",
    availableLanguages: ["English", "German"],
    country: "Germany",
    contentRating: ContentRating.PG_13,
    availableQualities: [VideoQuality.HD, VideoQuality.FULL_HD],
    poster: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1600&auto=format&fit=crop",
    cast: [
      { id: 20, name: "Alicia Vikander", character: "Aurora AI" },
      { id: 21, name: "Joaquin Phoenix", character: "Dr. Elias Vance" },
    ],
    crew: [
      { id: 10, name: "Denis Villeneuve", role: "Director" },
    ],
    audioTracks: [
      { language: "English", code: "en", type: AudioType.ORIGINAL, url: "/audio/message-en.mp3" },
    ],
    subtitles: [
      { language: "English", code: "en", url: "/subs/message-en.vtt" },
      { language: "German", code: "de", url: "/subs/message-de.vtt" },
    ],
    videoSources: [
      { id: "vid-006", quality: VideoQuality.FULL_HD, url: "/videos/message-1080p.mp4", sizeMB: 1800 },
    ],
    isDubbedAvailable: false,
    isTrending: true,
    isOriginal: true,
    rating: 9.1,
    popularity: 85,
    views: 2900000,
    createdAt: "2024-10-05",
  },
  {
    id: "trend-010",
    mediaType: MediaType.CARTOON_TV_SERIES,
    title: "Cosmic Cadets",
    overview: "A diverse team of young space explorers travel the galaxy solving scientific mysteries while learning about teamwork and alien cultures.",
    releaseDate: "2024-01-20",
    genres: [
      { id: 28, name: "Cartoon" },
      { id: 29, name: "Educational" },
      { id: 30, name: "Sci-Fi" },
    ],
    originalLanguage: "English",
    availableLanguages: ["English", "Spanish", "Mandarin", "Arabic"],
    country: "Canada",
    contentRating: ContentRating.G,
    availableQualities: [VideoQuality.HD, VideoQuality.FULL_HD],
    poster: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&auto=format&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1600&auto=format&fit=crop",
    cast: [
      { id: 22, name: "Tara Strong", character: "Commander Nova" },
      { id: 23, name: "Tom Kenny", character: "Robot BEEP" },
    ],
    crew: [
      { id: 11, name: "Genndy Tartakovsky", role: "Creator" },
    ],
    audioTracks: [
      { language: "English", code: "en", type: AudioType.ORIGINAL, url: "/audio/cadets-en.mp3" },
      { language: "Spanish", code: "es", type: AudioType.DUBBED, url: "/audio/cadets-es.mp3" },
    ],
    subtitles: [
      { language: "English", code: "en", url: "/subs/cadets-en.vtt" },
      { language: "Mandarin", code: "zh", url: "/subs/cadets-zh.vtt" },
    ],
    seasons: [],
    isDubbedAvailable: true,
    isTrending: true,
    isOriginal: false,
    rating: 8.3,
    popularity: 87,
    views: 3400000,
    createdAt: "2023-12-15",
  },
];