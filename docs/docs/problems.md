---
title: Problems
---

## Overview

Data access has *problems*, this is the catalog of problems EmbraceSQL is trying to solve.

* Data is stored in relational databases with separate type systems from your programming language.
* The code editing experience in application code when working with database data lacks type awareness and auto complete.
* Typical data access coding, particularly with ORMs, leads to excessive querying, such as the master-loop-query-detail which generates N database trips instead of the 1 that would be optimal.
* Accessing data via API is repetitive work:
  * Mapping data from queries to runtime data structures requires coding.
  * Connecting, configuring, preparing statements, submitting queries, pickout out results require coding.
* ORMs and data access layers attempt to, and ultimately fail to eliminate SQL from application programming.

Why can't we just get data from the database with a plain function call?
