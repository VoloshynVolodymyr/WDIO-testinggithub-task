export function generateRandomEmail() {
  return `test${Date.now()}_${Math.random().toString(36).substring(7)}@example.com`
}

export function generateRandomUsername() {
  return `testuser_${Date.now()}_${Math.random().toString(36).substring(7)}`
}

export function generateRandomPassword() {
  return `Test${Math.random().toString(36).substring(7)}!123`
}

export async function waitForSeconds(seconds) {
  await browser.pause(seconds * 1000)
}

export async function clearAndSetValue(element, value) {
  await element.click()
  await browser.keys(['Control', 'a'])
  await browser.keys('Delete')
  await element.setValue(value)
}
