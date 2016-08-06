# Inphima Helper Coordinator
[![GitHub version](https://badge.fury.io/gh/MrOerni%2FInphimaHelperCoordinator.svg)](https://badge.fury.io/gh/MrOerni%2FInphimaHelperCoordinator)
[![Build Status](https://travis-ci.org/MrOerni/InphimaHelperCoordinator.svg?branch=master)](https://travis-ci.org/MrOerni/InphimaHelperCoordinator)
[![Code Climate](https://codeclimate.com/github/MrOerni/InphimaHelperCoordinator/badges/gpa.svg)](https://codeclimate.com/github/MrOerni/InphimaHelperCoordinator)
## Party Shift Scheduler
A tool to organize a usefull shift planning tool for partys.



## Getting started
tl;dr
```bash
git clone https://github.com/MrOerni/InphimaHelperCoordinator.git
cd InphimaHelperCoordinator
mkdir ihc-venv  # or whatever your want to call it
mkvirtualenv -p PATH_TO_PYTHON3_INTERPRETER ihc-venv
pip3 install -r requirements.txt #  watchout on MacOS 10.11 (consider the tip below)
python3 manage.py migrate
python3 manage.py createsuperuser
python3 manage.py runserver
```


#### Step 1:
clone
```bash
git clone https://github.com/MrOerni/InphimaHelperCoordinator.git
cd InphimaHelperCoordinator
```

#### Step 2 (optional):
virtualenv

Create a [virtualenv](http://docs.python-guide.org/en/latest/dev/virtualenvs/).
```bash
mkdir ihc-venv  # or whatever your want to call it
mkvirtualenv -p PATH_TO_PYTHON3_INTERPRETER ihc-venv
```

#### Step 3:
install requirements

```bash
pip3 install -r requirements.txt
```

###### Installation of requirements on MacOS 10.11 (El Capitan)
```bash
pip3 install -r requirements.txt --global-option=build_ext --global-option="-I$(xcrun --show-sdk-path)/usr/include/sasl"
```

#### Step 4:
migrate database
```bash
python3 manage.py migrate
```

#### Step 5:
create super-user

Create a user to manage your installation from the webbrowser.
```bash
python3 manage.py createsuperuser
```

#### Step 6:
run

If this runs without any warning the server is up. Visit `localhost:8000` with your favourite webbrowser.
```bash
python3 manage.py runserver
```

#### Step 7:

