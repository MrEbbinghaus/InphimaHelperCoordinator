FROM python:3-alpine
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/
ADD EventShiftSchedule/requirements.txt /code/EventShiftSchedule/
RUN apk --no-cache add --update gcc --virtual build-dependencies musl-dev openldap-dev \
    && pip install -r requirements.txt \
    && apk del build-dependencies \
    && apk --no-cache add libldap
RUN apk --no-cache add sqlite && sqlite3 db.sqlite3 
ADD . /code/

EXPOSE 8000
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]