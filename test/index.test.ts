import { test } from "node:test";
import assert from "node:assert/strict";
import { foo } from "../lib/index";

// *****************

test(async () => {
  let result = foo();
  assert.equal(result, 42);
});
