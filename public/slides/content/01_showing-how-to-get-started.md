## Showing how to get started

- [Showing how to get started](#showing-how-to-get-started)
- [Account registeration](#account-registeration)
- ["About requests" topic](#about-requests-topic)
  - [Base URL](#base-url)
  - [Path](#path)
  - [HTTP Method](#http-method)
  - [Media Types](#media-types)
  - [Headers](#headers)
  - [Authentication](#authentication)
  - [Parameters](#parameters)
  - [Path Parameters](#path-parameters)
  - [Query Parameters](#query-parameters)
  - [Body Parameters](#body-parameters)
- [Making a Request](#making-a-request)
  - [1. Setup](#1-setup)
  - [2. Choose an Endpoint for Your Request](#2-choose-an-endpoint-for-your-request)
  - [3. Create Authentication Credentials](#3-create-authentication-credentials)
  - [4. Make a Request](#4-make-a-request)
- [Using the Response](#using-the-response)
  - [About the Response Body](#about-the-response-body)

The "Getting Started" guide introduces new users to the API.

It should offer clear instructions for setting up their development environment, authenticating, and making their first API call. 

Thereby minimizing the learning curve and promoting early success.

```shell
docs/
┣ Home
┣ Getting Started/
┃ ┣ Account registeration
┃ ┣ Retrieving an API key
┃ ┣ About requests
┃ ┣ Making a request
┃ ┣ Using the response
```

## Account registeration

<section><h1>Account registeration</h1></section>
<section>
<div class="slide-header">
<div class="header-text course-title">
Mastering API documentation course
</div>
<div class="header-text">
Exploring conceptual topics > <b>Account registeration</b>
</div>
</div>
<div class="r-stack">



<div class="fragment fade-in-then-out">
<h5></h5>
<p>
Account sign-up and obtaining API keys are part of user
interface documentation rather than core API documentation.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
This process is typically included in the documentation for the
overall platform, especially if it offers both software and
APIs.
</p>
</div>

<div class="fragment fade-in-then-out">
<h5></h5>
<p>
In the documentation, it's important to detail how API
consumers, making purchasing decisions, create accounts and
obtain their API keys using the user interface.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
The buyer journey starts when a developer discovers an API, for example, through a Google search.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
They then navigate to the API producer's marketing site to learn
about platform benefits (often marketing material, not technical
docs).
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
Some companies make their tech docs public, while others
restrict access (e.g., behind payment walls), as decision makers
often require technical details to make informed choices.
</p>
</div>
<!-- <div class="fragment fade-in-then-out">
<h5></h5>
<p>
Companies generally provide a user interface frontend for using
APIs behind the scenes, typically with integrations.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
If support integrations are lacking or if internal tools are
used, an API is offered for integration into their systems.
</p>
</div> -->
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
Account sign-up is usually free, often starting with a limited
free plan.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
After signing up, users are typically directed to an API portal.
</p>
</div>


<div class="fragment fade-in-then-out">
<h5></h5>
<p>
For paid APIs, access is controlled through an API portal where
API usage is monitored and controlled.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
An API portal serves as a centralized platform or website
gateway to a collection of APIs.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
It provides developers with documentation, access to API
endpoints, usage guidelines, authentication methods, and
sometimes testing and monitoring tools.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
Upon account creation, users can choose from various product
plans, each offering different features and varying API call
costs.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
The Basic plan, for instance, has lower API call costs due to
fewer features, while higher-tier plans offer more features with
increased costs per API call.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Monetary models often include:</u></p>

<ul>
<li>Monthly subscription fees</li>
</ul>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Monetary models often include:</u></p>

<ul>
<li>A certain number of free API calls up to a threshold.</li>
</ul>
</div>

<div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Monetary models often include:</u></p>

<ul>
<li>
Additional charges per API call after exceeding the threshold.
</li>
</ul>
</div>

<div class="fragment fade-in-then-out">
<h5></h5>
<p>
Users set up a payment method during account setup and receive
their API key or client credentials.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
Depending on the API type, they may also need to create an app
within the platform to obtain client credentials if the
authentication flow includes client credentials.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
Once users have their credentials, they can proceed to using the API.
</p>
</div>
</div>
</section>

## "About requests" topic

The "About Requests" section explains the key elements required for sending requests to a REST API.

It provides a comprehensive understanding of each component necessary for constructing and sending API requests.

### Base URL

The Base URL serves as the root for all API requests, providing a consistent starting point for all endpoint paths. 

It typically includes the domain and version number.

For example:
- `https://example.com/api/v1`
- `https://api.example.com/v1`

The Base URL often includes versioning to specify the API version being used.

```markdown
The Base URL is the root URL of the API, incorporating the domain and version number. The REST API has a Base URL of `https://example.com/api/**version_number**`, where **version_number** represents the currently deployed API version.

- Domain: [https://example.com](https://example.com/)
- Version: /api/**version_number**
```

### Path

The path specifies the particular resource or endpoint within the API that the request targets. 

It is appended to the Base URL to form the complete URL for accessing the resource.

For example, constructing a full resource URL involves appending the specific resource path to the Base URL.

```markdown

Each endpoint in the API has a specific Path that identifies the resource you want to interact with. For example, if you want to create a new resource using the POST method, the Path might look like this:

- **POST /items**

In this case:
- **POST** is the HTTP method used to create a new resource.
- **`/items`** is the Path for the endpoint where you interact with a collection of resources.

To form the complete URL for this request, you would combine this Path with the Base URL. For instance, if your Base URL is `https://example.com/api/v1`, the full URL to create a new item would be:
```

### HTTP Method

The HTTP Method indicates the type of action to be performed.

List the HTTP methods supported by the API.

For example, GET for retrieving data, POST for creating resources, PUT for updating resources, and DELETE for removing resources.

Explain any additional methods, like PATCH or HEAD, if used.

```markdown
HTTP Methods define the action performed on a resource. The common methods are:

- GET: Retrieve resources.
- POST: Create new resources.
- PATCH: Update specific fields of a resource.
- DELETE: Remove resources.

For example, to create a new resource, you would use the **POST `/items`** endpoint.
```

### Media Types

Media Types define the format of the data being sent or received.

<code></code>

They are specified using `Content-Type` and `Accept` headers. 

Common media types include `application/json` and `multipart/form-data`.



```markdown
Media Types specify the format of data exchanged between clients and servers. For example:

- `application/json` - Use this for JSON data by setting `Content-Type: application/json` in the request header.
- `multipart/form-data` - Use this for form submissions with binary data, such as file uploads, specifying boundaries between parts.

Refer to the API documentation to see which media types are supported for each endpoint.
```

### Headers

Headers provide additional information about the request or response, including content type, authorization tokens, and custom metadata.

```markdown
Headers offer extra details about the request. Examples include:

- `Accept` - Indicates the media type you want to receive (e.g., `application/vnd.pos+json`).
- `X-Api-Version` - Specifies the API version to use.
- `User-Agent` - Identifies the application making the request.

For instance, you might need to include an `Accept` header or a custom header to specify the API version.
```

### Authentication

Authentication details how to verify the identity of the requester, often using API keys, OAuth tokens, or other methods.

```markdown
Authentication ensures secure access to the API. It may involve:

- API keys in request headers.
- OAuth tokens for more advanced authentication.

Refer to the dedicated authentication section for detailed methods.
```

### Parameters

Parameters are key-value pairs used in requests to specify data or modify behavior. 

This includes Path Parameters, Query Parameters, and Body Parameters.

```markdown
Parameters in requests can be:

- **Path Parameters**: Embedded in the URL path (e.g., `/api/v1/items/{id}`).
- **Query Parameters**: Added to the URL after a question mark (e.g., `/api/v1/items?sort=asc`).
- **Body Parameters**: Included in the body of POST and PUT requests.

Examples of each type of parameter will be provided.
```

### Path Parameters

Path Parameters are variables within the URL path that specify particular resources, often enclosed in curly braces `{}`.

```markdown
Path Parameters are embedded in the URL path. For example:

- `/api/v1/items/{item_id}` - Here, `{item_id}` is a Path Parameter representing the resource's unique identifier.

To use this path, replace `{item_id}` with the actual resource ID.
```

### Query Parameters

Query Parameters are key-value pairs appended to the URL after a question mark `?`, used to filter or modify data.

```markdown
Query Parameters adjust the data returned by the API. They are usually optional. For example:

- `/api/v1/items?page=2&limit=10` - Fetches the second page of results with a limit of 10 items per page.

Refer to API documentation for details on pagination methods and default behaviors.
```

### Body Parameters

Body Parameters are included in the request body.

They are primarily with POST and PUT methods to send data for creating or updating resources.

```markdown
Body Parameters are used to send data to the server. They are included in the request body and can be formatted in various media types:

- `application/json` - For JSON data.
- `multipart/form-data` - For form submissions with file uploads.

For example, to create a new resource, include the necessary data in the request body.
```
## Making a Request

The "Making a Request" section demonstrates how to make an authenticated request to the REST API.

This involves using various methods, including programming languages, curl, or other tools.

This section is task-oriented, focusing on the process of making a request.

While curl is great for getting started, it’s also useful to include code samples in other common programming languages.

To generate code samples, import the OpenAPI specification into Postman. 

Create collections, select individual requests, view the code samples.

Then, incorporate these samples into your documentation.

### 1. Setup

The Setup section explains how to prepare your development environment to make requests. 

This includes any necessary steps or installations.

For curl, provide instructions or links for installing curl on your machine.

Mention any specific SDKs (Software Development Kits) that help quickly bootstrap a project for API usage.

### 2. Choose an Endpoint for Your Request

This section guides you through selecting an endpoint by referring to the API reference. 

You'll need to identify the HTTP method, the path, and any required parameters.

Provide an example of choosing an endpoint and identifying these aspects.

### 3. Create Authentication Credentials

Here, summarize the process of obtaining authentication credentials, such as an access token. 

Link to the Authentication and Authorization section for a detailed explanation of different authentication methods.

### 4. Make a Request

In this section, demonstrate how to make a request using curl or a programming language (or both). 

Show how to build the request, detailing each component.

For example, describe the method, URL, headers, parameters (like pagination), and request body. 

Explain how each element impacts the request and the server's response.

For programming languages, if an SDK is used, show how to import the SDK and use its functions to handle requests.

## Using the Response

This section explains what to expect after sending a request.

This includes the status code, response headers, and potentially the response body.

Discuss the significance of the response code. 

For instance, a 200 OK indicates a successful request, while a 201 Created signifies a new resource has been created. 

Link to the MDN HTTP response status codes documentation for more details.

Describe useful headers, distinguishing between standard headers and custom headers specific to the API. 

Highlight any important information these headers might convey, such as rate limits.

### About the Response Body

For requests that return a response body (e.g., a POST request creating a resource), explain the format of the response body (typically JSON).

Discuss any null values corresponding to optional request parameters or fields not provided.

Usually, the response includes an ID identifying the created resource.

This can be used for future requests, such as retrieving details. 

Often, there is also a link to the resource that the client can save for later access. 

Timestamps indicating when the resource was created are also common.

For requests that fetch multiple resources (e.g., "Get all"), describe the structure of the response object. 

This typically includes an array of resource instances and pagination details.

For example, <code>cursor</code> values for continuing the display of additional resources.
