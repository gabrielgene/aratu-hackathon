from utils import create_browser
import time

def send_message():
  browser = create_browser()
  browser.get('https://twitter.com/login')

  user = 'BNotificator'
  login_input = browser.find_element_by_css_selector('input.js-username-field')
  login_input.click()
  login_input.send_keys(user)

  password = 'campusworkshop'
  pass_input = browser.find_element_by_css_selector('input.js-password-field')
  pass_input.click()
  pass_input.send_keys(password)

  time.sleep(1)
  button = browser.find_element_by_css_selector('button.submit')
  button.click()

  time.sleep(2)
  browser.get('https://twitter.com/gabrielgene_')
  browser.find_element_by_css_selector('button.NewTweetButton').click()

  tw_box = browser.find_element_by_css_selector('div#tweet-box-global')
  tw_box.click()
  tw_box.send_keys('Ola')

  browser.find_element_by_css_selector('div.TweetBoxToolbar > div.TweetBoxToolbar-tweetButton.tweet-button > button').click()

  time.sleep(10)




send_message()