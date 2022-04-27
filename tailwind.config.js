module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern-index":
          "url('https://creaprint-france.fr/wp-content/uploads/2021/02/Agence-Communication-visuelle-Paris-2102.jpg')",
        "hero-pattern-adhesif_vitrine":
          "url('https://creaprint-france.fr/wp-content/uploads/2018/03/Adhésif-vitrine-1.jpg')",
        "hero-pattern-covering_voiture":
          "url('https://creaprint-france.fr/wp-content/uploads/2021/02/Creaprint-Impression-numerique_marquage-vehicule-e1613992268836.jpg')",
        "hero-pattern-scenographie":
          "url('https://creaprint-france.fr/wp-content/uploads/2018/03/Scénographie-6.jpg')",
        "hero-pattern-caisson_lumineux":
          "url('https://creaprint-france.fr/wp-content/uploads/2020/03/caissons-Lumineux-Paris.jpg')",
      },
      height: {
        128: "32rem",
      },
      colors: {
        purple: "#542D87",
        purple_light: "#6A5A87",
        gray_strong: "#BCBCBC",
        gray_footer: "#595959",
        gray: "#757575",
        section_gray: "#EDEDED",
        yellow: "#F7EA4D",
        send_btn: "#443F4C",
      },
    },
  },
  plugins: [],
};
