

Installation of requirements on MacOS 10.11 (El Capitan)
``sudo pip install -r requirements.txt --global-option=build_ext --global-option="-I$(xcrun --show-sdk-path)/usr/include/sasl"``