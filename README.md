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
├── LICENSE
├── README.md                  # Project Documentation
├── jmeter.log                 # JMeter execution logs
├── test-dynamic-0312.jmx      # JMeter script for dynamic requests
├── test-size-0312.jmx         # JMeter script for different file sizes
├── test-static.jmx            # JMeter script for static content
├── test-user-stress.jmx       # User-based stress testing
├── test-throughput-stress.jmx # Throughput-based load testing
├── result-200user-stress.jtl  # Test results for 200 users
├── result-500user-stress.jtl  # Test results for 500 users
├── result-700rps-stress.jtl   # Test results for 700 RPS
├── result-2000rps-stress.jtl  # Test results for 2000 RPS
├── result-dynamic.jtl         # Test results for dynamic content
├── result-static.jtl          # Test results for static content
├── result-small.jtl           # Test results for small file requests
├── result-medium.jtl          # Test results for medium file requests
├── result-large.jtl           # Test results for large file requests

