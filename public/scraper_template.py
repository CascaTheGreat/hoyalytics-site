#Necessary imports
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By


# Set up the webdriver (optional argument to run headless)
options = webdriver.ChromeOptions()
#options.add_argument('--headless')

#initialize the webdriver to use the chrome browser
driver = webdriver.Chrome(service=Service(), options=options)

url = "https://hoyalytics.com"

#use selenium to load the webpage
driver.get(url)

input("Press Enter to quit the program...")

driver.quit()
