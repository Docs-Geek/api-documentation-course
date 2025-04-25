You refer to session tokens to refresh tokens, but I read 'refresh tokens' is the term used in the context of oAuth, although the session token term can also be used. Apparently aAuth uses both, what would you say the difference is if they are both used? For example:

I also read that refresh/session tokens are commonly add

Is there a scenario where I can do access tokens / session tokens outside of oAuth for simplicity?

Would the session token be stored as a cookie?

```yaml
components:
  securitySchemes:
    AccessToken:
      type: http
      scheme: bearer
    SessionToken:
      type: apiKey
      in: cookie
      name: refresh_token
      description: Use a refresh token stored as an HTTP-only cookie to obtain a new access token
```



When you logout it would invalidate the session token? Would the token have a property such as valid? false...



This isn't for an internal business app.






<div class="fragment fade-in-then-out">
              <h5>Overcoming Specification Limitations</h5>
              <p>Documentation clarifies OpenAPI limitations.</p>
            </div>
            <div class="fragment fade-in-then-out">
              <h5>Providing Context</h5>
              <p>Offers background on API purpose and audience.</p>
            </div>
            <div class="fragment fade-in-then-out">
              <h5>Use Cases and Guides</h5>
              <p>
                Empowers developers with real-world examples and how-to guides.
              </p>
            </div>
            <div class="fragment fade-in-then-out">
              <h5>Manual Field Descriptions</h5>
              <p>Requires manual creation of field descriptions.</p>
            </div>
            <div class="fragment fade-in-then-out">
              <h5>Task-Based Learning</h5>
              <p>Structured guides aid in practical API understanding.</p>
            </div>
            <div class="fragment fade-in-then-out">
              <h5>Bespoke Architecture</h5>
              <p>Tailored layout enhances navigation and productivity.</p>
            </div>