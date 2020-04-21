import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
    timeZone: process.env.TZ,
}));
