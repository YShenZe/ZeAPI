# Domain ICP Record Query  

## 1. Basic Usage  
> **Note: Due to imperfect crawler implementation, this interface may intermittently fail to return results.**  

**Base API URL**  
```url  
https://icp.zeapi.ink/query/<domain>  
```  

**Query ICP records via GET request:**  
```url  
https://icp.zeapi.ink/query/qq.com  
```  

**Shell Request Example:**  
```shell  
curl https://icp.zeapi.ink/query/qq.com  
```  

**Force Cache Refresh**  
Add `no_cache` parameter to URL:  
```url  
https://icp.zeapi.ink/query/qq.com?no_cache  
```  

**Shell Request (Force Refresh):**  
```shell  
curl https://icp.zeapi.ink/query/qq.com?no_cache  
```  

---  

## 2. Request Parameters  
| Parameter | Type   | Required | Default | Description          |  
|-----------|--------|----------|---------|----------------------|  
| `<domain>`| string | Yes      | None    | Domain to query (e.g. qq.com) |  

---  

## 3. JSON Response Format  

**Success Response Example:**  
```json  
{  
    "code": 200,  
    "data": [  
        {  
            "domain_approve_date": "2022-09-06 15:51:52",  
            "domain_content_approved": "Culture, Religion, Publication, News",  
            "domain_licence": "粤B2-20090059",  
            "domain_name": "qq.com",  
            "domain_owner": "Shenzhen Tencent Computer Systems Co., Ltd.",  
            "domain_status": "No",  
            "domain_type": "Enterprise",  
            "website_licence": "粤B2-20090059-5"  
        }  
    ],  
    "msg": "success",  
    "total": 1  
}  
```  

**Error Response Examples:**  
```json  
// No records found  
{ "code": 500, "msg": "Query error" }  

// Invalid domain/enterprise name  
{ "code": 500, "msg": "Query error" }  
```  

---  

## 4. Response Field Descriptions  
| Field                      | Type   | Description                                                                 |  
|----------------------------|--------|-----------------------------------------------------------------------------|  
| `code`                     | int    | Status code (200=success, 404=not found, 400=invalid request)               |  
| `msg`                      | string | Result message                                                              |  
| `data`                     | array  | Query results array (may contain multiple records)                          |  
| `data[].domain_approve_date` | string | Domain approval timestamp (YYYY-MM-DD HH:MM:SS)                             |  
| `data[].domain_content_approved` | string | Approved content categories (e.g. Culture, News)                          |  
| `data[].domain_licence`    | string | Domain registration license number                                          |  
| `data[].domain_name`       | string | Queried domain name                                                         |  
| `data[].domain_owner`      | string | Domain owner (enterprise/individual name)                                   |  
| `data[].domain_status`     | string | Domain status ("Yes"/"No")                                                  |  
| `data[].domain_type`       | string | Registration type ("Enterprise"/"Individual")                               |  
| `data[].website_licence`   | string | Website registration license number                                         |  
| `total`                    | int    | Total number of records returned                                            |  

---