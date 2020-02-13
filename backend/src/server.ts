import app from ".";

const PORT = process.env.PORT || "3355";

enum TERMINAL_COLORS {
  RED = "\u001b[0;31m",
  GREEN = "\u001b[0;32m",
  YELLOW = "\u001b[0;33m",
  BLUE = "\u001b[0;34m",
  PURPLE = "\u001b[0;35m",
  CYAN = "\u001b[0;36m"
}

app.listen(PORT, () => {
  console.log(`${TERMINAL_COLORS.CYAN}[server] listening on port ${PORT}`);
});
