export const chatTree = {
  // START
start: {
  message: "Hi! I'm your CC Palette assistant! If you have a question, choose a topic below or type it:",
  options: [
    { id: "pricing", label: "Pricing" },
    { id: "timeline", label: "Timeline" },
    { id: "types", label: "Types of websites" },
    { id: "contact", label: "Contact us" },
    { id: "process", label: "Process" },
    { id: "portfolio", label: "Portfolio" }
  ]
},


  // CONTACT
  contact: {
    message: "Choose how you'd like to get in touch:",
    options: [
      { id: "email", label: "Email — creative.code.palette" },
      { id: "form", label: "Contact form" },
      { id: "back", label: "Back" }
    ]
  },

  email: {
    message:
      "You can email me anytime at creative.code.palette. I'll open your email app now.",
    action: "email", 
    options: [{ id: "back", label: "Back" }]
  },

  form: {
    message:
      "The contact form is coming soon! Meanwhile, feel free to email me directly.",
    options: [{ id: "back", label: "Back" }]
  },

  // PRICING
  pricing: {
    message: "Which pricing category?",
    options: [
      { id: "price-visit", label: "Business card website" },
      { id: "price-booking", label: "Booking website" },
      { id: "price-portfolio", label: "Portfolio / personal site" },
      { id: "price-shop", label: "Online store" },
      { id: "back", label: "Back" }
    ]
  },

  "price-visit": {
    message:
      "A simple, elegant one-page website. Typical range: $250–$350 depending on structure and content.",
    options: [{ id: "back", label: "Back" }]
  },

  "price-booking": {
    message:
      "Booking / scheduling website with calendar and optional payment system. Typical range: $450–$700.",
    options: [{ id: "back", label: "Back" }]
  },

  "price-portfolio": {
    message:
      "Portfolio website with a custom gallery and personal branding. Typical range: $300–$500.",
    options: [{ id: "back", label: "Back" }]
  },

  "price-shop": {
    message:
      "Full online store with product catalog, cart, and checkout. Starting at $800.",
    options: [{ id: "back", label: "Back" }]
  },

  // TIMELINE
  timeline: {
    message: "Which project timeline are you curious about?",
    options: [
      { id: "timing-visit", label: "Business card website" },
      { id: "timing-booking", label: "Booking website" },
      { id: "timing-shop", label: "Online store" },
      { id: "back", label: "Back" }
    ]
  },

  "timing-visit": {
    message: "A business card website typically takes 3–5 days.",
    options: [{ id: "back", label: "Back" }]
  },

  "timing-booking": {
    message: "A booking website usually takes 5–10 days.",
    options: [{ id: "back", label: "Back" }]
  },

  "timing-shop": {
    message: "An online store usually takes 2–3 weeks.",
    options: [{ id: "back", label: "Back" }]
  },

  // TYPES OF WEBSITES
  types: {
    message: "Choose a type of website:",
    options: [
      { id: "type-visit", label: "Business card website" },
      { id: "type-landing", label: "Landing page" },
      { id: "type-booking", label: "Booking / scheduling website" },
      { id: "type-catalog", label: "Catalog website" },
      { id: "type-portfolio", label: "Portfolio" },
      { id: "back", label: "Back" }
    ]
  },

  "type-visit": {
    message:
      "A simple one-page website that introduces your business and services.",
    options: [{ id: "back", label: "Back" }]
  },

  "type-landing": {
    message:
      "A long-form landing page designed for conversions, promotions, and presentations.",
    options: [{ id: "back", label: "Back" }]
  },

  "type-booking": {
    message:
      "A powerful site with a scheduling system for appointments—perfect for salons, studios, and coaches.",
    options: [{ id: "back", label: "Back" }]
  },

  "type-catalog": {
    message:
      "A clean product or work catalog without checkout functionality.",
    options: [{ id: "back", label: "Back" }]
  },

  "type-portfolio": {
    message:
      "A sleek and modern portfolio to showcase your projects and personal brand.",
    options: [{ id: "back", label: "Back" }]
  },

  // PROCESS
  process: {
    message: "Which part of the process would you like to know about?",
    options: [
      { id: "proc-questionnaire", label: "Questionnaire" },
      { id: "proc-preview", label: "Concept preview" },
      { id: "proc-edits", label: "Revisions" },
      { id: "proc-handoff", label: "Final delivery" },
      { id: "back", label: "Back" }
    ]
  },

  "proc-questionnaire": {
    message:
      "A short questionnaire helps me understand your goals, style preferences, and project scope.",
    options: [{ id: "back", label: "Back" }]
  },

  "proc-preview": {
    message:
      "You receive a preview of the structure and visual style before I build the final version.",
    options: [{ id: "back", label: "Back" }]
  },

  "proc-edits": {
    message: "Two rounds of revisions are included in every project.",
    options: [{ id: "back", label: "Back" }]
  },

  "proc-handoff": {
    message:
      "You receive the completed project files and instructions for use after the final approval.",
    options: [{ id: "back", label: "Back" }]
  },

  // PORTFOLIO
  portfolio: {
    message: "What would you like to see?",
    options: [
      { id: "pf-websites", label: "Websites" },
      { id: "pf-logos", label: "Logos" },
      { id: "pf-illustrations", label: "Illustrations" },
      { id: "pf-templates", label: "Templates" },
      { id: "back", label: "Back" }
    ]
  },

  "pf-websites": {
    message: "You can explore my website projects here: https://ccpalette.com/projects",
    options: [{ id: "back", label: "Back" }]
  },

  "pf-logos": {
    message: "Logo collection coming soon!",
    options: [{ id: "back", label: "Back" }]
  },

  "pf-illustrations": {
    message: "Illustrations gallery is being prepared!",
    options: [{ id: "back", label: "Back" }]
  },

  "pf-templates": {
    message: "Creative templates will be available soon!",
    options: [{ id: "back", label: "Back" }]
  }
};
