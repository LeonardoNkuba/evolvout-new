/**
 * Theme configuration constants
 * Centraliza todas as cores e valores de tema do projeto
 */

// Cores base
export const COLORS = {
  // Background
  background: "#060010",

  // Primárias - Baseadas no gradiente de botões
  primary: "#00ff88", // Verde neon principal
  primaryDark: "#00dd77", // Verde escuro para hover
  primaryLight: "#00ffa0", // Verde claro para highlights


  // Secundárias - Baseadas no gradiente de botões
  secondary: "#00ccff", // Cyan para gradientes
  secondaryDark: "#00b8e6",
  secondaryLight: "#1ad6ff",


// Accent - Tons de verde/cyan
  accent: "#00e676", // Verde médio
  accentDark: "#00c853",
  accentLight: "#69f0ae",


  // Neutras
  white: "#FFFFFF",
  black: "#000000",
  lightText: "#e0e0e0",
  mediumGray: "#2a2e3d",
  darkGray: "#1a1f2e",
  navyBlue: "#001f3f", // Navy blue for backgrounds


  // Gradientes
  gradient: {
    button: "linear-gradient(-135deg, #00ff88, rgba(0, 204, 255, 0.6))",
    buttonHover: "linear-gradient(-135deg, #00ffa0, rgba(0, 230, 255, 0.7))",
  },
} as const;

// Cores para LiquidEther
export const LIQUID_ETHER_COLORS = [
  COLORS.primary,        // #00ff88 - Verde neon
  COLORS.secondary,      // #00ccff - Cyan
  COLORS.accent,         // #00e676 - Verde médio
  COLORS.primaryLight,   // #00ffa0 - Verde claro
] as string[];


// Cor do Star Border
export const STAR_BORDER_COLOR = COLORS.primary;

