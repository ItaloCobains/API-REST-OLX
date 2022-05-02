import { server } from "./app";

import "dotenv/config";

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(
    "🚀 Express App has been started\n🍏 Link -> http://localhost:" + PORT,
  );
});
