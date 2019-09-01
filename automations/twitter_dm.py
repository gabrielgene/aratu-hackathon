from utils import create_browser
from pymongo import MongoClient
from datetime import datetime
import random
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

  client = MongoClient('mongodb://gene:gene123@ds137763.mlab.com:37763/react-basic?retryWrites=false')
  coll = client['react-basic'].twitter
  for doc in coll.find({ 'receive_dm' : True }):
    print(doc['username'])
    browser.get(doc['username'])
    time.sleep(2)
    browser.find_element_by_xpath('//a[@data-testid="SideNav_NewTweet_Button"]').click()
    time.sleep(1)

    tw_box = browser.find_element_by_css_selector('div.DraftEditor-editorContainer > div')
    tw_box.send_keys("Nosso 1º hackaton está chegando ao fim! Que tal nos dizer algo sobre a sua experiência? Acesse o link para enviar o seu feedback. https://aratu-web.gabrielgene.now.sh/tw/{} {}".format(doc['_id'], random.randint(1,101)))

    browser.find_element_by_xpath('//div[@data-testid="tweetButton"]').click()
    time.sleep(3)

send_message()