from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Шлях до драйвера браузера
driver_path = 'path/to/your/chromedriver'

# Створюємо екземпляр браузера
driver = webdriver.Chrome(executable_path=driver_path)

# Перехід на сайт калькулятора
driver.get('http://www.aqadvisor.com')

# Зачекайте, поки сторінка завантажиться
time.sleep(5)

# Приклад введення розмірів акваріума (замініть на актуальні поля)
length_input = driver.find_element(By.NAME, 'length')  # Знайти поле для довжини
depth_input = driver.find_element(By.NAME, 'depth')    # Знайти поле для глибини
height_input = driver.find_element(By.NAME, 'height')  # Знайти поле для висоти

# Введіть розміри акваріума (наприклад, 24 дюйми на довжину, 12 дюймів на глибину, 18 дюймів на висоту)
length_input.send_keys('24')
depth_input.send_keys('12')
height_input.send_keys('18')

# Заповнення інших параметрів, наприклад, вибір фільтра чи риб
# (Ці поля треба буде знайти на сторінці, схоже, через їх атрибути NAME або ID)

# Надіслати форму для отримання результатів
submit_button = driver.find_element(By.XPATH, "//input[@value='Submit']")
submit_button.click()

# Чекаємо кілька секунд, поки сторінка оновиться
time.sleep(5)

# Тепер ви можете отримати результат, наприклад, результат з таблиці або тексту
result = driver.find_element(By.ID, 'stocking-results')  # Приклад ідентифікатора результату
print(result.text)

# Закриваємо браузер
driver.quit()
