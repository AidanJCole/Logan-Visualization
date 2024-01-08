import time
import redis
import random

cache = redis.Redis(host='redis', port=6379)
random.seed()

def main_loop():
    retries = 10
    while True:
        try:
            cache.rpush("queue", random.random())
            time.sleep(10)
        except redis.exceptions.ConnectionError as exc:
            if retries == 0:
                raise exc
            retries -= 1
            time.sleep(0.5)

if __name__ == "__main__":
    print("started")
    main_loop()