import time

import redis
from flask import Flask, jsonify, render_template

app = Flask(__name__)
cache = redis.Redis(host='redis', port=6379, decode_responses=True)

@app.route('/')
def hello():
    return render_template('index.html')
	
@app.route('/get_data')
def get_data():
	data = cache.lrange("queue", 0, -1)
	data_dict = list(zip(data, range(len(data))))
	return jsonify(data_dict)