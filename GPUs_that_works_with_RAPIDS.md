# Prerequisites
The RAPIDS AI GPU accelerated data science suite runs on all GPUs with NVIDIA Pascal architecture (or better) and compute capability 6.0+.

Users must also have CUDA 10.1.2+ with corresponding NVIDIA Driver, and either an Ubuntu or a CentOS operating system.


Supported packages include:
* cuDF — GPU DataFrame Library
* cuML — RAPIDS Machine Learning Library
* BlazingSQL — lightweight, GPU accelerated, SQL engine built on RAPIDS

## Supported GPUs
The following is a list of RAPIDS compatible GPUs in alphabetical order by type including: GeForce, GeForce Notebook, Jetson, Quadro Desktop, Quadro Mobile, Tesla, and Titan.

## GeForce

### GeForce Products
* GeForce RTX 3090
* GeForce RTX 3080
* GeForce RTX 3070
* Geforce RTX 2080 Ti
* Geforce RTX 2080
* Geforce RTX 2070
* Geforce RTX 2060
* GeForce GTX 1080 Ti
* GeForce GTX 1080
* GeForce GTX 1070
* GeForce GTX 1060
* GeForce GTX 1050
### GeForce Notebook Products
* Geforce RTX 2080
* Geforce RTX 2070
* Geforce RTX 2060
* GeForce GTX 1080
* GeForce GTX 1070
* GeForce GTX 1060
## Jetson
### Jetson Products
* Jetson AGX Xavier
* Jetson TX2
## Quadro
### Quadro Desktop Products
* Quadro RTX 8000
* Quadro RTX 6000
* Quadro RTX 5000
* Quadro RTX 4000
* Quadro GV100
* Quadro P6000
* Quadro P5000
* Quadro P4000
* Quadro P2000
* Quadro P1000
* Quadro P620
* Quadro P600
* Quadro P400
* Quadro GP100
### Quadro Mobile Products
* RTX 5000
* RTX 4000
* RTX 3000
* T2000
* T1000
* P620
* P520
* Quadro P5200
* Quadro P4200
* Quadro P3200
* Quadro P5000
* Quadro P4000
* Quadro P3000
* Quadro P2000
* Quadro P1000
* Quadro P600
* Quadro P500
## Tesla
### NVIDIA Data Center Products
* NVIDIA A100
* NVIDIA T4
* NVIDIA V100
* Tesla P40
* Tesla P4
* Tesla P100
## TITAN
### TITAN Products
* NVIDIA TITAN RTX
* NVIDIA TITAN X
* NVIDIA TITAN Xp
* NVIDIA TITAN V
All of these GPUs have 6+ compute capability with the lowest being the Quadro GP100 at exactly 6.0, the highest being a 13-way tie between Tesla T4 and everything RTX at 7.5, and most others hanging around 6.1.