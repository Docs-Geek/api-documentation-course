## Server implementation:
- Show API server implementation and how it connects to Operations to make the connection between the API doc and th server implementation. this might help with seeing error handling messages.

## Styleguide:
  How can it help. Look at Finix's styleguide (request it).
  Maybe add the anti-patterns part to this.

## OpenAPI spec:
  They need to be able to code an API in openapi spec.
  Theyll likely encounter both design first and code-first

## Constraints
  Addresses are things that normally have constraints (see fix address constraints).
  Maybe their exercise is to revise Address fields using instructions.
  Maybe need to talk about what `null` is more, nullable true. Tyhpically when send a request that has optional fields that you dont include, in the response, those fields will show up as null since the field itself is part of the resource and has to have a value. Maxlength of 1 for a nullable field...?ß

## Add security section

Move Security Best Practices into its own sectipon after Auth and Authorization concepts

## COncpetual topics vs. reference topics:
  Referred to in OpenAPI as 'extended documentation' and can give a link.
  Versioning
  Rate limiting -- update existing section
  Webhooks - https://finix.com/docs/guides/developers/webhooks/
  Release notes

## Expanded resource sectiom
  Resources live at address URI.
  Its anything that's identifable.
  IDs: What are IDs? How they connect together things.
  Resource relationships -- like parent, goes back to Domain modeling. The cardinality is the hard scienece version of the domain model.

## Curl tutoriaL
  Curl important for documentation.
  It;s an efficient way to show an API call in text form that isnt a native code sample, rather than taking a screenshot of a UI like postman request.
  Compare a curl request and then same request in Native format like Go.
  The curl request isn't actually a porgramming language, its a CLI tool where oyu construct requests using CLI things like add arguments, so its programming language agnostic way for showing api request in text form.
  Despite curl not being used in cient implementations, its a way to clients to 'test' out forming and making requests prior to implementing them in their programming language.
  It doesnt have complicated snytax like showing an api call in a programming language

## Updating API reference

So specifications can help --> Show template -- start out there
Curl send request with all the fields you know about
See what is required by removing fields.
Analyze the response fields.
  So the ones that you could normally include in the request are null
  The other fields are ones where the system got from some other means than the request, usaully pulling in information using Ids.
Search for other occureences of the fields in the spec, and their associated resources that have those properties, and you can connect those resources to this resource.

## Testing code samples

Make the examples consistent, make sure they work.

## SDK

Base it on Finixs SDK stuff like that validation form. So these are widgets.

## Oauth

Maybe want to use those Supertokens projects as demonstrations of oAuth

## Network tab

Copying JSON and formnatting it from the Network tab.
Add the conversion scriping to OpenAPI repo?

Add Rate limiting back to concepts

Each highl-evel section has description

## Formatting concerns:
Markdown code samples are kind of wonky
New section structure globally, with intro content.

## Demos

Have demonstration notes for you for things you demonstrate on top of the slides.
=========