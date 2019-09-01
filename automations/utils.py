from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import json
import time

def save_data(data):
    with open("data.json", "w") as outfile:
        json.dump(data, outfile)

def twitter_login(browser):
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


def create_browser():
    # Define as configuracoes
    chrome_options = Options()
#     prefs = {"profile.managed_default_content_settings.images": 2}
#     chrome_options.add_experimental_option("prefs", prefs)
#     chrome_options.add_argument("--headless")

    chromedriver_path = "./chromedriver"

    return webdriver.Chrome(
        chromedriver_path,
        options=chrome_options,
    )