import { test, expect } from 'vitest'

test.concurrent('test', () => {
  expect(1 + 1).toBe(2)
})
