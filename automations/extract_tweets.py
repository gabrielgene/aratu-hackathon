from utils import create_browser, twitter_login
from pymongo import MongoClient
import time
import re

def paginate(retries, browser):
  for i in range(retries):
    print("Scroll {}".format(i))
    browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")
    time.sleep(4)


def extract_tweets():
  client = MongoClient('mongodb://gene:gene123@ds137763.mlab.com:37763/react-basic?retryWrites=false')
  coll = client['react-basic'].twitter
  browser = create_browser()
  twitter_login(browser)

  browser.get('https://twitter.com/search?q=%23aratuon&src=typed_query')
  time.sleep(3)
  paginate(5, browser)

  tweets = browser.find_elements_by_css_selector('#react-root > div > div > div > main > div > div > div > div > div > div:nth-child(2) > div > div > section > div > div > div > div > div > article')
  for t in tweets:
    username = t.find_element_by_css_selector('a').get_attribute('href')
    tweet = t.find_element_by_css_selector('div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)').text
    tweet_time = t.find_element_by_css_selector('time').get_attribute('datetime')

    print(username)
    print(tweet)
    print(tweet_time)
    twitter_data = {}
    twitter_data['username'] = username
    twitter_data['tweet'] = tweet
    twitter_data['tweet_time'] = tweet_time
    twitter_data['receive_dm'] = False
    if re.search("#hackatonaratu", tweet):
      twitter_data['receive_dm'] = True

    data_id = coll.insert_one(twitter_data).inserted_id
    print(data_id)

  print('Find...')
  time.sleep(3)
  for doc in coll.find({ 'receive_dm' : True }):
    print(doc)



extract_tweets()