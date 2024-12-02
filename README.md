# Simple-Search-Engine
A simple search engine implemented in Java. A simple search engine finds and displays relevant web pages based on keywords entered by users. It works by crawling websites, indexing their content, and ranking results according to relevance, displaying them in order for easy access.

## Features:
  - Processes all text files in a directory and its subdirectories, cleans and parses the text into word stems, and builds an in-memory inverted index to store the mapping from word stems to the documents and position within those documents where those word stems were found.

  - Supports exact search and partial search. In addition, application can track the total number of words found in each text file, parse and stem a query file, generate a sorted list of search results from the inverted index, and supports writing those results to a JSON file.

  - Supports thread-safe inverted index, and uses a work queue to build and search the inverted index using multiple threads.

  - Supports web crawling and acquiring html

  - Supports User Tracking and stores user history
## Libraries:
  - Apache OpenNLP
  - Apache Log4j 2
  - Apache Commons Lang3
  - Apache Commons Text
  - Eclipse Jetty
  - MariaDB JDBC Driver
