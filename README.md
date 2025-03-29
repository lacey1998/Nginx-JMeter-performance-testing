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
├── records_pdf_docs/            # Directory that stores project records in PDF
├── LICENSE
├── README.md                    # Project Documentation 
├──iter2                         # Test files and documentation for iteration2
├── iter3                        # Test files and documentation for iteration3

# Uder iters:
├── records_pdf_docs/            # Directory that stores project records in PDF 
├── jmeter.log                   # JMeter execution logs
├── *.jmx                        # JMeter scripts (test plans)
├── *.jtl                        # Test resultss
├── *.jtl.gz                     # Compressed Test results for 500 users (view result: zcat result-500user-stress.jtl.gz | head -10)
├── *-report/                    # HTML test reports
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

### **Running JMeter Tests **
#### **1. Static Content Test Example**
```bash
jmeter -n -t test-static.jmx -l result-static.jtl -e -o  static-report/
```

#### **2. Dynamic Content Test Example**
```bash
jmeter -n -t test-dynamic.jmx -l result-dynamic.jtl -e -o  dynamic-report/
```

#### **3. File Size Testing (Small, Medium, Large) Examples**
```bash
jmeter -n -t test-size.jmx -l result-size.jtl -e -o size-report/
```

#### **4. User Load Stress Test Example**
```bash
jmeter -n -t test-user-stress.jmx -l result-user-stress.jtl -e -o user-report/
```

#### **5. Throughput Stress Test (RPS Testing ) Example **
```bash
jmeter -n -t test-throughput-stress.jmx -l result-throughput-stress.jtl -e -o throughput-report/
```

## **Video Demo**
📺 Watch our performance testing demonstration here: 
- Iteration2: https://youtu.be/e9FNH-5V7wg
- Iteration3: https://youtu.be/_Vyvhi0ncaA

## **License**
This project is licensed under the MIT License. See the LICENSE file for details.