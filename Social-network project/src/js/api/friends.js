/**
 * Mocking client-server processing
 */
import _friends from 'json!./friends.json'

const TIMEOUT = 100

export default {
  getFriends: (cb, timeout) => setTimeout(() => cb(_friends), timeout || TIMEOUT),
}
