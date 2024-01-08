# syntax=docker/dockerfile:1
FROM python:3.11-slim-bookworm
WORKDIR /code
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
COPY . .
CMD [ "python3", "data_source.py" ]