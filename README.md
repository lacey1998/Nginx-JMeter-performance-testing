# Nginx-JMeter-performance-testing

## 📌 Project Overview  
This project focuses on testing the performance of an **Nginx server** under different conditions using **Apache JMeter**. The goal is to evaluate **response times, throughput, CPU usage**, and **the impact of different request types and payload sizes**.

---

## 🚀 Features Tested  
- **Request Speed (Throughput)** – Measured how many requests per second the server can handle.  
- **Types of Requests** – Compared performance between `GET` and `POST` requests.  
- **Payload Size** – Tested how Nginx handles different sizes of data.  
- **CPU Usage Monitoring** – Checked real-time CPU load using `top`, `htop`, and `pidstat`.  

---

## 📂 Project Structure  
- **`tests/`** → Contains JMeter test plans and test results.  
- **`scripts/`** → Bash scripts for setting up Nginx and monitoring CPU usage.  
- **`reports/`** → Stores summary reports and visualized test data.  
- **`configs/`** → Holds configuration files for Nginx and JMeter.  
- **`logs/`** → Captures system and application logs for debugging.  
- **`README.md`** → Main documentation file for project overview.  
- **`PROJECT_STRUCTURE.md`** → This document for maintaining project structure details.  
