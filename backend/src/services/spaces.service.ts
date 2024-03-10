import * as fs from "fs";
import * as path from "path";

export function getSpaces(userId: string) {
  const userFolder = path.join(__dirname, `../data/${userId}`);

  if (!fs.existsSync(userFolder)) {
    fs.mkdirSync(userFolder);
  }

  const spaces = fs.readdirSync(userFolder);

  return spaces;
}
