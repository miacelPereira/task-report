import app from ".";

const PORT = process.env.PORT || "3355";

app.listen(PORT, () => {
  console.log(`[server] listening on port ${PORT}`);
});
