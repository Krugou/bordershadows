import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      title: "Border & Shadow Showcase",
      subtitle: "A premium showcase of advanced Tailwind CSS techniques.",
      hoverClick: "Interact with the cards to see the logic in action.",
      footer: "© 2026 Border & Shadows Showcase. All components are reusable.",
      themes: {
        light: "Light",
        dark: "Dark"
      },
      effects: {
        neumorphism: {
          title: "Neumorphism",
          desc: "Soft UI depth using layered light and dark shadows for a tactile feel."
        },
        glassmorphism: {
          title: "Glassmorphism",
          desc: "Frosted glass effect using backdrop-blur and a subtle translucent border."
        },
        neon: {
          title: "Neon Cyberpunk",
          desc: "Vibrant glow effect using multi-layered colored shadows and thin borders."
        },
        gradient: {
          title: "Gradient Border",
          desc: "A moving gradient border achieved by wrapping the content in a gradient background."
        },
        depth: {
          title: "Depth Stack",
          desc: "Using 3+ layered boxes and shadows to create realistic physical elevation."
        },
        inset: {
          title: "Inset Glow",
          desc: "Inner shadow technique for an engraved or debossed appearance."
        },
        ring: {
          title: "Animated Ring",
          desc: "Multi-layer border rings with transitions on focus or hover states."
        },
        spotlight: {
          title: "Real-time Spotlight",
          desc: "A mouse-relative radial gradient that highlights portions of the card."
        },
        skew: {
          title: "Skew Slide",
          desc: "A dynamic background effect that slides and skews across the card on hover."
        },
        float: {
          title: "3D Float",
          desc: "A combination of translation, scaling, and dynamic shadow expansion."
        },
        reflection: {
          title: "Reflective Surface",
          desc: "CSS masks to create a mirrored bottom-fade reflection of internal elements."
        },
        liquid: {
          title: "Liquid Gradient",
          desc: "A smooth, colorful gradient that appears to flow around the border."
        }
      }
    }
  },
  fi: {
    translation: {
      title: "Reuna- ja varjoefektit",
      subtitle: "Korkeatasoinen esittely edistyneistä Tailwind CSS -tekniikoista.",
      hoverClick: "Vuorovaikuttele korttien kanssa nähdäksesi logiikan toiminnassa.",
      footer: "© 2026 Reuna- ja varjoefektit. Kaikki komponentit ovat uudelleenkäytettäviä.",
      themes: {
        light: "Vaalea",
        dark: "Tumma"
      },
      effects: {
        neumorphism: {
          title: "Neumorfismi",
          desc: "Pehmeä UI-syvyys kerrostetuilla valo- ja varjoefekteillä."
        },
        glassmorphism: {
          title: "Glassmorfismi",
          desc: "Huurteinen lasiefekti taustan sumennuksella ja läpikuultavalla reunalla."
        },
        neon: {
          title: "Neon Kyberpunk",
          desc: "Värisevä hohde moninkertaisilla värivarjoilla ja ohuilla reunoilla."
        },
        gradient: {
          title: "Gradienttireuna",
          desc: "Liikkuva liukuvärilaatikko saavutettuna gradienttitaustalla."
        },
        depth: {
          title: "Syvyyspino",
          desc: "Realistinen fyysinen kohoefekti useilla varjokerroksilla."
        },
        inset: {
          title: "Sisäinen hohde",
          desc: "Sisäänpäin kääntyvän varjoefekti kaiverrettuun ulkoasuun."
        },
        ring: {
          title: "Animoitu rengas",
          desc: "Monikerroksiset reunarenkaat sulavilla siirtymillä."
        },
        spotlight: {
          title: "Reaaliaikainen valokeila",
          desc: "Hiiren liikkeeseen reagoiva säteittäinen hohde."
        },
        skew: {
          title: "Vinoliuku",
          desc: "Dynaaminen taustaefekti, joka liukuu ja kääntyy vuorovaikutuksessa."
        },
        float: {
          title: "3D-leijunta",
          desc: "Yhdistelmä siirtoa, skaalausta ja dynaamista varjon laajenemista."
        },
        reflection: {
          title: "Heijastava pinta",
          desc: "CSS-maskit luomaan peilikuvamainen heijastus."
        },
        liquid: {
          title: "Nestemäinen gradientti",
          desc: "Sujuva, värikäs liukuväri, joka virtaa reunan ympärillä."
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
