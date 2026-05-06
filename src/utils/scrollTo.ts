export const scrollTo = (id: string, callback?: () => void) => {
  if (callback) callback();
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
