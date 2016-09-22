# Inphima Helper Coordinator
[![GitHub version](https://badge.fury.io/gh/MrOerni%2FInphimaHelperCoordinator.svg)](https://badge.fury.io/gh/MrOerni%2FInphimaHelperCoordinator)
[![Code Climate](https://img.shields.io/codeclimate/github/MrOerni/InphimaHelperCoordinator/badges/gpa.svg)](https://codeclimate.com/github/MrOerni/InphimaHelperCoordinator)

###### Builds:
[![Travis master branch](https://img.shields.io/travis/MrOerni/InphimaHelperCoordinator/master.svg?label=master)](https://travis-ci.org/MrOerni/InphimaHelperCoordinator)
[![Travis develop branch](https://img.shields.io/travis/MrOerni/InphimaHelperCoordinator/develop.svg?label=develop)](https://travis-ci.org/MrOerni/InphimaHelperCoordinator)

## Party Shift Scheduler
A tool to organize a useful shift planning tool for events.

## Getting started
tl;dr
```bash
git clone https://github.com/MrOerni/InphimaHelperCoordinator.git
cd InphimaHelperCoordinator
mkdir ihc-venv  # or whereever you want to place it
mkvirtualenv -p PATH_TO_PYTHON3_INTERPRETER ihc-venv
source ihc-venc/bin/activate
pip3 install -r requirements.txt
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py createsuperuser
python3 manage.py runserver
```


#### Step 1:
clone

Create a local copy of the Project
```bash
git clone --recursive https://github.com/MrOerni/InphimaHelperCoordinator.git
cd InphimaHelperCoordinator
```

#### Step 2 (optional):
virtualenv

Create a [virtualenv](http://docs.python-guide.org/en/latest/dev/virtualenvs/), so you have a clean working environment for the project
```bash
mkdir ihc-venv  or wherever you want to place it
mkvirtualenv -p PATH_TO_PYTHON3_INTERPRETER ihc-venv
source ihc-venc/bin/activate
```

I highly recommend you to install [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/) for an easy work flow.

#### Step 3:
install requirements

This will install all the requirements to your virtualenv.
```bash
pip3 install -r requirements.txt
```


#### Step 4:
make migration scripts

The scripts will be made from every models.py. They create new tables in your database or alter them according to possible changes.
```bash
python3 manage.py makemigrations
```


#### Step 5:
migrate database

Now run the scripts from Step 4..
```bash
python3 manage.py migrate
```

#### Step 6:
create super-user

Create a user to manage your installation from the web browser. You can edit database tables which you register in `admin.py` in the related app.
```bash
python3 manage.py createsuperuser
```

#### Step 7:
run

If this runs without any warning the server is up. Visit `localhost:8000` with your favorite web browser.
```bash
python3 manage.py runserver
```

#### Step 8:
...