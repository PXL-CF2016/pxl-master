Gulpfile runs and creates the contents in the build directory.
Once you have everything built up, run this command: // gulp //


When testing for auth, launch client-server with command: // node client-server //

Then go to localhost:8080 and try it out.



To start: SSH + AWS + LED Board Listening
1. SSH into Raspberry Pi with command: ssh pi@172.16.7.152
2. In command line: aws configure
3. This will prompt you to insert your certs and keys
4. Insert your AWS Access Key ID
5. Insert your AWS Secret Access Key
6. Insert your Default Region (us-west-2)
7. Inster your Default Format (json)
8. Download cert from AWS IoT ()

Show time (pink)
(while :; do date +%T ; sleep 0.2 ; done) | sudo matrix/text-example -f matrix/fonts/8x13B.bdf -y10 -x32 -c4 -C255,0,255

Audio bars…
sudo matrix/led-matrix -c4 -D 9

Conways game...
sudo matrix/led-matrix -c4 -D 7

Show animated gif...
sudo matrix/led-image-viewer -b50 matrix/skelletor.gif

And it can also do text...
Start listening for messages from AWS IoT
node aws-iot-device-sdk-js/pxl-echo.js --thing-name PXL-CF2016 -f ~/.aws/certs


::: TO UPDATE FRONT END DEPLOYMENT :::

Current deployment is on heroku.

In order to update deployment:
1. Complete any changes to project files.
2. Run gulp on project repo.
3. Add-Commit-Push any changes to project repo.
4. Then copy contents of build folder to deployment repo, along with client-server.js.
5. npm init and npm i --save express
5. From that point, run git push heroku master from the deployment repo.
