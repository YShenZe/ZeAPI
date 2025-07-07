import axios from 'axios'

export async function checkApiStatus(statusUrl) {
  try {
    await axios.get(statusUrl, { timeout: 5000 })
    return 200
  } catch (error) {
    return 400
  }
}