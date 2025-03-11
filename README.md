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
nginx-jmeter-performance-testing/ │── tests/ │ ├── test-throughput.jmx # JMeter test plan for throughput testing
│ ├── test-type.jmx # JMeter test plan for request types
│ ├── test-size.jmx # JMeter test plan for payload size
│ ├── result-throughput.jtl # Results for throughput testing
│ ├── result-type.jtl # Results for request type testing
│ ├── result-size.jtl # Results for payload size testing
│ │── scripts/ │ ├── setup-nginx.sh # Script to configure Nginx
│ ├── monitor-cpu.sh # Script to capture real-time CPU usage
│ │── reports/ │ ├── summary-report.md # Performance test report
│ ├── charts/ # Graphs generated from test results
│ │── README.md # Project documentation
