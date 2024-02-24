interface appConfig {
  FLICKER_API_KEY: string;
  PORT: number;
}
interface ENV {
  FLICKER_API_KEY: string | undefined,
  PORT:number
}
const getConfig = (): ENV => {
  return {
    FLICKER_API_KEY : process.env.FLICKER_API_KEY,
    PORT: parseInt(process.env.PORT || "3000", 10),
  };
};

const getSanitzedConfig = (config: ENV): ENV => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as appConfig;
};

export default getSanitzedConfig(getConfig());