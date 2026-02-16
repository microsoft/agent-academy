# Data Import Instructions

If you are importing one of the starter solutions for modules 2 or later, follow these instructions to ensure the necessary sample data is loaded in your solution.

---

## 🧪 Lab 1.2: Import sample data

In this lab, you will add sample data to some of the tables that you imported in your starter solution.

### Download the files to import

1. **[Download](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/operative/01-get-started/assets/evaluation-criteria.csv)** the CSV-file with the evaluation criteria
1. **[Download](https://raw.githubusercontent.com/microsoft/agent-academy/refs/heads/main/docs/operative/01-get-started/assets/job-roles.csv)** the CSV-file with the job roles

#### Import the Job Role sample data

1. Go back to the solution you just imported
1. Select the **Hiring Hub** Model-Driven App by selecting the checkmark in front of the row
1. Select the **Play** button at the top

![Play App](./assets/01-playhiringhubapp.png)

    !!! warning
        You might be prompted to login again. Make sure to do that. After doing that, you should see the Hiring Hub app.

1. Select **Job Roles** in the left navigation
1. Select the **More** icon (three dots below each other) in the command bar
1. Select the **right arrow** next to *Import from Excel*

    ![Import from Excel](./assets/import-from-excel.png)

1. Select **Import from CSV**

    ![Import from CSV](./assets/import-from-csv.png)

1. Select the **Choose File** button, select the **job-roles.csv** file you just downloaded and then select **Open**
1. Select **Next**
1. Leave the next step as is and select **Review Mapping**

    ![Review mapping](./assets/import-from-csv-job-roles.png)

1. Make sure the mapping is correct and select **Finish Import**

    !!! info
        This will start an import and you will be able to track progress or finish the process immediately by selecting **Done**

1. Select **Done**

This can take a little while, but you can hit the **Refresh** button to see if the import has succeeded.

![Job roles import successful](./assets/job-roles-import-successful.png)

### Import the Evaluation Criteria sample data

1. Select **Evaluation Criteria** in the left navigation
1. Select the **More** icon (three dots below each other) in the command bar
1. Select the **right arrow** next to *Import from Excel*

    ![Import from Excel](./assets/import-from-excel.png)

1. Select **Import from CSV**

    ![Import from CSV](./assets/import-from-csv.png)

1. Select the **Choose File** button, select the **evaluation-criteria.csv** file you just downloaded and then select **Open**
1. Select **Next**
1. Leave the next step as is and select **Review Mapping**

    ![Review mapping](./assets/import-from-csv-evaluation-criteria.png)

1. Now we have to do a bit more work for the mapping. Select the magnifying glass(🔎 icon) next to the Job Role field

![Job Role](./assets/01-jobrolemag.png)

1. Make sure **Job Title** is selected here, and if not - add it
1. Select **OK**

![Job Title](./assets/01-jobtitle.png)

1. Make sure the rest of the mapping is correct too and select **Finish Import**

    !!! info
        This will start an import again and you will be able to track progress or finish the process immediately by selecting **Done**

1. Select **Done**

This can take a little while, but you can hit the **Refresh** button to see if the import has succeeded.

![Evaluation Criteria import successful](./assets/evaluation-criteria-import-successful.png)

Go back to your mission to finish your lab.

---
