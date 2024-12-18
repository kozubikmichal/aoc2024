import fs from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = await fs.readFile(__dirname + "/input.txt", "utf-8");

export default input;
