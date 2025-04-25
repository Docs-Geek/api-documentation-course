## Handling errors

API reference documentation focuses on crafting clear, human-readable error messages that developers can act on.

There is a particular emphasis on client errors, as these are the errors that clients can resolve.

These messages are concise and straightforward, providing just enough information for the developer to address the issue.

They do delve into the specifics of the user's context or the steps leading up to the error.

While some brief tips on resolving the error may be included, the emphasis remains on clarity and brevity.

When more complex error handling scenarios arise, it’s a best practice to direct the reader from the API reference to the extended docs.

These types of documentation are better suited for guiding users through error resolution processes that involve more in-depth troubleshooting.

In procedural documentation, error handling is closely tied to API workflows.

As users navigate the "happy path" of the API, they may encounter errors that require them to divert to an alternative "unhappy path."

The role of procedural and conceptual documentation is to anticipate where things can go wrong.

This includes analyzing the established API flows and providing solutions or guidance when errors occur.

When users encounter the "unhappy path," the documentation should offer error handling instructions specific to the task at hand.

Or, it should refer users to a more generalized error section that discusses common error patterns and solutions.

These troubleshooting instructions can be embedded directly within the relevant sections.

For example, readers are following code samples and might encounter unexpected errors.

For the general error section, which focuses on common error scenarios, the goal is to provide guidance on solving frequent issues.

This involves explaining the structure and fields of error messages returned in API responses.

By defining a central error response format, you avoid duplication and ensure consistency across the documentation.

While OpenAPI’s error schema is a common standard, many APIs have their own error schemas designed to be more helpful to users of that specific API.

Conceptual and procedural documentation should address these API-specific errors, particularly those related to specific resources.

For instance, documenting a standard <code>404 Not Found</code> error isn’t necessary in conceptual and procedural docs since it’s a common issue with an obvious source.

However, with a payment processing API, if a card payment is declined, it’s essential to interpret the response fields to determine the next steps.

These steps could include displaying a message to the user to contact their card issuer or attempting the payment again later.

This type of information should be centrally located so it can be referenced throughout the documentation.

## Custom Error Types

After analyzing the API flows, you’ll likely notice patterns in both the structure of error messages-

And the errors encountered by specific resources or methods.

Start by identifying which resources these error types apply to.

For example, payment errors for resources involving card transactions.

Once you’ve identified the types of errors, categorize them and create centralized information on how to resolve them.

When describing a custom error type, include the following:

- **Error Code**: The specific code returned when this error is encountered, along with its meaning.
- **Error Response Body**: Provide a code sample showing the response body, and describe the error response schema specific to the custom error type.

This structured approach helps users understand, identify, and resolve API-specific errors effectively.

A typically error response has a predefined structure:

```json
{
  "message": "Authorization AUst6ZdywPwe4fbYWrH1zTNJ was declined Cause: Authorization AUst6ZdywPwe4fbYWrH1zTNJ could not be submitted. Causes: DECLINED",
  "errors": [
    {
      "code": "DECLINED",
      "failure_message": "The card was declined for an unknown reason. The cardholder needs to contact their issuer for more information.",
      "_links": {
        "self": {
          "href": "https://api.com/authorizations"
        },
        "authorization": {
          "href": "https:/api.com/authorizations/AUst6ZdywPwe4fbYWrH1zTNJ"
        }
      }
    }
  ]
}
```

A typical error response in an API follows a predefined structure.

It's important to understand the fields in this response and their significance.

The top-level message field provides a general overview of the error, helping the developer identify and troubleshoot the issue.

The code field, such as DECLINED, is crucial for the API client to determine the appropriate action when this error is encountered.

The client can be programmed to display the failure_message to the end user, advising them to follow up with their financial institution.

Additionally, the response can include a link to the specific resource instance involved in the error.

The client can access the link to gain a more detailed information about that resource (e.g., an authorization).

After understanding the error response structure, outline the steps the developer should take to resolve the error or determine the next course of action.

<!--

===============IGNORE BELOW

Error Codes
Error Response Body - general response body showing structure.

All errors return an array of errors. Below is an example of one error that can be returned from the following resources: ....

Error type: Transfer and Authorization Errors
The error response code

Use problem schema instead of OAS files.
Response field dsecriptions

================




**The main thing is differentiating error handling in procedural vs. reference documentation.**
So its more abnout the unhappy path. Going back to those recipes and seeing where things can go wrong. Also sequencing these things is important.

So its reading the OpenbAPI error handling then have steps to resolve in the context of an api flow.
The standard error codes arent as interesting for the docs -- like everyone knows what 403 means. Like, try creating a dish with an ingredient that doesnt exist -- they dont know the id, then search for name using query params. We've alrteady documented the error 'functionality', now we need to show what to do.

API responses recap
https://www.notion.so/API-responses-recap-18bc6eeded3b4e05bb4c6dfcda920c6c

Explaining the erreor format is important:
https://www.notion.so/OAS-errors-vs-problem-schema-970da346ffb04a3da805e965a52ab3a2?pvs=12

From your slides:
> In procedural documentation, error handling closely aligns with API workflows.
> For example, as an API client follows the "happy path," encountering an error might necessitate diverting to an alternative flow (the "unhappy path").
>
>
> Error handling details should be concise in API references.
> Complex error resolution processes are better suited for procedural and conceptual documentation.

It's closely related to recipes, but iit's what could go wrong.

Once again, need distincition between 'docs' and api ref error handliing.

I think you should document non-standard errors.
Standard errors go into API reference.

https://www.notion.so/Overview-316d6412f2fc4014afa8c25b5df222e1

## Exercise

They describe the response format using Problem schema instead, that's the one your API uses anyway.


## Error handling

This is hwere you essentially explain the response schema. maybe use the problem schema this time as an example.

The different types of errors

https://finix.com/docs/guides/developers/errors/ -->
