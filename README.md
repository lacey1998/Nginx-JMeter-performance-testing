# Nginx-JMeter-performance-testing

## 📌 Project Overview  
This project focuses on testing the performance of an **Nginx server** under different conditions using **Apache JMeter**. The goal is to evaluate **response times, throughput, CPU usage**, and **the impact of different request types and payload sizes**.

---

## 🚀 Features Tested  
This repository contains JMeter test plans and results for performance testing of an Nginx server under different load conditions. The testing covers:
- **Static vs. Dynamic Content Performance**
- **Testing Different File Sizes (Small, Medium, Large)**
- **Stress Testing Based on User Load**
- **Stress Testing Based on Throughput (Requests Per Second - RPS)**

---

## 📂 Project Structure  
```
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
```
## Setup and Usage
### **Prerequisites**
- AWS EC2 instance with Ubuntu
- Nginx installed and configured
- Apache JMeter installed
- Git installed

### **Clone the Repository**
```bash
git clone https://github.com/lacey1998/Nginx-JMeter-performance-testing.git
cd Nginx-JMeter-performance-testing
```

### **Running JMeter Tests**
#### **1. Static Content Test**
```bash
jmeter -n -t test-static.jmx -l result-static.jtl
```

#### **2. Dynamic Content Test**
```bash
jmeter -n -t test-dynamic-0312.jmx -l result-dynamic.jtl
```

#### **3. File Size Testing (Small, Medium, Large)**
```bash
jmeter -n -t test-size-0312.jmx -l result-small.jtl  # Small file test
jmeter -n -t test-size-0312.jmx -l result-medium.jtl # Medium file test
jmeter -n -t test-size-0312.jmx -l result-large.jtl  # Large file test
```

#### **4. User Load Stress Test**
```bash
jmeter -n -t test-user-stress.jmx -l result-200user-stress.jtl # 200 users
jmeter -n -t test-user-stress.jmx -l result-500user-stress.jtl # 500 users
```

#### **5. Throughput Stress Test (RPS Testing)**
```bash
jmeter -n -t test-throughput-stress.jmx -l result-700rps-stress.jtl  # 700 RPS
jmeter -n -t test-throughput-stress.jmx -l result-2000rps-stress.jtl # 2000 RPS
```
## **Results Analysis**
### **Static vs. Dynamic Content Performance**
- Static content had lower response times and better throughput.
- Dynamic content showed variable latency based on concurrent requests.

### **File Size Impact**
- Small files (~10KB) had minimal latency.
- Medium files (~500KB) showed a slight increase in response time.
- Large files (~5MB) had significantly higher response times.

### **User Load Stress Test Findings**
- With 200 users, max CPU usage was **32.3%**, and response times were stable.
- At 500 users, some slowdowns occurred, but errors remained **0%**.
- No system crashes observed under expected limits.

### **Throughput Stress Test Findings**
- At **700 RPS**, the system handled requests efficiently.
- At **2000 RPS**, response times increased but remained within acceptable limits.
- At **5000 RPS**, the server struggled, and CPU dropped to **0%**, indicating a possible overload or bottleneck.

## **Video Demo**
📺 Watch our performance testing demonstration here: https://youtu.be/e9FNH-5V7wg

## **License**
This project is licensed under the MIT License. See the LICENSE file for details.
