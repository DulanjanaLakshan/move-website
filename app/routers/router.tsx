
export const ROUTES = {
  HOME: "/",
  CARTOONS: "/cartoons",
  CARTOON_SERIES: "/cartoon-series",
  MOVIES: "/movies",
  BROWSER: "/browser",
  TRENDING: "/trending",
  SAVED: "/saved",
  PRIVACY: "/privacy-policy",
  SETTINGS: "/settings",
  PROFILE: (id: string) => `/profile/${id}`,
  MOVIE: (id: string) => `/movie/${id}`,
};
