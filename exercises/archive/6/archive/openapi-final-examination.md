API Documentation Course - Final Examination

The document titled "API Course - Final Test (Instructors)" is intended for upload to MeritHub. It is based on the file "template1" you provided.

The exam consists of 50 multiple-choice questions, all drawn from the content covered during the course. Each question has four options, with one correct answer, and follows the requested format. Each question is worth 2% of the total exam score (out of 100 to make things easy). We will need to decide on a passing score.

The attached document "API Course - Final Test (Participants)" PDF contains the same set of questions but without the answers. This will be used as part of the 'open book' nature of the test, allowing participants to review the questions beforehand. They should be informed that they can use this document to help prepare their answers before logging into MeritHub to submit their responses.

Q.1) The primary function of the Authorization header in API requests is:  
a) To enforce rate limiting and prevent API abuse.  
b) To specify user roles and permissions for accessing resources.  
c) To define access control policies for different user groups.  
\*d) To carry authentication credentials, such as API keys or tokens.

Q.2) Which OpenAPI object is used to define reusable data structures?  
a) servers  
\*b) components/schemas  
c) paths  
d) info

Q.3) The POS (Point of Service) REST API used as a case study in the course allows app developers to build applications for:  
a) Managing restaurant inventory levels.  
\*b) Table-side and takeaway food ordering.  
c) Creating and updating dish menus.  
d) Tracking customer loyalty programs.

Q.4) When documenting API responses, what should the focus be on for successful responses like 200 OK or 201 Created?  
a) Performance metrics and response time statistics.  
b) Detailed error messages and troubleshooting steps.  
\*c) Actions performed or resources created as a result of the request.  
d) Security considerations and potential vulnerabilities.

Q.5) What is the key difference between API technical writing and UI writing in terms of content complexity?  
a) API writing focuses on visual design and user experience, while UI writing emphasizes technical accuracy and completeness.  
\*b) API writing explains complex technical concepts and code snippets, while UI writing explains graphical elements and user interactions.  
c) API writing targets a broader audience, including developers and business stakeholders, while UI writing is specifically for end-users.  
d) API writing relies heavily on code examples and technical jargon, while UI writing uses simple language and avoids technical details.

Q.6) What is the purpose of the `openapi` object in an OpenAPI specification?  
a) It provides metadata about the API, such as its title, description, and version.  
\*b) It specifies the OpenAPI Specification version the document follows.  
c) It defines the available endpoints and their operations.  
d) It outlines the authentication and authorization mechanisms for the API.

Q.7) In OpenAPI, what is the purpose of tags?  
a) To define data types and constraints for request and response parameters.  
\*b) To categorize and group related operations for better organization and navigation in documentation.  
c) To specify the base URLs for the API, indicating different environments like development and production.  
d) To outline the security mechanisms and authentication flows for the API.

Q.8) When documenting numeric fields in OpenAPI, which practice enhances clarity and understanding for users?  
a) Providing only the data type without further explanation.  
\*b) Clearly defining the meaning of the numeric values, such as counts, limits, or percentages.  
c) Focusing on the technical implementation details rather than the field's purpose.  
d) Using generic descriptions that apply to all numeric fields regardless of their specific usage.

Q.9) What does the term “resource instance” refer to in the context of RESTful APIs?  
a) The overall structure and design of the API.  
\*b) A specific example of a resource, such as a particular user or order.  
c) The collection of all resources available in the API.  
d) The set of operations that can be performed on a resource.

Q.10) Which of the following is NOT a characteristic of REST APIs?  
a) They use standard HTTP methods like GET, POST, PUT, and DELETE.  
b) They interact with resources via URLs.  
c) They ensure scalability and simplicity.  
\*d) They use a complex, stateful protocol for communication.

Q.11) What does the $ref keyword do in an OpenAPI specification?  
a) It defines a new data type for a parameter or response field.  
\*b) It creates a reference to a reusable schema defined in the components/schemas section.  
c) It specifies the HTTP method for an API operation.  
d) It indicates the authorization mechanism for an endpoint.

Q.12) In API documentation, why is it important to clearly differentiate between formal and informal language?  
a) To make the documentation more technical and appealing to experienced developers.  
b) To avoid using any technical jargon or complex terminology that might confuse users.  
c) To focus solely on the formal aspects of the API, such as endpoints and data models.
\*d) To ensure that informal descriptions do not duplicate formal details already defined in the OpenAPI specification.

