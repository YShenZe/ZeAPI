# Domain WHOIS and Pricing

## 1. Basic Usage
Access the following URL to retrieve WHOIS information and pricing for a domain:

```txt
https://zeapi.ink/v1/whois.php?domain=mengze.vip
```

## 2. Specify Currency Query
Add a query parameter to specify the currency code (ISO 4217 format):

```txt
https://zeapi.ink/v1/whois.php?domain=mengze.vip&cy=USD
```

## 3. JSON Response Format
Success response example:
```json
{
    "domain": "mengze.vip",
    "whois": {
        "status": "success",
        "data": {
            "*data": {
                "parserType": "common",
                "domainName": "mengze.vip",
                "whoisServer": "",
                "nameServers": [
                    "ns8.cnmsn.net",
                    "ns7.cnmsn.net"
                ],
                "dnssec": "unsigned",
                "creationDate": 1740842274,
                "expirationDate": 1772378274,
                "updatedDate": 1745544256,
                "owner": "Yan Tai Lai Zhou Qi Tong Wang Luo You Xian Gong Si",
                "registrar": "Bizcn.com, Inc.",
                "states": [
                    "clienttransferprohibited"
                ]
            },
            "*dataDefault": {
                "parserType": "",
                "domainName": "",
                "whoisServer": "",
                "nameServers": [],
                "creationDate": 0,
                "expirationDate": 0,
                "updatedDate": 0,
                "states": [],
                "owner": "",
                "registrar": "",
                "dnssec": ""
            },
            "*dataAlias": [],
            "*response": {
                "query": "mengze.vip\r\n",
                "text": "Domain Name: mengze.vip\r\nRegistry Domain ID: REDACTED FOR PRIVACY\r\nRegistrar WHOIS Server:\r\nRegistrar URL: www.bizcn.com\r\nUpdated Date: 2025-04-25T01:24:16Z\r\nCreation Date: 2025-03-01T15:17:54Z\r\nRegistry Expiry Date: 2026-03-01T15:17:54Z\r\nRegistrar: Bizcn.com, Inc.\r\nRegistrar IANA ID: 471\r\nRegistrar Abuse Contact Email:\r\nRegistrar Abuse Contact Phone:\r\nDomain Status: clientTransferProhibited https:\/\/icann.org\/epp#clientTransferProhibited\r\nRegistry Registrant ID: REDACTED FOR PRIVACY\r\nRegistrant Name: REDACTED FOR PRIVACY\r\nRegistrant Organization: Yan Tai Lai Zhou Qi Tong Wang Luo You Xian Gong Si\r\nRegistrant Street: REDACTED FOR PRIVACY\r\nRegistrant Street: REDACTED FOR PRIVACY\r\nRegistrant Street: REDACTED FOR PRIVACY\r\nRegistrant City: REDACTED FOR PRIVACY\r\nRegistrant State\/Province: ShanDongSheng\r\nRegistrant Postal Code: REDACTED FOR PRIVACY\r\nRegistrant Country: CN\r\nRegistrant Phone: REDACTED FOR PRIVACY\r\nRegistrant Phone Ext: REDACTED FOR PRIVACY\r\nRegistrant Fax: REDACTED FOR PRIVACY\r\nRegistrant Fax Ext: REDACTED FOR PRIVACY\r\nRegistrant Email: Please query the RDDS service of the Registrar of Record identified in this output for information on how to contact the Registrant, Admin, or Tech contact of the queried domain name.\r\nRegistry Admin ID:\r\nAdmin Name:\r\nAdmin Organization:\r\nAdmin Street:\r\nAdmin Street:\r\nAdmin Street:\r\nAdmin City:\r\nAdmin State\/Province:\r\nAdmin Postal Code:\r\nAdmin Country:\r\nAdmin Phone:\r\nAdmin Phone Ext:\r\nAdmin Fax:\r\nAdmin Fax Ext:\r\nAdmin Email:\r\nRegistry Tech ID: REDACTED FOR PRIVACY\r\nTech Name: REDACTED FOR PRIVACY\r\nTech Organization: REDACTED FOR PRIVACY\r\nTech Street: REDACTED FOR PRIVACY\r\nTech Street: REDACTED FOR PRIVACY\r\nTech Street: REDACTED FOR PRIVACY\r\nTech City: REDACTED FOR PRIVACY\r\nTech State\/Province: REDACTED FOR PRIVACY\r\nTech Postal Code: REDACTED FOR PRIVACY\r\nTech Country: REDACTED FOR PRIVACY\r\nTech Phone: REDACTED FOR PRIVACY\r\nTech Phone Ext: REDACTED FOR PRIVACY\r\nTech Fax: REDACTED FOR PRIVACY\r\nTech Fax Ext: REDACTED FOR PRIVACY\r\nTech Email: Please query the RDDS service of the Registrar of Record identified in this output for information on how to contact the Registrant, Admin, or Tech contact of the queried domain name.\r\nName Server: ns8.cnmsn.net\r\nName Server: ns7.cnmsn.net\r\nDNSSEC: unsigned\r\nURL of the ICANN Whois Inaccuracy Complaint Form: https:\/\/www.icann.org\/wicf\/\r\n>>> Last update of WHOIS database: 2025-07-04T15:08:00Z <<<\r\n\r\nFor more information on Whois status codes, please visit https:\/\/icann.org\/epp\r\n\r\nThe Service is provided so that you may look up certain information in relation to domain names that we store in our database.\r\n\r\nUse of the Service is subject to our policies, in particular you should familiarise yourself with our Acceptable Use Policy and our Privacy Policy.\r\n\r\nThe information provided by this Service is 'as is' and we make no guarantee of it its accuracy.\r\n\r\nYou agree that by your use of the Service you will not use the information provided by us in a way which is:\r\n* inconsistent with any applicable laws,\r\n* inconsistent with any policy issued by us,\r\n* to generate, distribute, or facilitate unsolicited mass email, promotions, advertisings or other solicitations, or\r\n* to enable high volume, automated, electronic processes that apply to the Service.\r\n\r\nYou acknowledge that:\r\n* a response from the Service that a domain name is 'available', does not guarantee that is able to be registered,\r\n* we may restrict, suspend or terminate your access to the Service at any time, and\r\n* the copying, compilation, repackaging, dissemination or other use of the information provided by the Service is not permitted, without our express written consent.\r\n\r\nThis information has been prepared and published in order to represent administrative and technical management of the TLD.\r\n\r\nWe may discontinue or amend any part or the whole of these Terms of Service from time to time at our absolute discretion.\r\n",
                "host": "whois.nic.vip",
                "domain": "mengze.vip"
            },
            "*extra": {
                "groups": [
                    {
                        "Domain Name": "mengze.vip",
                        "Registry Domain ID": "REDACTED FOR PRIVACY",
                        "Registrar URL": "www.bizcn.com",
                        "Updated Date": "2025-04-25T01:24:16Z",
                        "Creation Date": "2025-03-01T15:17:54Z",
                        "Registry Expiry Date": "2026-03-01T15:17:54Z",
                        "Registrar": "Bizcn.com, Inc.",
                        "Registrar IANA ID": "471",
                        "Domain Status": "clientTransferProhibited https:\/\/icann.org\/epp#clientTransferProhibited",
                        "Registry Registrant ID": "REDACTED FOR PRIVACY",
                        "Registrant Name": "REDACTED FOR PRIVACY",
                        "Registrant Organization": "Yan Tai Lai Zhou Qi Tong Wang Luo You Xian Gong Si",
                        "Registrant Street": [
                            "REDACTED FOR PRIVACY",
                            "REDACTED FOR PRIVACY",
                            "REDACTED FOR PRIVACY"
                        ],
                        "Registrant City": "REDACTED FOR PRIVACY",
                        "Registrant State\/Province": "ShanDongSheng",
                        "Registrant Postal Code": "REDACTED FOR PRIVACY",
                        "Registrant Country": "CN",
                        "Registrant Phone": "REDACTED FOR PRIVACY",
                        "Registrant Phone Ext": "REDACTED FOR PRIVACY",
                        "Registrant Fax": "REDACTED FOR PRIVACY",
                        "Registrant Fax Ext": "REDACTED FOR PRIVACY",
                        "Registrant Email": "Please query the RDDS service of the Registrar of Record identified in this output for information on how to contact the Registrant, Admin, or Tech contact of the queried domain name.",
                        "Admin Street": [
                            null,
                            null,
                            null
                        ],
                        "Registry Tech ID": "REDACTED FOR PRIVACY",
                        "Tech Name": "REDACTED FOR PRIVACY",
                        "Tech Organization": "REDACTED FOR PRIVACY",
                        "Tech Street": [
                            "REDACTED FOR PRIVACY",
                            "REDACTED FOR PRIVACY",
                            "REDACTED FOR PRIVACY"
                        ],
                        "Tech City": "REDACTED FOR PRIVACY",
                        "Tech State\/Province": "REDACTED FOR PRIVACY",
                        "Tech Postal Code": "REDACTED FOR PRIVACY",
                        "Tech Country": "REDACTED FOR PRIVACY",
                        "Tech Phone": "REDACTED FOR PRIVACY",
                        "Tech Phone Ext": "REDACTED FOR PRIVACY",
                        "Tech Fax": "REDACTED FOR PRIVACY",
                        "Tech Fax Ext": "REDACTED FOR PRIVACY",
                        "Tech Email": "Please query the RDDS service of the Registrar of Record identified in this output for information on how to contact the Registrant, Admin, or Tech contact of the queried domain name.",
                        "Name Server": [
                            "ns8.cnmsn.net",
                            "ns7.cnmsn.net"
                        ],
                        "DNSSEC": "unsigned",
                        "URL of the ICANN Whois Inaccuracy Complaint Form": "https:\/\/www.icann.org\/wicf\/",
                        ">>> Last update of WHOIS database": "2025-07-04T15:08:00Z <<<",
                        "__HEADER__": "Domain Name: mengze.vip"
                    }
                ],
                "rootFilter": {}
            }
        }
    },
    "price": {
        "status": "success",
        "data": {
            "code": 200,
            "currency": "USD",
            "currency_symbol": "$",
            "domain": "mengze.vip",
            "new": "3.6",
            "renew": "5"
        }
    }
}
```

