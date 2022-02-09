export default () => ({
  development: process.env.NODE_ENV !== 'production' || true,
  port: Number.parseInt(process.env.PORT, 10) || 3000,
});
