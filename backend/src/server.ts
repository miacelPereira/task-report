import app from ".";

const PORT = process.env.PORT || "3300";

app.listen(PORT, () => {
  console.log(`[server] listening on port ${PORT}`);
});