Q.13) The course uses a single API as a case study. This API is a:  
a) Logistics and transportation API  
b) Healthtech API
\*c) POS (Point of Service) REST API
d) Fintech API

Q.14) What does the following cURL command do: curl -X GET 'http://localhost:80/dishes?limit=2' \ --header 'Accept: application/json'
a) Creates a new dish resource with a specified limit and JSON data.  
b) Updates an existing dish resource with a limit of 2 and JSON data.  
\*c) Sends a GET request to retrieve a list of dishes, limiting the results to 2 and specifying the desired response format as JSON.  
d) Deletes a list of dishes with a limit of 2.

Q.15) What is the purpose of the “responses” section in an OpenAPI operation definition?  
a) To specify the request headers for the operation.  
\*b) To outline the potential responses for the operation, including status codes, descriptions, and data schemas.  
c) To define the path parameters for the operation.  
d) To describe the authentication mechanism for the operation.

Q.16) Which HTTP status code indicates that an API request requires authentication?  
a) 400 Bad Request  
\*b) 401 Unauthorized  
c) 403 Forbidden  
d) 404 Not Found

Q.17) What is the primary goal of translating user journeys into API flows?  
a) To simplify the user interface design of the client application.  
b) To eliminate the need for API documentation by making the API self-explanatory.  
\*c) To map user actions to corresponding API interactions, providing insights into the technical processes behind user tasks.  
d) To focus solely on the technical details of the API without considering user experience.

Q.18) What is the main purpose of a projection filter when retrieving resources from an API?
a) To limit the number of resources returned in the response, enabling pagination.
b) To sort the results based on specific criteria, such as the value of a particular field.
\*c) To select only the desired fields or properties to be included in the response, reducing data transfer and processing.
d) To filter resources based on specific conditions or criteria, such as matching a particular value.

Q.19) What is the purpose of using JSON Schema in an OpenAPI Specification?  
a) To define the server infrastructure required to host the API.  
\*b) To validate the structure and data types of JSON data exchanged between the client and server.  
c) To specify the programming languages supported by the API client.  
d) To document the version history and release notes of the API.

Q.20) What is the purpose of the “servers” object in an OpenAPI specification?  
\*a) To list one or more base URLs for the API, providing the foundation for all endpoints.  
b) To define reusable data structures for request and response bodies.  
c) To specify the authentication and authorization mechanisms for the API.  
d) To describe the different resources available in the API and their relationships.

Q.21) What is a key advantage of using cURL in API documentation?  
a) It provides a graphical interface for testing APIs, simplifying sending requests and inspecting responses.  
b) It automatically generates client libraries for various programming languages, reducing the need for manual coding.
\*c) Its text-based representation of API requests makes it ideal for documentation and easy for users to copy and run commands.  
d) It eliminates the need for authentication and authorization when making API requests.

Q.22) What is the recommended approach for documenting complex error scenarios in API documentation?  
\*a) Direct readers from the API reference to an "Errors" section that details standard HTTP codes and provides additional troubleshooting guidance.  
b) Include all error handling details within the API reference itself, making the documentation lengthy and difficult to navigate.  
c) Rely solely on basic error messages like "400 Bad Request" without further explanation or resolution steps.  
d) Avoid mentioning error scenarios altogether to maintain a positive user experience.

Q.23) What is the purpose of the “description” field in an OpenAPI parameter definition?  
a) To define the data type of the parameter, such as string, integer, or boolean.  
b) To specify the default value for the parameter.  
\*c) To provide a human-readable explanation of the parameter's purpose and usage.  
d) To indicate whether the parameter is required or optional.

Q.24) Which of the following is a valid JSON data structure?  
a) employees: [{id: 1, name: "Alice"}]  
b) {employees: [id: 1, name: "Alice"]}  
c) [employees: {id: 1, name: "Alice"}]
\*d) {"employees": [{"id": 1, "name": "Alice"}]}

Q.25) What does a “204 No Content” status code indicate in response to a DELETE request?  
a) The requested resource was not found.  
\*b) The request was successful, and the resource has been deleted.  
c) The server encountered an error while processing the request.  
d) The request requires authentication.

