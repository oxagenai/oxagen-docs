---
title: Authentication
description: How to authenticate with the Oxagen API using API keys and tokens.
---

All API requests to Oxagen require authentication. This guide covers the available authentication methods.

## API Keys

API keys are the simplest way to authenticate. You can generate an API key from your [Oxagen Dashboard](https://dashboard.oxagen.ai).

### Using an API Key

Include your API key in the `Authorization` header:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.oxagen.ai/v1/resources
```

### API Key Best Practices

- **Never** commit API keys to version control.
- Use environment variables to store keys:
  ```bash
  export OXAGEN_API_KEY="your-key-here"
  ```
- Rotate keys periodically.
- Use separate keys for development and production.

## OAuth 2.0

For applications that act on behalf of users, Oxagen supports OAuth 2.0 with the authorization code flow.

### Authorization Flow

1. **Redirect the user** to the authorization endpoint:
   ```
   https://auth.oxagen.ai/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=read+write
   ```

2. **Exchange the authorization code** for an access token:
   ```bash
   curl -X POST https://auth.oxagen.ai/token \
     -d "grant_type=authorization_code" \
     -d "code=AUTHORIZATION_CODE" \
     -d "client_id=YOUR_CLIENT_ID" \
     -d "client_secret=YOUR_CLIENT_SECRET" \
     -d "redirect_uri=YOUR_REDIRECT_URI"
   ```

3. **Use the access token** in API requests:
   ```bash
   curl -H "Authorization: Bearer ACCESS_TOKEN" \
     https://api.oxagen.ai/v1/resources
   ```

### Refreshing Tokens

Access tokens expire after 1 hour. Use the refresh token to obtain a new access token:

```bash
curl -X POST https://auth.oxagen.ai/token \
  -d "grant_type=refresh_token" \
  -d "refresh_token=YOUR_REFRESH_TOKEN" \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET"
```

## Scopes

| Scope    | Description                          |
| -------- | ------------------------------------ |
| `read`   | Read access to resources             |
| `write`  | Write access to resources            |
| `admin`  | Full administrative access           |

## Next Steps

- [Endpoints](/api/endpoints/) — Explore the available API endpoints.
