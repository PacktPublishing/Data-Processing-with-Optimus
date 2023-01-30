


# Data Processing with Optimus

<a href="https://www.packtpub.com/product/data-processing-with-optimus/9781801079563?utm_source=github&utm_medium=repository&utm_campaign=9781801079563"><img src="https://static.packt-cdn.com/products/9781801079563/cover/smaller" alt="Data Processing with Optimus" height="256px" align="right"></a>

This is the code repository for [Data Processing with Optimus](https://www.packtpub.com/product/data-processing-with-optimus/9781801079563?utm_source=github&utm_medium=repository&utm_campaign=9781801079563), published by Packt.

**Supercharge big data preparation tasks for analytics and machine learning with Optimus using Dask and PySpark**

## What is this book about?
Optimus is a Python library that works as a unified API for data cleaning, processing, and merging data. It can be used for handling small and big data on your local laptop or on remote clusters using CPUs or GPUs.

The book begins by covering the internals of Optimus and how it works in tandem with the existing technologies to serve your data processing needs. You'll then learn how to use Optimus for loading and saving data from text data formats such as CSV and JSON files, exploring binary files such as Excel, and for columnar data processing with Parquet, Avro, and OCR. Next, you'll get to grips with the profiler and its data types - a unique feature of Optimus Dataframe that assists with data quality. You'll see how to use the plots available in Optimus such as histogram, frequency charts, and scatter and box plots, and understand how Optimus lets you connect to libraries such as Plotly and Altair. You'll also delve into advanced applications such as feature engineering, machine learning, cross-validation, and natural language processing functions and explore the advancements in Optimus. Finally, you'll learn how to create data cleaning and transformation functions and add a hypothetical new data processing engine with Optimus.

By the end of this book, you'll be able to improve your data science workflow with Optimus easily.

This book covers the following exciting features: 
* Use over 100 data processing functions over columns and other string-like values
* Reshape and pivot data to get the output in the required format
* Find out how to plot histograms, frequency charts, scatter plots, box plots, and more
* Connect Optimus with popular Python visualization libraries such as Plotly and Altair
* Apply string clustering techniques to normalize strings
* Discover functions to explore, fix, and remove poor quality data
* Use advanced techniques to remove outliers from your data
* Add engines and custom functions to clean, process, and merge data

If you feel this book is for you, get your [copy](https://www.amazon.com/dp/1801079560) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" alt="https://www.packtpub.com/" border="5" /></a>

## Instructions and Navigations
All of the code is organized into folders.

The code will look like the following:
```
from optimus import Optimus
op = Optimus("dask")
df = op.create.dataframe({"A":[0,1,2,3,4,5]})
df = df.cols.sqrt("A")

```

**Following is what you need for this book:**
This book is for Python developers who want to explore, transform, and prepare big data for machine learning, analytics, and reporting using Optimus, a unified API to work with Pandas, Dask, cuDF, Dask-cuDF, Vaex, and Spark. Although not necessary, beginner-level knowledge of Python will be helpful. Basic knowledge of the CLI is required to install Optimus and its requirements. For using GPU technologies, you'll need an NVIDIA graphics card compatible with NVIDIA's RAPIDS library, which is compatible with Windows 10 and Linux.

With the following software and hardware list you can run all code files present in the book (Chapters 1 - 11).

### Software and Hardware List

| Chapter  | Software required                                                                    | OS required                        |
| -------- | -------------------------------------------------------------------------------------| -----------------------------------|
|  	1-11   |   Python 3.6 +, Optimus, JupyterLab                                            			| Windows, Mac OS X, and Linux (Any) |

We also provide a PDF file that has color images of the screenshots/diagrams used in this book. [Click here to download it](https://static.packt-cdn.com/downloads/9781801079563_ColorImages.pdf).


### Related products <Other books you may enjoy>
* Python Data Cleaning Cookbook [[Packt]](https://www.packtpub.com/product/python-data-cleaning-cookbook/9781800565661) [[Amazon]](https://www.amazon.com/dp/1800565666)

* Python Data Analysis - Third Edition [[Packt]](https://www.packtpub.com/product/python-data-analysis-third-edition/9781789955248) [[Amazon]](https://www.amazon.com/dp/1789955246)

## Get to Know the Authors
**Argenis Leon** created Optimus, an open-source python library built over PySpark aimed to provide an easy-to-use API to clean, process, and merge data at scale. Since 2012, Argenis has been working on big data-related projects using Postgres, MongoDB, Elasticsearch for social media data collection and analytics. In 2015, he started working on Machine learning projects in Retail, AdTech, and Real Estate in Venezuela and Mexico. In 2019 he created Bumblebee, a low-code open-source web platform to clean and wrangle big data using CPU and GPUs using NVIDIA RAPIDS. Nowadays Argenis is Co-founder and CTO of boitas.com (backed by YCombinator) a wholesale marketplace for SMB in Latin America.

**Luis Aguirre** began working with web development projects for Mood Agency in 2018, creating sites for brands from all across Latin America. One year later he started working on Bumblebee, a low-code web platform to transform data that uses Optimus. In mid-2020 he started participating in the Optimus project as a core developer; focusing on creating the easiest-to-use experience for both projects. In 2021 he started working on the Optimus REST API, a tool to allow requests from the web focused on data wrangling.

### Download a free PDF

 <i>If you have already purchased a print or Kindle version of this book, you can get a DRM-free PDF version at no cost.<br>Simply click on the link to claim your free PDF.</i>
<p align="center"> <a href="https://packt.link/free-ebook/9781801079563">https://packt.link/free-ebook/9781801079563 </a> </p>