Error response example (invalid domain):
```json
{
    "status": "error",
    "message": "Invalid domain format",
    "data": {
        "domain": "",
        "whois": {},
        "price": {}
    }
}
```

Error response example (query failure):
```json
{
    "status": "success",
    "message": "Partial query failure",
    "data": {
        "domain": "nonexistent.tld",
        "whois": {
            "status": "error",
            "message": "Failed to load Whois data"
        },
        "price": {
            "status": "error",
            "message": "Failed to fetch price data"
        }
    }
}
```

## 4. Response Fields Description

| Field            | Type   | Description                          |
|------------------|--------|------------------------------|
| status           | string | Request status (success/error) |
| message          | string | Operation result message      |
| data.domain      | string | Queried domain name           |
| data.whois       | object | WHOIS query result           |
| data.price       | object | Pricing query result          |

**WHOIS Object Fields:**

| Field            | Type   | Description                          |
|------------------|--------|------------------------------|
| status           | string | WHOIS query status (success/error) |
| data             | mixed  | WHOIS data (object on success, empty or error message on failure) |
| message          | string | Error message (returned only when status is error) |

**Price Object Fields:**

| Field             | Type   | Description                          |
|-------------------|--------|------------------------------|
| status            | string | Pricing query status (success/error) |
| data.code         | int    | who.cx API status code (200=success, 400=failure) |
| data.domain       | string | Queried domain name           |
| data.new          | string | Registration price            |
| data.renew        | string | Renewal price                |
| data.currency     | string | Currency code (ISO 4217 format) |
| data.currency_symbol | string | Currency symbol             |
| message           | string | Error message (returned only when status is error) |