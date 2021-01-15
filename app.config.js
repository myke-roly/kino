import 'dotenv/config';

export default {
  name: 'Kino',
  version: '1.0.0',
  extra: {
    enableComments: process.env.COOLAPP_COMMENTS === 'true',
  },
};
