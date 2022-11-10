export const apiConfig = () => {
  const config = (window as any).__CONFIG__;
  delete (window as any).__CONFIG__;

  return config.api;
};