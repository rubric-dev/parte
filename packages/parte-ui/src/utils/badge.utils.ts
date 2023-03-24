import { BADGE_COLOR, BadgeColors } from "../@foundations";

export const getInitial = (name: string, fallback = "?") => {
  if (!name) return fallback;
  return name
    .replace(/\s+/, " ")
    .split(" ") // Repeated spaces results in empty strings
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase()) // Watch out for empty strings
    .join("");
};

export const getColors = (avatarColor: BadgeColors = "AUTO") => {
  if (avatarColor === "AUTO") {
    const keys = Object.keys(BADGE_COLOR);
    const colorKey = keys[
      Math.floor(Math.random() * keys.length)
    ] as keyof typeof BADGE_COLOR;

    return BADGE_COLOR[colorKey];
  }
  return BADGE_COLOR[avatarColor];
};

export const getAvatarInitialsFontSize = (size: number) => {
  return Math.floor(size / 2.6);
};
