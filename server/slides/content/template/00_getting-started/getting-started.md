
- [Need to determine what programming languages to have for the get started](#need-to-determine-what-programming-languages-to-have-for-the-get-started)
- [Making a request](#making-a-request)
  - [1. Setup](#1-setup)
  - [2. Choose an endpoint for your request](#2-choose-an-endpoint-for-your-request)
  - [3. Create authentication credentials](#3-create-authentication-credentials)
  - [4. Make a curl request](#4-make-a-curl-request)
- [Using the response](#using-the-response)
  - [About the response body](#about-the-response-body)
- [Next steps](#next-steps)


Need to determine what programming languages to have for the get started
------

## Making a request

This section demonstrates how to make an authenticated request to the GitHub REST API using curl.

### 1. Setup
You must have curl installed on your machine. To check if curl is already installed, run curl --version on the command line.

If the output provides information about the version of curl, that means curl is installed.
If you get a message similar to command not found: curl, that means curl is not installed. Download and install curl. For more information, see the curl download page.

### 2. Choose an endpoint for your request
Choose an endpoint to make a request to. You can explore GitHub's REST API documentation to discover endpoints that you can use to interact with GitHub.

Identify the HTTP method and path of the endpoint. You will send these with your request. For more information, see "HTTP method" and "Path."

For example, the "Create an issue" endpoint uses the HTTP method POST and the path /repos/{owner}/{repo}/issues.

Identify any required path parameters. Required path parameters appear in curly brackets {} in the path of the endpoint. Replace each parameter placeholder with the desired value. For more information, see "Path."

For example, the "Create an issue" endpoint uses the path /repos/{owner}/{repo}/issues, and the path parameters are {owner} and {repo}. To use this path in your API request, replace {repo} with the name of the repository where you would like to create a new issue, and replace {owner} with the name of the account that owns the repository.

### 3. Create authentication credentials
Create an access token to authenticate your request. You can save your token and use it for multiple requests. Give the token any scopes or permissions that are required to access the endpoint. You will send this token in an Authorization header with your request. For more information, see "Authentication."

### 4. Make a curl request
Use the curl command to make your request. For more information, see the curl documentation.

Specify the following options and values in your request:

--request or -X followed by the HTTP method as the value. For more information, see "HTTP method."

--url followed by the full path as the value. The full path is a URL that includes the base URL for the GitHub REST API (https://api.github.com) and the path of the endpoint, like this: https://api.github.com/PATH. Replace PATH with the path of the endpoint. For more information, see "Path."

To use query parameters, add a ? to the end of the path, then append your query parameter name and value in the form parameter_name=value. Separate multiple query parameters with &. If you need to send an array in the query string, use the query parameter once per array item, and append [] after the query parameter name. For example, to provide an array of two repository IDs, use ?repository_ids[]=REPOSITORY_A_ID&repository_ids[]=REPOSITORY_B_ID. For more information, see "Query parameters." For an example, see "Example request using query parameters."

--header or -H:

Accept: Pass the media type in an Accept header. To pass multiple media types in an Accept header, separate the media types with a comma, for example: Accept: application/vnd.github+json,application/vnd.github.diff. For more information, see "Accept" and "Media types."
X-GitHub-Api-Version: Pass the API version in a X-GitHub-Api-Version header. For more information, see "X-GitHub-Api-Version."
Authorization: Pass your authentication token in an Authorization header. Note that in most cases you can use Authorization: Bearer or Authorization: token to pass a token. However, if you are passing a JSON web token (JWT), you must use Authorization: Bearer. For more information, see "Authentication." For an example of a request that uses an Authorization header, see "Example request using body parameters."
--data or -d followed by any body parameters within a JSON object. If you do not need to specify any body parameters in your request, omit this option. For more information, see "Body parameters." For an example, see "Example request using body parameters."


Example request
The following example request uses the "Get Octocat" endpoint to return the octocat as ASCII art.

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Accept: application/vnd.github+json" \
--header "X-GitHub-Api-Version: 2022-11-28"
```

Example request using query parameters
The "List public events" endpoint returns thirty issues by default. The following example uses the per_page query parameter to return two issues instead of 30, and the page query parameter to fetch only the first page of results.

The "List public events" endpoint returns thirty issues by default. The following example uses the per_page query parameter to return two issues instead of 30, and the page query parameter to fetch only the first page of results.

```curl

curl --request GET \
--url "https://api.github.com/events?per_page=2&page=1" \
--header "Accept: application/vnd.github+json" \
--header "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/events

```

Example request using body parameters
The following example uses the "Create an issue" endpoint to create a new issue in the octocat/Spoon-Knife repository. Replace YOUR-TOKEN with the authentication token you created in a previous step.

Note: If you are using a fine-grained personal access token, you must replace octocat/Spoon-Knife with a repository that you own or that is owned by an organization that you are a member of. Your token must have access to that repository and have read and write permissions for repository issues. For more information, see "Managing your personal access tokens."

```shell
curl \
--request POST \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json" \
--header "X-GitHub-Api-Version: 2022-11-28" \
--header "Authorization: Bearer YOUR-TOKEN" \
--data '{
  "title": "Created with the REST API",
  "body": "This is a test issue created by the REST API"
}'
```

## Using the response

After you make a request, the API will return the response status code, response headers, and potentially a response body.

About the response code and headers
Every request will return an HTTP status code that indicates the success of the response. For more information about response codes, see the MDN HTTP response status code documentation.

Additionally, the response will include headers that give more details about the response. Headers that start with X- or x- are custom to GitHub. For example, the x-ratelimit-remaining and x-ratelimit-reset headers tell you how many requests you can make in a time period.

To view the status code and headers, use the --include or --i option when you send your request.

For example, this request gets a list of issues in the octocat/Spoon-Knife repository:

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" \
--include
```
And it returns a response code and headers that look something like this:


```shell
HTTP/2 200
server: GitHub.com
date: Thu, 04 Aug 2022 20:07:51 GMT
content-type: application/json; charset=utf-8
cache-control: public, max-age=60, s-maxage=60
vary: Accept, Accept-Encoding, Accept, X-Requested-With
etag: W/"7fceb7e8c958d3ec4d02524b042578dcc7b282192e6c939070f4a70390962e18"
x-github-media-type: github.v3; format=json
link: <https://api.github.com/repositories/1300192/issues?per_page=2&sort=updated&direction=asc&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=2&sort=updated&direction=asc&page=7409>; rel="last"
access-control-expose-headers: ETag, Link, Location, Retry-After, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset
access-control-allow-origin: *
strict-transport-security: max-age=31536000; includeSubdomains; preload
x-frame-options: deny
x-content-type-options: nosniff
x-xss-protection: 0
referrer-policy: origin-when-cross-origin, strict-origin-when-cross-origin
content-security-policy: default-src 'none'
x-ratelimit-limit: 15000
x-ratelimit-remaining: 14996
x-ratelimit-reset: 1659645535
x-ratelimit-resource: core
x-ratelimit-used: 4
accept-ranges: bytes
content-length: 4936
x-github-request-id: 14E0:4BC6:F1B8BA:208E317:62EC2715
```

In this example, the response code is 200, which indicates a successful request.

### About the response body

Many endpoints will return a response body. Unless otherwise specified, the response body is in JSON format. Blank fields are included as null instead of being omitted. All timestamps return in UTC time, ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.

Unlike the GraphQL API where you specify what information you want, the REST API typically returns more information than you need. If desired, you can parse the response to pull out specific pieces of information.

For example, you can use > to redirect the response to a file. In the following example, replace REPO-OWNER with the name of the account that owns the repository, and REPO-NAME with the name of the repository.

```shell
curl --request GET \
--url "https://api.github.com/repos/REPO-OWNER/REPO-NAME/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" > data.json

```
Then you can use jq to get the title and author ID of each issue:

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```


The previous two commands return something like:

```json
{
  "title": "Update index.html",
  "authorID": 10701255
}
{
  "title": "Edit index file",
  "authorID": 53709285
}
```

For more information about jq, see the jq documentation.


Detailed versus summary representations
A response can include all attributes for a resource or only a subset of attributes, depending on whether you fetch an individual resource or a list of resources.

When you fetch an individual resource, like a specific repository, the response will typically include all attributes for that resource. This is the "detailed" representation of the resource.
When you fetch a list of resources, like a list of multiple repositories, the response will only include a subset of the attributes for each resource. This is the "summary" representation of the resource.
Note that authorization sometimes influences the amount of detail included in a representation.

The reason for this is because some attributes are computationally expensive for the API to provide, so GitHub excludes those attributes from the summary representation. To obtain those attributes, you can fetch the detailed representation.

The documentation provides an example response for each API method. The example response illustrates all attributes that are returned by that method.


Hypermedia
All resources may have one or more *_url properties linking to other resources. These are meant to provide explicit URLs so that proper API clients don't need to construct URLs on their own. It is highly recommended that API clients use these. Doing so will make future upgrades of the API easier for developers. All URLs are expected to be proper RFC 6570 URI templates.

You can then expand these templates using something like the uri_template gem:

```shell
>> tmpl = URITemplate.new('/notifications{?since,all,participating}')
>> tmpl.expand
=> "/notifications"

>> tmpl.expand all: 1
=> "/notifications?all=1"

>> tmpl.expand all: 1, participating: 1
=> "/notifications?all=1&participating=1"
```

## Next steps
This article demonstrated how to list and create issues in a repository. For more practice, try to comment on an issue, edit the title of an issue, or close an issue. For more information, see the "Create an issue comment" endpoint and the "Update an issue" endpoint.

For more information about other endpoints that you can use, see the REST reference documentation.

Press alt+up to activate

