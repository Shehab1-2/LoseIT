import time
from selenium import webdriver
from selenium.webdriver.edge.service import Service
from selenium.webdriver.edge.options import Options

# Set the path to the Edge WebDriver
edge_driver_path = "/Applications/edgedriver_mac64_m1/msedgedriver"

# Set up Edge options
edge_service = Service(edge_driver_path)
driver = webdriver.Edge(service=edge_service)

# Open a webpage
driver.get("https://www.google.com")

# Keep the browser open for 10 seconds
time.sleep(10)

# Close the browser
driver.quit()
