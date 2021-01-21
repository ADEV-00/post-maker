const API_URL = 'https://type.fit/api/quotes';

export const getRandomQuote = async () => {
  const ress = await fetch(API_URL).then((x) => x.json());
  const randomQuote = ress[Math.floor(Math.random() * ress.length)];
  return randomQuote.text;
};
