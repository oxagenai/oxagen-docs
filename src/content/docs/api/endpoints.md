---
title: Endpoints
description: A reference of all available Oxagen API endpoints.
---

This page documents the available API endpoints. All endpoints are relative to the [base URL](/api/overview/) `https://api.oxagen.ai/v1`.

## Resources

### List Resources

```http
GET /resources
```

Returns a paginated list of resources.

**Query Parameters:**

| Parameter | Type   | Description                     |
| --------- | ------ | ------------------------------- |
| `limit`   | number | Max results to return (default: 20) |
| `cursor`  | string | Pagination cursor               |
| `status`  | string | Filter by status (`active`, `archived`) |

**Example Request:**

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  "https://api.oxagen.ai/v1/resources?limit=10"
```

**Example Response:**

```json
{
  "status": "success",
  "data": [
    {
      "id": "res_abc123",
      "name": "My Resource",
      "status": "active",
      "created_at": "2026-01-01T00:00:00Z"
    }
  ],
  "meta": {
    "cursor": "next_cursor_value",
    "has_more": true
  }
}
```

---

### Get a Resource

```http
GET /resources/:id
```

Returns a single resource by ID.

**Path Parameters:**

| Parameter | Type   | Description         |
| --------- | ------ | ------------------- |
| `id`      | string | The resource ID     |

**Example Request:**

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.oxagen.ai/v1/resources/res_abc123
```

---

### Create a Resource

```http
POST /resources
```

Creates a new resource.

**Request Body:**

| Field    | Type   | Required | Description            |
| -------- | ------ | -------- | ---------------------- |
| `name`   | string | Yes      | Name of the resource   |
| `config` | object | No       | Configuration options  |

**Example Request:**

```bash
curl -X POST \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name": "New Resource", "config": {"key": "value"}}' \
  https://api.oxagen.ai/v1/resources
```

**Example Response:**

```json
{
  "status": "success",
  "data": {
    "id": "res_def456",
    "name": "New Resource",
    "status": "active",
    "config": { "key": "value" },
    "created_at": "2026-01-15T12:00:00Z"
  }
}
```

---

### Update a Resource

```http
PATCH /resources/:id
```

Updates an existing resource.

**Request Body:**

| Field    | Type   | Required | Description            |
| -------- | ------ | -------- | ---------------------- |
| `name`   | string | No       | Updated name           |
| `config` | object | No       | Updated configuration  |

**Example Request:**

```bash
curl -X PATCH \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Resource"}' \
  https://api.oxagen.ai/v1/resources/res_abc123
```

---

### Delete a Resource

```http
DELETE /resources/:id
```

Deletes a resource by ID. This action is irreversible.

**Example Request:**

```bash
curl -X DELETE \
  -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.oxagen.ai/v1/resources/res_abc123
```

**Example Response:**

```json
{
  "status": "success",
  "data": {
    "id": "res_abc123",
    "deleted": true
  }
}
```

## HTTP Status Codes

| Code | Description            |
| ---- | ---------------------- |
| 200  | Success                |
| 201  | Created                |
| 400  | Bad Request            |
| 401  | Unauthorized           |
| 403  | Forbidden              |
| 404  | Not Found              |
| 429  | Too Many Requests      |
| 500  | Internal Server Error  |
