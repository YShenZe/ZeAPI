# Base64 ⇄ Text  

## 1. Basic Usage  

::: tip  
The server does not record any of your requests, nor does it steal your privacy!  
:::  

**Base API URL**  
```url  
https://zeapi.ink/v1/b64totext.php  
```  

Perform Base64 encoding/decoding via URL or POST request:  

```url  
https://zeapi.ink/v1/b64totext.php?operation=encode&data=Hello%20World  
```  

Or send JSON data via POST request:  
```json  
{  
    "operation": "decode",  
    "data": "SGVsbG8gV29ybGQ="  
}  
```  

**Shell request code:**  
```shell  
curl -X POST https://zeapi.ink/v1/b64totext.php \  
-d "operation=encode" \  
-d "data=Hello World"  
```  

## 2. Request Parameters  

| Parameter | Type   | Required | Default | Description                      |  
|-----------|--------|----------|---------|----------------------------------|  
| operation | string | Yes      | None    | Operation type: "encode" or "decode" |  
| data      | string | Yes      | None    | Data to process                  |  

## 3. JSON Response Format  

**Success response example (encoding):**  
```json  
{  
    "status": "success",  
    "result": "SGVsbG8gV29ybGQ=",  
    "operation": "encode"  
}  
```  

**Success response example (decoding):**  
```json  
{  
    "status": "success",  
    "result": "Hello World",  
    "operation": "decode"  
}  
```  

**Error response example (missing parameters):**  
```json  
{  
    "status": "error",  
    "message": "Missing operation or data parameter"  
}  
```  

**Error response example (invalid operation type):**  
```json  
{  
    "status": "error",  
    "message": "Invalid operation. Must be 'encode' or 'decode'."  
}  
```  

**Error response example (decoding failure):**  
```json  
{  
    "status": "error",  
    "message": "Failed to decode base64 data: Invalid base64 string"  
}  
```  

## 4. Response Field Descriptions  

| Field       | Type   | Description                              |  
|-------------|--------|------------------------------------------|  
| status      | string | Request status (success/error)           |  
| result      | string | Processed data                           |  
| operation   | string | Operation type (encode/decode)           |  
| message     | string | Operation result message (returned only for errors) |  

---