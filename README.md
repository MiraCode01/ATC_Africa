This is a task on the path to learning DevOps. It is aimed at deploying a static website on Nginx. The procedure is listed below
This project has been done earlier some months ago so I just had to do some little tweaks on the code.
The task began from creating an instance on EC2 using AWS. The Ubuntu OS was made use of and a key pair added while allowing SSH and HTTP
The next step was to be able to access the key. Moving into the correct directory for eacsy access and setting permissions and including my instance ID.
Creating a new repo was the next. And my code was pushed here using git commands on the terminal.
The next thing to do was to install and configure Nginx using git bash and this enabled the sudo command line
Using sudo, a clone for my repo was made and created the Nginx configuration file, enabling it and then restarting
The final step was to verify if my deployment was made using the instance IP address.
