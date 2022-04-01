export default () => ({
  development: process.env.NODE_ENV !== 'production',
  port: Number.parseInt(process.env.PORT as string, 10) || 3000,
});
