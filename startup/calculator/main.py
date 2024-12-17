import pandas as pd

# Припустимо, що дані риб збережено в CSV файлі, наприклад fish.csv
df = pd.read_csv('fish.csv')


# Функція для обчислення кількості риб, які можуть поміститися в акваріум
def calculate_fish_capacity(aquarium_volume, fish_data):
    fish_capacity = 0
    for _, fish in fish_data.iterrows():
        # Отримуємо розмір риби (наприклад, 'Small', 'Medium', 'Large', 'XX-Large')
        size = fish['Size']

        # Кількість місця, яке займає кожна риба в акваріумі, залежно від її розміру
        if size == 'Small':
            space_required = 0.5  # 0.5 куб.м для маленької риби
        elif size == 'Medium':
            space_required = 1  # 1 куб.м для середньої риби
        elif size == 'Large':
            space_required = 2  # 2 куб.м для великої риби
        elif size == 'XX-Large':
            space_required = 4  # 4 куб.м для дуже великої риби
        else:
            space_required = 1  # За замовчуванням

        # Перевірка, скільки риб можна помістити в акваріум
        fish_capacity += int(aquarium_volume // space_required)

    return fish_capacity


# Вхідні дані
aquarium_volume = float(input("Введіть об'єм акваріума в кубічних метрах: "))
fish_data = df  # Використовуємо дані з CSV файлу

# Обчислення кількості риб, які можуть поміститися в акваріум
capacity = calculate_fish_capacity(aquarium_volume, fish_data)

print(f"Максимальна кількість риб, яку можна помістити в акваріум об'ємом {aquarium_volume} куб.м: {capacity}")
