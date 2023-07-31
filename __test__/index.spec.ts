import test from 'ava'

import { Entry, AsyncEntry } from '../index'

const testPassword = 'napi.rs'
const testService = 'keyring-node-test-service'
const testUser = 'test-user'

test('Should create and get password back', (t) => {
  const entry = new Entry(testService, testUser)
  t.notThrows(() => entry.setPassword(testPassword))
  t.is(entry.getPassword(), testPassword)
  t.notThrows(() => entry.deletePassword())
})

test('Should create and get password back async', async (t) => {
  const entry = new AsyncEntry(testService, testUser)
  await t.notThrowsAsync(() => entry.setPassword(testPassword))
  t.is(await entry.getPassword(), testPassword)
  await t.notThrowsAsync(() => entry.deletePassword())
})
