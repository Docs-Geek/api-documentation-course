# Demonstrating functionalities

- [Demonstrating functionalities](#demonstrating-functionalities)
  - [Example API:payment processor API](#example-apipayment-processor-api)
    - [Functionality landing page](#functionality-landing-page)
    - [Functionality topic information types](#functionality-topic-information-types)
    - [Functionality concepts](#functionality-concepts)
    - [Functionality tasks](#functionality-tasks)
      - [Request / response descriptions](#request--response-descriptions)
    - [Functionality Best Practices](#functionality-best-practices)

We’ve already covered what functionalities are in the context of planning our documentation—

essentially, they are the various ways the API can be utilized. 

Identify these functionalities by referencing the functional requirements.

During the information architecture phase, we grouped related topics into functionalities.

Each functionality represents a different capability offered by the API.

```shell
docs/
┣ Home
┣ Getting Started/
┃ ┣ Account Registration
┃ ┣ Retrieving an API Key
┃ ┣ About Requests
┃ ┣ Making a Request
┃ ┣ Using the Response
┣ About the REST API/
┃ ┣ API Overview
┃ ┣ Key Concepts and Terminology
┃ ┣ Use Cases
┃ ┣ Resource Descriptions
┃ ┣ High-Level Software Architecture
┃ ┣ Authentication and Authorization
┃ ┣ Security Best Practices
┃ Online Payments/ # Functionality #1
┃ In-Person Payments/ # Functionality #2
┣ API Reference
```

## Example API:payment processor API

Let’s consider a payment processor example. 

This API offers two functionalities: processing online payments (Functionality #1) and processing in-person payments (Functionality #2).

Under these functionalities, we’ll need various topics that explain the functionality, demonstrate how to use it-

As well as provide best practices, reference tables, or troubleshooting tips specific to that functionality.

To organize these, we would create two folders representing these functionalities:

```shell
docs/
┃ Online Payments/
┃ In-Person Payments/
```



### Functionality landing page

The landing page for each functionality acts as an overview. 

It typically includes a brief introduction to the functionality and displays 'cards' with short descriptions of each topic under that functionality

This allows users to quickly navigate to specific sections.

By clicking the functionality folder, users will be directed to this overview page.

```shell
docs/
┃ Online Payments/ # Click to view the landing page
┃ In-Person Payments/ # Same
```

On a functionality landing page, you'll typically find a topic title, a summary, and possibly a short description. 

The cards on this page can be structured as follows:

**Example Card Structure:**

```yaml
Topic Title: Managing Online Payments
Topic Summary: How to securely manage and optimize online payments.
Link to Functionality: [Managing Online Payments Functionality Overview](#)  # Replace with actual link
```

### Functionality topic information types

Within each functionality folder, there can be topics that encompass various information types:

a main topic explaining the functionality
tasks on how to use it
best practices
reference materials like field descriptions or error references

Here’s an example structure:

```shell
docs/
┣ Functionality/
┃ ┣ Concept
┃ ┣ Task
┃ ┣ Reference
┣ Functionality/
┃ ┣ Concept
┃ ┣ Task
┃ ┣ Reference
```

While we’ve provided a clear division of information types, it’s common for topics to mix these types. 

For example, a topic might start with conceptual information important to understanding the functionality-

followed by step-by-step instructions (task), and end with reference material like a table of possible fields or errors.

Let’s add some specific topics under each functionality in our payment processor example:

```shell
docs/
┣ Online Payments/             # Landing page
┃ ┣ About Online Payments       # Concept
┃ ┣ Managing Online Payments    # Task
┃ ┣ Refunding Payments          # Task
┃ ┣ Best Practices              # Reference
┣ In-Person Payments/          # Landing page
┃ ┣ About In-Person Payments    # Concept
┃ ┣ Managing In-Person Payments # Task
┃ ┣ Refunding Payments          # Task
┃ ┣ Best Practices              # Reference
```

### Functionality concepts

For functionality concepts that are more descriptive rather than task-oriented, you can use the following template:

```markdown
# Functionality Name

## Summary
A brief overview of what this functionality does and why it's important.

## Description
A detailed explanation of the functionality, including key concepts, workflows, and how it fits into the overall system.

## Resources/Endpoints
- **Resource/Endpoint Name:** A short description of this resource or endpoint and its purpose.
- **Resource/Endpoint Name:** A short description of this resource or endpoint and its purpose.

## Example Usage
Provide a practical example or use case demonstrating how this functionality is applied in a real-world scenario.
```

In the **Description** section, describe the benefit of the functionality.

This can be aligned with the user story corresponding to the functional requirement. 

The **Resources/Endpoints** section should list relevant endpoints.

This section may cover multiple resources, but typically focuses on a primary one.

Additionally, include relevant conceptual information.

For example, business domain insights that illustrate the real-world application of the functionality.

### Functionality tasks

Tasks, often called recipes, demonstrate how to use the functionality step-by-step. 

They fall under the task information type.

Characteristics of recipes:

- **Practical Implementation**: Step-by-step instructions for accomplishing specific tasks or workflows using the API.
- **Example-Centric**: Concrete examples of how to use the API for common tasks, demonstrating best practices.
- **User Journey**: Guides users through the practical implementation, showing how different API components interact.

Here’s a basic template for a task topic:

```markdown
# Task Name
## Summary
A brief overview of what the task accomplishes.

## Description
A detailed explanation of the task, including any necessary background information.

## Steps
### Step 1: [Step Title]
Clear instructions for the first step.

### Step 2: [Step Title]
Clear instructions for the second step.

### Step 3: [Step Title]
Clear instructions for the third step.
```

In the case of our payment processor, for the "Managing Online Payments" functionality-

The recipe could be structured as follows:

```markdown
# Managing Online Payments

## Summary
[Summarize the recipe]

## Description 
[Detailed description of the process]

## Resources/Endpoints
[Table of relevant endpoints]

### 1. Initiate Payment Request
[Instructions for initiating a payment request]

### 2. Handle Payment Authorization
[Instructions for handling payment authorization]

### 3. Process the Payment
[Instructions for processing the payment]

### 4. Capture the Payment
[Instructions for capturing the payment]

### 5. Verify Payment Success
[Instructions for verifying payment success]
```

#### Request / response descriptions

Within each of these sub-headings, provide:

- **Request Description**: Describe the request, provide an example API call as a code sample, and explain the important parts like method, path, params, and request body.
- **Response Description**: Highlight important resource fields and explain the response.

For example, for our payment processor API, we can use the following template:


```markdown
### 1. Initiate Payment Request

**Request Description**:

[Describe the request]

**Response Description**:

[Describe the response]
```

### Functionality best practices

The Best Practices section under a specific functionality outlines the most effective and safest ways to use the functionality.

For example, in our payment processor API-

this section might cover best practices for handling online payments securely and efficiently.

This could include validation, error handling, and ensuring data integrity.

Here’s where this would be located:

```shell
docs/
┣ Online Payments/       
┃ ┣ About Online Payments    
┃ ┣ Managing Online Payments   
┃ ┣ Refunding Payments      
┃ ┣ Best Practices         
┣ In-Person Payments/          
┃ ┣ In-Person Payments     
┃ ┣ Managing In-Person Payments 
┃ ┣ Refunding Payments          
┃ ┣ Best Practices             
```