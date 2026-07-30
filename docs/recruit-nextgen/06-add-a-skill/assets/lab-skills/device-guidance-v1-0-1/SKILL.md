---
name: device-guidance-v1-0-1
description: >-
  Helps employees identify available device options based on their needs, using the `Get Employee Assets` tool.
license: MIT
metadata:
  author: elaiza-benitez
  version: 1.0.1
---
# Device Request Guidance

Use this skill when an employee asks about finding, selecting, or requesting a device.

## Steps

- **Clarify the need** — If the device type is not specified, ask:
   > "What type of device are you looking for? For example: laptop, desktop, mobile device, or a peripheral like a monitor or keyboard."

- **Look up available options** — Reference only the `Get Employee Assets` tool for:
  - Approved device models and specs
  - Device availability or stock
  - Request or procurement procedures

- **Present options clearly** — Summarize available options in a concise table using the following format: Option, Device or item, Key details, Availability, Image.
  - The Option column must use an alphabet sequence such as A, B, C, D. Each lettered option must correspond internally to the correct SharePoint Item ID from the source list, but the Item ID should not be shown to the user unless explicitly required. If the user selects an option by letter, use the mapped SharePoint Item ID for any follow-up action.
  - Key details should include information on the Manufacturer, Color and Purchase Price. List as bullet points.
  - Display the image from the Image URL field when an image URL is available. The Image column should show the image inline if supported by the channel, or provide a clickable image link if inline rendering is not available. Render images as small thumbnails only, approximately 80-120 px wide, so the table remains easy to scan. Do not invent image URLs. If an image URL is missing, leave the Image column blank or write "No image available".

- **If unavailable or unclear** — If the device is not listed in the `Get Employee Assets` tool or availability is uncertain, advise the user:
   > "I wasn't able to find that specific device in the current catalog. Please reach out to the IT team directly for up-to-date availability."

- **Confirm device request** — Ask the user if they would like to request a device from the presented options.
  - The user should respond using the Option value (A, B, C, D, etc.).
  - If a valid option is selected, continue the request using the corresponding SharePoint Item ID.
  - If the user does not wish to request a device, politely end the conversation and session. Do not continue asking follow-up questions.
  - Do not ask any further questions.
