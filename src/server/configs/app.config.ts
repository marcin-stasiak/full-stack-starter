import { registerAs } from '@nestjs/config';

import * as appPackage from '../../../package.json';

export default registerAs('app', () => ({
  language: process.env.APP_LANGUAGE || 'en',
  name: appPackage.name,
  description: appPackage.description,
  version: appPackage.version,
}));
