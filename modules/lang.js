const languages = {
  en: {
    longStrings: {
      lessThanAMinute: "less than a minute",
      minute: "minute",
      hour: "hour",
      day: "day",
      week: "week",
      and: "and",
    },
    shortStrings: {
      lessThanAMinute: "< 1min",
      minute: "min",
      hour: "hr",
      day: "day",
      week: "wk",
      and: "&",
    },
    timeLeft: "Time left",
    countdownDone: "Countdown done",
    inlineNoMinutes: "no minutes",
    countingDown: "Counting down",
  },
  de: {
    longStrings: {
      lessThanAMinute: "weniger als eine Minute",
      minute: "Minute",
      minutes: "Minuten",
      hour: "Stunde",
      hours: "Stunden",
      day: "Tag",
      days: "Tage",
      week: "Woche",
      weeks: "Wochen",
      and: "und",
    },
    timeLeft: "Verbleibende Zeit",
    countdownDone: "Countdown abgeschlossen",
    inlineNoMinutes: "0 Minuten",
  },
  es: {
    longStrings: {
      lessThanAMinute: "menos de un minuto",
      minute: "minuto",
      hour: "hora",
      day: "día",
      week: "semana",
      and: "y",
    },
    timeLeft: "Tiempo restante",
    countdownDone: "Tiempo restante terminado",
    inlineNoMinutes: "0 minutos",
  },
  nl: {
    longStrings: {
      lessThanAMinute: "minder dan een minuut",
      minute: "minuut",
      minutes: "minuten",
      hour: "uur",
      hours: "uren",
      day: "dag",
      days: "dagen",
      week: "week",
      weeks: "weken",
      and: "en",
    },
    timeLeft: "Tijd over",
    countdownDone: "Aftellen over",
    inlineNoMinutes: "0 minuten",
  },
  tr: {
    longStrings: {
      lessThanAMinute: "bir dakikadan az",
      minute: "dakika",
      minutes: "dakika",
      hour: "saat",
      hours: "saat",
      day: "gün",
      days: "gün",
      week: "hafta",
      weeks: "hafta",
      and: "ve",
    },
    timeLeft: "kaldı",
    countdownDone: "Geri sayım tamamlandı",
    inlineNoMinutes: "0 dakika",
    countingDown: "Geri sayım devam ediyor",
  },
  hu: {
    longStrings: {
      lessThanAMinute: "Kevesebb, mint egy perc",
      minute: "perc",
      minutes: "perc",
      hour: "óra",
      hours: "óra",
      day: "nap",
      days: "nap",
      week: "hét",
      weeks: "hét",
      and: "és",
    },
    timeLeft: "hátra lévő idő",
    countdownDone: "Visszaszámlálás kész!",
    inlineNoMinutes: "0 perc",
    countingDown: "visszaszámláló",
  },
  ja: {
    longStrings: {
      lessThanAMinute: "1分内",
      minute: "分",
      minutes: "分",
      hour: "時間",
      hours: "時間",
      day: "日",
      days: "日",
      week: "週間",
      weeks: "週間",
      and: " ",
    },
    timeLeft: "残り時間 ",
    countdownDone: "終わり！",
    inlineNoMinutes: "0 分",
    countingDown: "カウントダウン",
  },
  id: {
    longStrings: {
      lessThanAMinute: "Kurang dari 1 menit",
      minute: "menit",
      minutes: "menit",
      hour: "jam",
      hours: "jam",
      day: "hari",
      days: "hari",
      week: "minggu",
      weeks: "minggu",
      and: "dan",
    },
    timeLeft: "Waktu yang tersisa",
    countdownDone: "Selesai!",
    inlineNoMinutes: "0 menit",
    countingDown: "Menghitung",
  },
  sv: {
    longStrings: {
      lessThanAMinute: "Mindre än en minut",
      minute: "minut",
      minutes: "minuter",
      hour: "timma",
      hours: "timmar",
      day: "dag",
      days: "dagar",
      week: "vecka",
      weeks: "veckor",
      and: "och",
    },
    timeLeft: "Tid kvar",
    countdownDone: "Nedräkning klar!",
    inlineNoMinutes: "inga minuter",
    countingDown: "Räknar ned",
  },
  ru: {
    longStrings: {
      lessThanAMinute: "меньше минуты",
      minute: "минута",
      hour: "час",
      day: "день",
      week: "неделя",
      and: "и",
    },
    shortStrings: {
      lessThanAMinute: "< 1мин",
      minute: "мин",
      hour: "ч",
      day: "д",
      week: "н",
      and: "и",
    },
    timeLeft: "Оставшееся время",
    countdownDone: "Обратный отсчет завершен",
    inlineNoMinutes: "0 минут",
    countingDown: "Отсчет",
  },
  cy: {
    longStrings: {
      lessThanAMinute: "llai na munud",
      minute: "munud",
      hour: "awr",
      day: "dydd",
      week: "wythnos",
      and: "a",
    },
    shortStrings: {
      lessThanAMinute: "< 1mun",
      minute: "mun",
      hour: "awr",
      day: "dydd",
      week: "wthns",
      and: "a",
    },
    timeLeft: "Amser i fynd",
    countdownDone: "Amserydd wedi'i gorffen",
    inlineNoMinutes: "dim munudau",
    countingDown: "Cyfri i lawr",
  },
  no: {
    longStrings: {
      lessThanAMinute: "mindre enn ett minutt",
      minute: "minutt",
      minutes: "minutter",
      hour: "time",
      hours: "timer",
      day: "dag",
      days: "dager",
      week: "uke",
      weeks: "uker",
      and: "og",
    },
    timeLeft: "Tid igjen",
    countdownDone: "Nedtelling ferdig",
    inlineNoMinutes: "ingen minutter",
    countingDown: "Teller ned",
  },
  fa: {
    longStrings: {
      lessThanAMinute: "کمتر از یک دقیقه",
      minute: "دقیقه",
      hour: "ساعت",
      day: "روز",
      week: "هفته",
      and: "و",
    },
    timeLeft: "زمان باقی مانده",
    countdownDone: "شمارش معکوس تمام شد",
    inlineNoMinutes: "بدون دقیقه",
    countingDown: "شمارش معکوس",
  },
  it: {
    longStrings: {
      lessThanAMinute: "meno di un Minuto",
      minute: "Minuto",
      minutes: "Minuti",
      hour: "Ora",
      hours: "Ore",
      day: "Giorno",
      days: "Giorni",
      week: "Settimana",
      weeks: "Settimane",
      and: "e",
    },
    timeLeft: "Tempo rimanente",
    countdownDone: "Tempo scaduto",
    inlineNoMinutes: "0 minuti",
    countingDown: "Conto alla rovescia",
  },
};

export const availableLanguages = Object.keys(languages);

const getProp = (text, obj) => text.split(".").reduce((obj, val) => obj && obj[val], obj);

export const t = (text, langCode = "en") =>
  getProp(text, languages[langCode]) || getProp(text, languages.en);
