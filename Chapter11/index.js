/**
 * To install Blurr in this project simply run `npm install` or `yarn install` in your terminal
 * To install Blurr in other projects: `npm install hi-blurr` or `yarn add hi-blurr`
 */

let { Blurr } = require("blurr")

/**
 * Creating a Blurr session
 */

console.info("Creating a Blurr session");

const optimusAddress = "localhost:5000";

let daskSession = new Blurr({
  optimusAddress,
  // kernelAddress: "localhost:8888", // This is now handled by the Optimus API
  // downloadsFolder: "./download", // This is now handled by the Optimus API
  // downloadsAddress: "http://localhost:3000/download/" // This is now handled by the Optimus API
  engineConfiguration: {
    engine: "dask",
    memory_limit: "2 GB"
  }
});

console.info(`To test using just your browser visit ${optimusAddress}`);

console.log(daskSession);

let session = new Blurr({
  kernelAddress: "localhost:8888"
});

console.log(session);

/**
 * Multiple engines in one session
 */

console.info("Multiple engines in one session");

let blurrDask = session.engine({
  engine: "dask",
  memory_limit: "2 GB"
})

let blurrPandas = session.engine({
  engine: "pandas"
})

console.log(blurrDask, blurrPandas);

/**
 * Quick setup
 */

console.info("Quick setup");

let blurr = new Blurr({ kernelAddress: 'localhost:8888' })

console.log(blurr);

/**
 * Making requests
 */

console.info("Making requests");

let response;

response = await blurr.request({
  operation: "createDataframe",
  dict: {
    id: [0, 1, 2, 3],
    value: [1.5, 2.25, 11, 12.5]
  },
  saveTo: "df"
});

console.log(response);

response = await blurr.request({
  operation: "createDataframe",
  dict: { test: [0, 1, 2, 3] }
});

console.log(response);

response = await blurr.request({
  operation: "loadFile",
  path: "Chapter 11/example.csv",
  saveTo: "df"
});

console.log(response);

response = await blurr.request({
  operation: "saveFile",
  dfName: "df",
  path: "Chapter 11/example-saved.csv"
});

console.log(response);

response = await blurr.request({
  operation: "saveFile",
  dfName: "df",
  path: "Chapter 11/example-saved.xls",
  type: "excel"
});

console.log(response);

response = await blurr.request({
  operation: "downloadFile",
  dfName: "df",
  path: "Chapter 11/example-saved.csv"
});

console.log(response);

/**
 * Getting information from the dataset
 */

console.info("Getting information from the dataset");

response = await blurr.request({
  operation: "countRows",
  dfName: "df"
});

console.log(response);

response = await blurr.request({
  operation: "rows.count",
  dfName: "df"
});

console.log(response);

response = await blurr.request({
  operation: "columns",
  dfName: "df"
});

console.log(response);

response = await blurr.request({
  operation: "upper",
  columns: "name",
  dfName: "df"
});

let dataframe = await blurr.request({
  operation: "loadFile",
  path: "Chapter 11/example.csv"
});

console.log(response);

/**
 * Transforming a dataset
 */

console.info("Transforming a dataset");

response = await blurr.request({
  operation: "upper",
  columns: "name",
  dfName: dataframe
});

console.log(response);

response = await blurr.request({
  operation: "lower",
  columns: "name",
  dfName: "df",
  saveTo: "df_lower",
});

console.log(response);

/**
 * Passing arguments
 */

console.info("Passing arguments");

response = await blurr.request({
  operation: "min",
  dfName: "df",
  args: ["value"]
});

console.log(response);

response = await blurr.request({
  operation: "min",
  dfName: "df",
  columns: "value"
});

console.log(response);

response = await blurr.request({
  operation: "min",
  dfName: "df",
  kwargs: { columns: "value" }
});

console.log(response);

/**
 * Getting the content of the dataset
 */

console.info("Getting the content of the dataset");

response = await blurr.request({
  operation: "display",
  dfName: "df",
  n: 4
});

console.log(response);

/**
 * Multiple operations in one request
 */

console.info("Multiple operations in one request");

response = await blurr.request([{
  operation: "createDataframe",
  dict: { A: [0, 1] },
  saveTo: "df1"
}, {
  operation: "display",
  dfName: "df1"
}]);

console.log(response);

/**
 * Other types of data
 */

console.info("Other types of data");

/**
 * Connections
 */

console.info("Connections");

response = await blurr.request({
  operation: "connectS3",
  endpoint_url: "http://region.example.com",
  bucket: "example",
  saveTo: "conn"
});

console.log(response);

/*
 * String clusters
 */

console.info("String clusters");

response = await blurr.request([{
  operation: "loadFile",
  path: "Chapter 11/names.csv",
  saveTo: "df2"
}, {
  operation: "stringClustering",
  dfName: "df2",
  columns: "name"
}]);

console.log(response);

response = await blurr.request({
  source: "clusters",
  operation: "setSuggestion",
  suggestion: "Alice",
  value: "Alice Doe"
});

console.log(response);