Q.26) In RESTful API design, what are subresources?  
a) Primary resources that represent the core entities of the API.  
b) Independent resources that have no relationship to other resources in the API.  
\*c) Secondary resources that are logically nested under primary resources, representing related entities.  
d) Placeholder resources that are used for testing and development purposes.

Q.27) What is the purpose of pagination in API design?  
a) To improve the security of API requests and responses.  
\*b) To divide large datasets into smaller, manageable parts for efficient retrieval and display.  
c) To enable real-time updates and data synchronization.  
d) To provide a mechanism for filtering and sorting API results.

Q.28) When writing descriptions for boolean fields in OpenAPI, which practice ensures clarity and consistency across requests and responses?  
\*a) Using descriptions like "true indicates **_, false indicates _**" to apply to both request parameters and response fields.  
b) Providing separate descriptions for request and response contexts, even if the meaning of the boolean value is the same.  
c) Focusing solely on the request context without considering how the boolean value is interpreted in the response.  
d) Omitting descriptions for boolean fields altogether, assuming users can infer their meaning from the field name.

Q.29) Which HTTP method is typically used to update an existing resource in a RESTful API?  
a) GET  
b) POST  
\*c) PUT
d) DELETE

Q.30) In API documentation, what is the primary function of the "About the REST API" section?  
a) To provide step-by-step instructions for setting up the development environment and making initial API calls.  
b) To list all API endpoints, parameters, and response codes in a comprehensive reference format.  
c) To showcase code examples and best practices for integrating the API into client applications.
\*d) To introduce the API, explore its use cases, and explain core concepts and terminology.

Q.31) Which of the following is NOT a common use case for query parameters in API requests?  
a) Filtering data based on specific criteria.  
\*b) Authenticating the user and obtaining an access token.  
c) Sorting results in a particular order.  
d) Paginating responses to retrieve data in smaller chunks.

Q.32) Why is it important to document the behavior of the API server, especially for public APIs?
a) To allow client developers to modify the server-side code according to their needs.
b) To expose sensitive information about the API's internal workings.
\*c) To clarify the functionality of the API and how it handles different scenarios, as clients lack access to the source code.
d) To provide a comprehensive history of all changes and updates made to the API server.

Q.33) What is the recommended level of detail for field descriptions in OpenAPI?
a) As vague as possible to allow for flexibility in interpretation.
b) Excessively detailed, providing comprehensive technical specifications and implementation details.
d) Determined solely by the length of the field name, with longer names warranting longer descriptions.
\*d) Concise and focused on the field's role, typically 2-3 sentences, with detailed examples reserved for conceptual documentation.

Q.34) Which of the following is an example of a well-written summary for a “POST /orders” endpoint in OpenAPI?
a) POST request to create an order.
\*b) Create an order.
c) Uses the POST method to create an order resource.
d) Send a request to the /orders endpoint.

Q.35) When documenting response bodies, what information should be highlighted for requests that retrieve multiple resources, such as a GET request to “/users”?
a) The specific database queries used to retrieve the resources.
b) The internal data structures and algorithms used by the API server.
\*c) Pagination details, such as the total number of results and mechanisms for retrieving additional pages.
d) The authentication credentials required to access the resources.

Q.36) What are API flows?
a) Visual representations of the user interface for a client application.
b) Detailed descriptions of the API's authentication and authorization mechanisms.
c) Comprehensive documentation of all API endpoints, parameters, and response codes.
\*d) The underlying API calls that correspond to a series of actions taken by users through a UI.

Q.37) What is the key difference between page-based pagination and cursor-based pagination in APIs?
a. Page-based pagination is more suitable for small datasets, while cursor-based pagination is better for large datasets.
b. Page-based pagination is typically used for real-time updates, while cursor-based pagination is used for static data.
\*c. Page-based pagination uses page numbers for navigation, while cursor-based pagination uses a unique identifier to mark the position in the result set.
d. Page-based pagination is more secure than cursor-based pagination.

Q.38) Which of the following is NOT a recommended practice for documenting custom error types in API documentation?
a) Providing a specific error code and its meaning.
b) Including a code sample and description of the custom error schema.
\*c) Using generic error messages that apply to all error types.
d) Outlining the steps developers should take to resolve the error.

