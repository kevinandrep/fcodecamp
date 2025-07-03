// @ts-check
import {test, expect} from '@playwright/test'

const URL = 'http://localhost:5173'
const PREFIX = 'https://cataas.com'

test('shows fact and image', async ({page}) => {
  await page.goto(URL)

  const text = await page.locator('p') // HTML tag selector

  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(PREFIX)).toBeTruthy()
})
