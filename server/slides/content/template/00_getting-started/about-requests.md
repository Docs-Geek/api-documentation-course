- [This article covers the elements required to send requests to POS REST API.](#this-article-covers-the-elements-required-to-send-requests-to-pos-rest-api)
- [Base URL](#base-url)
- [Path](#path)
- [HTTP method](#http-method)
- [Media Types](#media-types)
- [Headers](#headers)
- [Authentication](#authentication)
- [Parameters](#parameters)
  - [Path Parameters](#path-parameters)
- [Query parameters](#query-parameters)
  - [Body Parameters](#body-parameters)


This article covers the elements required to send requests to POS REST API.
---

Every request to the REST API includes an HTTP method and a path. Depending on the REST API endpoint, you might need to specify parameters, such as a path parameter in the URL, or include a request body.

The REST API reference documentation describes the HTTP method, path, and parameters for every endpoint. It also displays example requests and responses for each endpoint. For more information, see the OpenAPI description.

## Base URL

The base URL is the root URL of the API. It includes the domain and the version number. In the case of the POS REST API, the base URL is https://pos.com/api/**version_number**, substituting **version_number** with the currently deployed API version.

- Domain: [https://pos.com](https://pos.com/)
- Version: /api/**version_number**

---

## Path

Each endpoint has a path. The OpenAPI description gives the path for every endpoint. For example, the path to the **INSERT ENDPOINT NAME** endpoint is {pathparam}/path.

Notice that the endpoint contains a path parameter, INSERT PATH PARAMETER, used to indicate which INSERT PATH PARAMETER, such as .... to use to DO SOMETHING. Refer to Path parameters for more information.

When combined, the base URL and path comprise the entire resource URL. For example, the entire resource URL of the **INSERT ENDPOINT NAME** endpoint is [https://pos.com/api/v1/{pathparam}/path](https://pos.com/api/v1/%7Bpathparam%7D/path).

---

## HTTP method

An endpoint's HTTP method defines its action on a given resource. The HTTP methods the REST API uses are:

- GET: Used for retrieving resources.
- POST: Used for creating resources.
- PATCH: Used for updating properties of resources.
- DELETE: Used for deleting resources.

For example, the HTTP method for the **INSERT ENDPOINT NAME** endpoint is POST.

---

## Media Types

In the context of APIs, media types refer to identifiers that specify the format or type of data exchanged between clients and servers. In HTTP, the Content-Type header indicates the resource's media type in the message body.

The documentation for each REST API endpoint describes the media types it supports. For more information, see the [OpenAPI description](https://pos.atlassian.net/wiki/spaces/SDP/pages/136118434/OpenAPI+Description#Using-the-POS-OpenAPI-description).

The most common media types supported by the REST API are application/json and multipart/form-data. Let’s take a look at each:

- application/json - When sending JSON data to the API, set Content-Type: application/json in the request header and include the JSON data in the request body. For example, API requests sent to the **INSERT ENDPOINT NAME** endpoint include JSON data in the request body that the API uses to calculate and return a SOMETHING.
- multipart/form-data- When submitting forms with binary data, such as file uploads, structure the request body with boundaries between different parts of the form data, specifying the content type for each part. For example, API requests sent to the **ENTER ENDPOINT NAME** endpoint include form-data in the request body, with a form field named data and the file the form field carries. CSV (.csv) or Excel (.xlsx) are supported file types, except the [fillMissing](https://www.notion.so/wiki/spaces/SDP/pages/141492464) field requires a CSV file.

For an example of a request that uses media types, see [How To Make Requests](https://www.notion.so/wiki/spaces/SDP/pages/135463334).

## Headers

Headers provide extra information about the request and the desired response. Following are some examples of headers that you can use in your requests to the POS REST API. For an example of a request that uses headers, see "Making a request." -- THATS A LINK TO THE GET STARTED SECTIION TUTORIAL

Accept
Most POS REST API endpoints specify that you should pass an Accept header with a value of application/vnd.pos+json. The value of the Accept header is a media type. For more information about media types, see "Media types."

X-POS-Api-Version
You should use this header to specify a version of the REST API to use for your request. For more information, see "API Versions."

User-Agent
All API requests must include a valid User-Agent header. The User-Agent header identifies the user or application that is making the request.

By default, POS CLI sends a valid User-Agent header. However, POS recommends using your POS username, or the name of your application, for the User-Agent header value. This allows POS to contact you if there are problems.

The following is an example User-Agent for an app named Awesome-Octocat-App:

User-Agent: Awesome-Octocat-App
Requests with no User-Agent header will be rejected. If you provide an invalid User-Agent header, you will receive a 403 Forbidden response.

## Authentication

NOTE:  You are linking to the dedicated authentication section to see how to authenticate using a method that works for you.

Authentication is the process of verifying yourself or your application to the server so it knows you are allowed to send it API requests.

All API requests require a header containing your [API key](https://www.notion.so/wiki/spaces/SDP/pages/133398707) -- LINK TO GENERATING API KEY.

Refer to [How To Make Requests](https://www.notion.so/wiki/spaces/SDP/pages/135463334) to view examples using headers.

---

## Parameters

Many API methods require or allow you to send additional information in parameters in your request. The REST API uses path parameters and body parameters.

### Path Parameters

Path parameters modify the endpoint path. The curly brackets {} in a path denote the parameters you need to specify.

For example, the path to the **Download SOMETHING** endpoints looks like the following: /api/v1/gti/downloadSOMETHING/{format}/{SOMETHING_id}. Inside the path are two path parameters, {format} and {SOMETHING_id}. To use this path in your API request, you would replace {format} with the response data format (ex. xlsx) and replace {SOMETHING_id} with the value of the resultsetId.

The resultsetId is returned after sending a **INSERT ENDPOINT NAME** and **ENTER ENDPOINT NAME** request and identifies the SOMETHING results.

## Query parameters

Taken from GitHub and needs to be tailored:

Query parameters allow you to control what data is returned for a request. These parameters are usually optional. The documentation for each GitHub REST API endpoint will describe any query parameters that it supports. For more information, see the "GitHub REST API documentation."

For example, the "List public events" endpoint returns thirty issues by default. You can use the per_page query parameter to return two issues instead of 30. You can use the page query parameter to fetch only the first page of results. For an example of a request that uses query parameters, see "Making a request."

### Body Parameters

For REST APIs, the "request body" is the part of an HTTP request that allows you to pass additional data to the API. It's the payload of the HTTP request, and in the case of the POS API, it can contain various types of data, including JSON and form-data. The request body is used in HTTP methods like POST.

When sending requests to endpoints used to calculate SOMETHINGs, you include data in the request body, and the API uses that data to calculate and return a SOMETHING.

The format of the data accepted by each endpoint, also known as the "Media type" (also known as MIME type), differs from these two endpoints. **INSERT ENDPOINT NAME** accepts data formatted as application/json, while **ENTER ENDPOINT NAME** accepts multipart/form-data. For more information, see [Media Types](https://www.notion.so/About-API-requests-section-86929b37c8804aa18e1cc07269371fd4?pvs=21).