Q.39) What is the difference between "Development," "Staging," and "Production" servers?
a) They represent different versions of the API, with Development being the oldest and Production being the latest.
\*b) They refer to different environments for hosting the API, with Development for local testing, Staging for pre-release testing, and Production for the live API.
c) They are used by different user roles, with Development for testers, Staging for administrators, and Production for end-users.
d) They indicate the level of security for the API, with Development being the least secure and Production being the most secure.

Q.40) In the context of API documentation, who are API "users?"
a) Only end-users interacting with a client application that utilizes the API.
b) Specifically the developers who built the API server.
c) The technical writers responsible for creating the API documentation.
\*d) Any entities or systems interacting with the API, such as applications, scripts, or devices.

Q.41) When should API documentation be considered incomplete?
a) When it includes detailed technical specifications and implementation details.
b) When it provides comprehensive code examples and best practices.
\*c) When it lacks informal descriptions for API components, leaving readers without essential context and insights.
d) When it focuses on user-centric content and task-based documentation.

Q.42) What is the relationship between API keys and Basic Authentication in terms of authorization?
\*a) Both methods primarily focus on authentication, with authorization handled separately based on backend roles or permissions.
b) API keys provide both authentication and authorization, while Basic Authentication only handles authentication.
c) Basic Authentication is more secure than API keys for controlling access to API resources.
d) API keys are suitable for internal APIs, while Basic Authentication is preferred for external APIs.

Q.43) What type of content does the "Getting Started" guide typically include in API documentation?
a) In-depth explanations of complex API concepts and workflows.
\*b) Clear instructions for setting up the development environment, authenticating, and making the first API call.
c) Comprehensive reference materials listing all API endpoints, parameters, and response codes.
d) Practical examples and code snippets showcasing advanced API usage scenarios.

Q.44) Which of the following is a key characteristic of the "About the REST API" section in API documentation?
a) It focuses solely on the technical details of the API, such as endpoints and data models.
b) It provides practical examples and code snippets for integrating the API into client applications.
\*c) It explains "what the API is" rather than providing step-by-step instructions, although it might include task-oriented topics like authentication.
d) It outlines the steps for setting up the development environment and making the first API call.

Q.45) What should API documentation emphasize when describing POST requests that create new resources?
a) The specific database tables and columns used to store the new resource.
b) The authentication credentials required to create the resource.
c) The internal processing steps and server-side logic involved in resource creation.
\*d) The key fields included in the request body and the structure of the newly created resource returned in the response.

Q.46) Which of the following best describes the concept of "unhappy path" in API documentation?
a) It refers to the process of documenting common use cases and successful API interactions.
\*b) It involves outlining potential error scenarios and providing guidance on error handling and resolution.
c) It focuses on describing the security measures and authentication mechanisms implemented in the API.
d) It deals with documenting advanced features and optional parameters that are not essential for basic API usage.

Q.47) Why is it important to standardize descriptions for common API fields, such as pagination parameters or datetime fields?
\*a) To streamline documentation maintenance and ensure consistency across different endpoints and resources.
b) To make the documentation more complex and challenging for users to understand.
c) To avoid using any technical jargon or specific terminology that might confuse users.
d) To reduce the overall length of the documentation and make it more concise.

Q.48) What is the recommended approach for handling account registration and API key retrieval in API documentation?
a) Including detailed instructions within the core API documentation itself.
b) Providing a separate "Account Management" section that is independent of the API documentation.
c) Omitting any mention of account management or API keys, assuming users can figure it out on their own.
\*d) Clarifying how API consumers can create accounts and obtain keys through the UI, typically covered in overall platform documentation.

Q.49) What should the focus be when documenting API endpoints that integrate with a user interface?
a) Providing detailed instructions on how to design and implement the user interface.
b) Listing all possible UI elements and their corresponding API calls.
\*c) Explaining how client applications should use API responses to modify UI behavior, such as disabling options based on API data.
d) Showcasing screenshots and visual mockups of the user interface.

Q.50) What is the purpose of the “info” object in an OpenAPI specification?
a) To define the available endpoints and their operations.
\*b) To provide metadata about the API, such as its title, description, and version.
c) To specify the base URLs for the API.
d) To outline the authentication and authorization mechanisms for the API.
