import { test, expect } from "bun:test";
import "../src/index";

import { getStatus } from "@shared/api";

test("Server is running", async () => {
  const data = await getStatus();
  expect(data.status).toBe("ok");
});
