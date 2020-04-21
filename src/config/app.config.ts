import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
    name: process.env.APP_NAME || 'Watchlist Service',
    url: process.env.APP_URL || 'http://localhost:3000',
    timeZone: process.env.TZ,
    withCron: process.env.APP_WITH_CRON,
    country: process.env.APP_COUNTRY,
    lang: process.env.APP_LANG,
}));
