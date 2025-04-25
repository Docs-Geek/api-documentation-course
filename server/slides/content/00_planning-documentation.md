
- [HIGH-LEVEL SECTION: Planning documentation](#high-level-section-planning-documentation)
  - [SECTION: Information types](#section-information-types)
    - [Concepts](#concepts)
    - [Tasks](#tasks)
    - [Reference](#reference)
  - [Study: How Developers Use API Documentation](#study-how-developers-use-api-documentation)
    - [About the Study](#about-the-study)
    - [Study Methodology](#study-methodology)
    - [Research Goals](#research-goals)
    - [Hypothesis](#hypothesis)
    - [Content Categories/Labels Used](#content-categorieslabels-used)
    - [Research Findings](#research-findings)
    - [Usage per Content Category](#usage-per-content-category)
    - [Study Outcome](#study-outcome)
  - [Developer types](#developer-types)
    - [Opportunistic](#opportunistic)
    - [System](#system)
    - [Pragmatic](#pragmatic)
  - [Applying Study Insights](#applying-study-insights)
  - [Creating an Information Architecture](#creating-an-information-architecture)
    - [Home](#home)
    - [Getting Started](#getting-started)
    - [Quickstart vs. Getting Started](#quickstart-vs-getting-started)
    - [API Reference](#api-reference)
    - [About the REST API](#about-the-rest-api)
    - [Functionalities](#functionalities)
    - [Troubleshooting](#troubleshooting)
    - [In summary](#in-summary)
  - [API Refernece](#api-refernece)

# HIGH-LEVEL SECTION: Planning documentation

With our solid understanding of APIs, we're now equipped to begin documenting the course API. 

To ensure a successful API documentation project, we need a strategic approach.

First, we should explore the different types of information essential for API documentation

We should review research on the most effective ways to organize this information. 

This will guide us in creating a structure that maximizes usability and effectiveness.

Next, we must carefully plan the overall structure of the documentation, including the hierarchy and left-side navigation. 

This involves identifying the specific information types relevant to our API and developing tailored templates.


## SECTION: Information types

API documentation is generally divided into two main categories: API reference and conceptual documentation.

On an API documentation site, this distinction is often reflected in the information hierarchy.

Oftentimes, you'll see conceptual documentation labeled "Docs," "Documentation," or "Developer Guides."

These sections typically include the API introduction, key concepts, getting started guides, and more.

However, the term "conceptual documentation" can be overly broad. 

This category often includes a variety of content, not just conceptual but also task-oriented (i.e., procedural) information.

### Concepts
### Tasks
### Reference

<div class="fragment fade-in-then-out">
<h5></h5>
<p>
For instance, "Getting Started" guides are one of the most
important types of information that is unbiquous across any API.
</p>
</div>

<div class="fragment fade-in-then-out">
<h5></h5>
<p>
  Despite being task-based and focused on helping users perform
  specific actions, they are often miscategorized as conceptual
  documentation.
</p>
</div>

<div class="fragment fade-in-then-out">
<h5>Identifying information types</h5>
<p></p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
  Effective API documentation involves identifying the different
  types of information in our API documentation.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
  By understanding these information types, we can accurately
  ensure content we create and ensure it meets the specific goals
  associated with each type.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
  Instead of creating our own categories, we can borrow concepts
  from DITA (Darwin Information Typing Architecture).
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
  DITA defines three high-level information types: concepts,
  tasks, and references.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>Let's look at some common examples of these in API docs.</p>
</div>
<div class="fragment fade-in-then-out">
<h5>Concepts</h5>
<p></p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
Concepts provide background information necessary to understand
tasks and reference material. They explain the "what" and "why"
aspects of a subject.
</p>
</div>

<div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Typical conceptual topics include:</u></p>

<ul>
<li>
<b>API introduction</b>: provides an overview of the API, its
purpose, and key functionalities.
</li>
</ul>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Typical conceptual topics include:</u></p>

<ul>
<li>
<b>Key concepts and terminology</b>: explains essential
concepts and terms used in the API, including data models.
</li>
</ul>
</div>

<div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Typical conceptual topics include:</u></p>
<ul>
<li>
<b>Use cases</b>: Describes scenarios in which the API can be effectively used.</li>
</ul>
</div>

<div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Typical conceptual topics include:</u></p>
<ul>
<li>
<b>Resource descriptions</b>: Describes the API's primary entities and their attributes.</li>
</ul>
</div>

<div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Typical conceptual topics include:</u></p>
<ul>
<li>
<b>High-level software architecture</b>: describes the overall
architecture and how different components interact.
</li>
</ul>
</div>

<!-- <div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Typical conceptual topics include:</u></p>

<ul>
<li>
<b>Portal account setup</b>: guides users through setting up
their accounts on the API portal.
</li>
</ul>
</div> -->

<div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Typical conceptual topics include:</u></p>

<ul>
<li>
<b>Authentication and authorization methods</b>: details the
methods used for securing API access.
</li>
</ul>
</div> 


<div class="fragment fade-in-then-out">
<h5>Task-based topics</h5>
<p></p>
</div>
<div class="fragment fade-in-then-out">
<p>
  Task-based topics describe how to accomplish specific procedures or actions.
  They provide step-by-step instructions to help users achieve
  particular goals.
</p>
</div>


<div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Typical task-based topics include:</u></p>
<ul>
<li>
<b>Getting started tutorials</b>: Step-by-step guides to help users quickly begin using the API.</li>
</ul>
</div>



<div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Typical task-based topics include:</u></p>
<ul>
<li>
<b>Functionalities & Recipes</b>: Code samples demonstrating syntax and usage for individual or related calls (functionalities), or multiple features for specific use cases (recipes).
</li>
</ul>
</div>

<div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Typical task-based topics include:</u></p>
<ul>
<li>
<b>Troubleshooting/Error handling guides</b>: In-depth troubleshooting for specific API flow issues, offering step-by-step solutions for encountered errors.
</li>
</ul>
</div>

<div class="fragment fade-in-then-out">
<h5>References</h5>
<p></p>
</div>

<div class="fragment fade-in-then-out">
<p>
  Reference topics provide structured, detailed information about
  commands, fields, elements, and parameters. They serve as
  look-up information and are highly navigable.
</p>
</div>


<div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Typical reference topics include:</u></p>
<ul>
<li>
<b>API reference</b>: A detailed guide to the available endpoints, methods, request parameters, and responses for an API.
</li>
</ul>
</div>

<div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Typical reference topics include:</u></p>
<ul>
<li>
<b>Release notes</b>: A record of changes, updates, and fixes made to the API in each version.
</li>
</ul>
</div>

<div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Typical reference topics include:</u></p>
<ul>
<li>
<b>Glossary</b>: A list of specialized terms and their definitions used within the API documentation.
</li>
</ul>
</div>

<div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Typical reference topics include:</u></p>
<ul>
<li>
<b>Frequently asked questions (FAQs)</b>: A section addressing common queries and concerns users may have about the API.
</li>
</ul>
</div>


<div class="fragment fade-in-then-out">
<h5></h5>
<p>
  To summarize, thinking about information types in this way helps
  us to write more effective and purposeful documentation.
</p>
</div>

<div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Ask, is the purpose of this information to…</u></p>

<ul>
  <li>To explain what something is (Concepts)?</li>
</ul>
</div>

<div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Ask, is the purpose of this information to…</u></p>

<ul>
  <li>To show how to do something (Tasks)?</li>
</ul>
</div>

<div class="fragment fade-in-then-out">
<h5></h5>
<p><u>Ask, is the purpose of this information to…</u></p>

<ul>
  <li>To provide quick references (References)?</li>
</ul>
</div>

<div class="fragment fade-in-then-out">
<h5></h5>
<p>
  Moving forward, the primary content categories in our API documentation will be conceptual documentation, procedural guides, and reference material.
</p>
</div>


## Study: How Developers Use API Documentation

With our understanding of the different information types, it’s time to start outlining our documentation. 

We are now entering the realm of information architecture.

This discipline involves organizing, structuring, and labeling content.

The goal is to help users find information and complete tasks.

To organize our documentation, we should base our structure on research specific to API documentation. 

This involves examining studies on how developers interact with API docs.

This way, we can avoid common pitfalls caused by poor information architecture.

### About the Study

The research paper "How Developers Use API Documentation - An Observational Study (Meng et al., August 2019)" will guide our information architecture strategy.

This study suggests that documentation focusing on API functionality is more effective than arbitrary organization. 

In essence, API documentation should be structured around the API's functionality to aid developers in completing specific tasks.

### Study Methodology

About the study: [separate bullet pages]

The study was observational in nature.

It focused on the eCommerce API, which is based on the REST (Representational State Transfer) paradigm. 

The participants were developers from various organizations, including software companies and universities.

They had no prior experience with the API. 

Each test session lasted between 40 to 70 minutes.

The participants were asked to solve five predefined tasks using the provider’s documentation.








### Research Goals

The research goals were to: [separate bullet pages]

- Characterize strategies used when starting work with a new API
- Analyze how developers utilize API documentation resources
- Identify content-related factors that hinder efficient task completion
- Assess developers' understanding of API documentation and the time spent on different sections

### Hypothesis

Issues with API documentation may relate to usability and mismatches with developer habits. 

Effective API learning requires understanding developers' task-solving strategies and preferred information sources.

Neglecting task-oriented approaches can lead to reliance on subjective content.

### Content Categories/Labels Used

The content categories/labels used were:

- Concepts
- Integrations
- Samples
- Recipes

### Research Findings

Two main developer behaviors emerged: systematic and opportunistic, reflecting previous research paradigms. 

Understanding these behaviors is crucial for organizing documentation to align with developers' needs. 

Not all content categories were utilized equally.

Barriers included issues with high-level organization, code sample reuse, and search functionality.

### Usage per Content Category

The usage per content category was [bullet pages]:

- **API Reference**: Most used.
- **Recipes and Samples**: Comparable in usage to API Reference.
- **Concepts**: Second to last.
- **Integrations**: Least used

<b>API Reference</b> Most used.
<b>Recipes and Samples</b> Comparable in usage to API Reference.
<b>Concepts</b> Second to last.
<b>Integrations</b> Least used.

The <b>Integrations</b> section came last possibly due to the tasks not involving programming. 

This section may have seen more use if tasks involved API integration in code.

### Study Outcome

Participants had difficulty distinguishing between "Samples" and "Recipes," and "API Reference".

These often implied more comprehensive documentation than provided. 

Despite its lower usage, the study confirmed that conceptual information is crucial for API documentation efficiency.

Refer to <em>(Jeong et al., 2009; Ko & Riche, 2011)</em>.




## Developer types

### Opportunistic
### System
### Pragmatic

Let's look at the developer behaviors that emerged from the study.




<div class="fragment fade-in-then-out">
<h5>Systematic developers</h5>
<p></p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
Approach: They adopt a "top-down" method, gaining a
comprehensive understanding of a technology before starting to
use it.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
Behavior: Follow proposed processes and guidelines meticulously
in a structured and methodical manner.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>Coding Style: Write code defensively.</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
Information Usage: More inclined to read conceptual
documentation and refer back to it as needed.
</p>
</div>

<div class="fragment fade-in-then-out">
<h5>Opportunistic developers</h5>
<p></p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
Approach: Use a "bottom-up" method, starting to code immediately
and searching for examples relevant to their current issue.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
Behavior: Open to making mistakes and learning through trial and
error.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
Information Usage: Prioritize technical references, code
samples, and practical guides over conceptual information.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
Exploration: Spend time exploring the API before embarking on
their first task.
</p>
</div>

<div class="fragment fade-in-then-out">
<h5>Pragmatic developers</h5>
<p></p>
</div>

<div class="fragment fade-in-then-out">
<h5></h5>
<p>
Approach: Combine both systematic and opportunistic methods,
adapting based on the task at hand.
</p>
</div>
<div class="fragment fade-in-then-out">
<p>
Behavior: Balance between understanding concepts and diving into
code.
</p>
</div>
<div class="fragment fade-in-then-out">
<p>
Information Usage: Use both conceptual and practical
documentation as needed.
</p>
</div>

<div class="fragment fade-in-then-out">
<p>
Adaptability: Flexible in their approach to learning and
problem-solving.
</p>
</div>







Adopting a pragmatic approach effectively balances technical details with conceptual information.

This esures both are readily accessible throughout the documentation. 

This is achieved by implementing clear links between technical details and concepts.




## Applying Study Insights

Next, we'll explore how to apply the study's insights to effectively organize and structure our API documentation.

This way, we can meet the needs of diverse developers.

<div class="fragment fade-in-then-out">
<p>
<b> 1. Organize content according to API functionality: </b>
</p>
<p>
Structure the documentation based on how the API is used, making
it easy to find relevant information.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
<b> 2. Integrate concepts with related tasks: </b>
</p>
<p>
Link conceptual information with practical guides and examples
to demonstrate application.
</p>
</div>


<div class="fragment fade-in-then-out">
<h5></h5>
<p>
<b> 3. Implement intuitive navigation elements: </b>
</p>
<p>
Ensure that the documentation is easy to navigate with clear
sections and quick access to different types of information.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
<b> 4. Support multiple onboarding paths: </b>
</p>
<p>
Cater to both systematic and opportunistic developers by
providing various entry points, such as getting started guides
and advanced tutorials.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
<b> 5. Comprehensive code samples for easy copying: </b>
</p>
<p>
Include extensive and easily accessible code snippets that
developers can quickly copy and use.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
<b> 6. Code comments that summarize task descriptions: </b>
</p>
<p>
Use comments within code examples to explain what each part of
the code does, aiding understanding.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
<b> 7. Link technical references to concepts and vice versa: </b>
</p>
<p>
Ensure that technical documentation is connected to conceptual
guides to provide context and deeper understanding.
</p>
</div>

<div class="fragment fade-in-then-out">
<h5>Beyond the study: non-developer stakeholders</h5>
<p></p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
Although there is no specific research on non-developers using
API documentation, we can extrapolate these behaviors to
non-developer stakeholders.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
Identifying the needs of non-developer stakeholders can be achieved by creating personas and associated user stories.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
This approach ensures that all users, regardless of their role,
can benefit from the documentation effectively.
</p>
</div>

<div class="fragment fade-in-then-out">
<h5>Putting it together</h5>
<p></p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
While having in-depth conceptual topic sections is valuable,
it's crucial to recognize that not everyone will read them.
</p>
</div>
<div class="fragment fade-in-then-out">
<h5></h5>
<p>
Therefore, we need to strategically place conceptual information
where developers can access it while working on tasks, rather
than expecting them to study it separately.
</p>
</div>

<div class="fragment fade-in-then-out">
  <p>The absence of a standard information architecture for API docs allows for tailored documentation, with a focus on task-oriented structures.</p>
</div>
<div class="fragment fade-in-then-out">
  <p>A bespoke information architecture is needed based on functionality and not on content signals.</p>
</div>
<div class="fragment fade-in-then-out">
  <p>The task-based approach offers opportunities for diverse content strategies.</p>
</div>
<div class="fragment fade-in-then-out">
  <p>Allowing you to cater to non-developer stakeholders and accommodate a broader audience.</p>
</div>






## Creating an Information Architecture

Understanding the importance of structuring documentation around developers' tasks is crucial.
 
With these insights, we can begin designing our high-level information architecture template.

Remember, all decisions should align with the developer types identified in the research.

### Home

We start by outlining the API documentation user journey, beginning with the Home page. 

This landing page typically includes minimal information about the API, featuring an image and links.

The Home page, often named `index.html`, is located at the root of the project:

```shell
docs/
┗ index.html
```

<!-- Here, we'll include links to **Get Started** and **API Reference**. -->

### Getting Started

The Getting Started section guides users through the basics of using the API.

This includes registering, obtaining an API key, and making their first API call.

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

At the end of the Getting Started guide, a "Next Steps" link should direct users to the API Reference. 

### Quickstart vs. Getting Started

Sometimes, documentation includes both a detailed Getting Started guide and a Quickstart guide. 

For simplicity, we'll include only a Getting Started guide...

However, it is useful to consider the shortest path to using the API and provide a quickstart guide.

### API Reference

This section details endpoints, methods, parameters, and other essentials.

This provides a comprehensive view for those who want to dive directly into technical details.

```shell
docs/
┣ Home
┣ Getting Started/
┃ ┣ Account registeration
┃ ┣ Retrieving an API key
┃ ┣ About requests
┃ ┣ Making a request
┃ ┣ Using the response
┣ API Reference
```

### About the REST API

For systematic developers, additional background information is needed. 

While the Getting Started guide offers a basic introduction, the "About the REST API" section provides deeper insights.

This includes the API overview, key concepts, use cases, and high-level architecture.

```shell
docs/
┣ Home
┣ Getting Started/
┃ ┣ Account registeration
┃ ┣ Retrieving an API key
┃ ┣ About requests
┃ ┣ Making a request
┃ ┣ Using the response
┣ About the REST API/
┃ ┣ API overview
┃ ┣ Key concepts and terminology
┃ ┣ Use cases
┃ ┣ Resource descriptions
┃ ┣ High-Level software architecture
┃ ┣ Authentication and authorization
┃ ┣ Security best practices
┣ API Reference
```

### Functionalities

Next, we address the functionalities offered by the API. 

Instead of merely mirroring the API reference structure, we organize content based on API functionalities.

By doing so, we can align with developer tasks.

Each functionality can encompass a variety of topics, each representing a different type of information.

```shell
docs/
┣ Home
┣ Getting Started/
┃ ┣ Account registeration
┃ ┣ Retrieving an API key
┃ ┣ About requests
┃ ┣ Making a request
┃ ┣ Using the response
┣ About the REST API/
┃ ┣ API overview
┃ ┣ Key concepts and terminology
┃ ┣ Use cases
┃ ┣ Resource descriptions
┃ ┣ High-Level software architecture
┃ ┣ Authentication and authorization
┃ ┣ Security best practices
┣ Functionality/
┃ ┣ Concept
┃ ┣ Task
┃ ┣ Reference
┣ Functionality/
┃ ┣ Concept
┃ ┣ Task
┃ ┣ Reference
┣ API Reference
```

### Troubleshooting

The Troubleshooting section builds on the OpenAPI spec's error handling. 

Unlike the concise error messages in the spec, this section provides detailed guidance for resolving issues.

It focuses on in-depth troubleshooting rather than just reference information.

```shell
docs/
┣ Home
┣ Getting Started/
┃ ┣ Account registeration
┃ ┣ Retrieving an API key
┃ ┣ About requests
┃ ┣ Making a request
┃ ┣ Using the response
┣ About the REST API/
┃ ┣ API overview
┃ ┣ Key concepts and terminology
┃ ┣ Use cases
┃ ┣ Resource descriptions
┃ ┣ High-Level software architecture
┃ ┣ Authentication and authorization
┃ ┣ Security best practices
┣ Functionality/
┃ ┣ Concept
┃ ┣ Task
┃ ┣ Reference
┣ Functionality/
┃ ┣ Concept
┃ ┣ Task
┃ ┣ Reference
┣ API Reference
```

### In summary

We now have a foundational structure in place, including essential topics. 

This basic structure can be refined and expanded as needed.






## API Refernece

!!! MOVE API REFERENCE AFTER THIS.

Typically, documentation projects start by updating or filling in missing API fields or outdated descriptions.

It’s crucial to keep the API reference up-to-date, as it should serve as the single source of truth from which other documentation is derived. 

This is often done first because the API reference is the most frequently used type of API documentation.

Starting with an accurate API reference is essential before moving on to conceptual and procedural documentation.

