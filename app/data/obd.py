from os import write

import obd
import random
import asyncio

rpm = 1000
coolant_temp = 100
engine_load = 75
vehicle_speed = 51

def simulate_obd_data():
    # Simulate data for the OBD2 sensors (for demonstration purposes)
    rpm = random.randint(800, 7000)
    vehicle_speed = random.randint(0, 240)
    coolant_temp = random.randint(70, 110)
    engine_load = random.randint(9, 100)

async def write_data():
    print(rpm)
    print(vehicle_speed)
    file = open("data.txt","w")
    file.write(';RPM:' + str(rpm)
               + ';COOLANT_TEMP:' + str(coolant_temp)
               + ';engine_load:' + str(engine_load)
               + ';vehicle_speed:' + str(vehicle_speed))
    file.close()
    await asyncio.sleep(1)

async def main():
    simulate_obd_data()
    await write_data()
asyncio.run(main())