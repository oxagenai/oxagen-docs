---
title: API Overview
description: An introduction to the Oxagen API and how to use it.
---

The Oxagen API provides programmatic access to the Oxagen platform. Use it to integrate Oxagen into your applications, automate workflows, and manage resources.

## Base URL

All API requests are made to:

```
https://api.oxagen.ai/v1
```

## Request Format

The API accepts JSON-encoded request bodies and returns JSON-encoded responses. All requests must include the `Content-Type` header:

```
Content-Type: application/json
```

## Response Format

All responses follow a consistent structure:

```json
{
  "status": "success",
  "data": { ... },
  "meta": {
    "request_id": "req_abc123",
    "timestamp": "2026-01-01T00:00:00Z"
  }
}
```

### Error Responses

Errors return an appropriate HTTP status code and a JSON body:

```json
{
  "status": "error",
  "error": {
    "code": "INVALID_REQUEST",
    "message": "The request body is missing required field 'name'."
  }
}
```

## Rate Limiting

API requests are rate-limited per account:

| Plan       | Rate Limit         |
| ---------- | ------------------ |
| Free       | 100 requests/min   |
| Pro        | 1,000 requests/min |
| Enterprise | Custom             |

Rate limit headers are included in every response:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1672531200
```

## Pagination

Endpoints that return lists support cursor-based pagination:

```bash
curl https://api.oxagen.ai/v1/resources?limit=20&cursor=abc123
```

## Next Steps

- [Authentication](/api/authentication/) — Learn how to authenticate your requests.
- [Endpoints](/api/endpoints/) — Browse available API endpoints.
