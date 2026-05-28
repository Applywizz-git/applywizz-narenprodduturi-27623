export const personalInfo = {
  name: "NAREN PRODDUTURI",
  title: "Data Engineer",
  email: "nproddut18@gmail.com",
  phone: "+1 (704) 236-2431",
  location: "Charlotte, NC (Open to Relocate)",
  linkedin: "#",
  github: "https://github.com/narenp18",
  portfolio: "#",
  resume: "/resume.pdf",
  image: "/images/image.png",
};

export const about = {
  summary: "Data Engineer with 3+ years of experience building reliable data pipelines, cloud data platforms, and analytics-ready datasets for banking, fraud monitoring, product telemetry, and business reporting environments. Strong background in developing batch and streaming data workflows, designing warehouse models, validating source-to-target accuracy, and improving pipeline performance across AWS and Azure ecosystems. Experienced in supporting risk analytics, BI dashboards, data quality controls, and governed reporting layers using modern data engineering practices. Known for turning complex data requirements into scalable, well-tested pipelines that help analytics, compliance, and business teams work with cleaner and more trusted data.",
};

export const experience = [
  {
    title: "Data Engineer",
    company: "US Bank",
    location: "Irving, TX",
    period: "Dec 2024 - Present",
    description: [
      "Built AWS Glue pipelines with Python, SQL, Lambda, Step Functions, and Amazon Kinesis to process fraud, transaction, and credit-risk feeds, cutting ETL runtime by 40% for banking analytics workloads.",
      "Secured Amazon S3 data lake workflows with AWS Lake Formation, IAM, and encryption controls, allowing risk and compliance teams to use governed datasets for fraud and regulatory reporting.",
      "Modeled Amazon Redshift fact and dimension tables with SQL, star schema, sort keys, and distribution keys, improving fraud and credit-risk dashboard query performance by 3x.",
      "Automated 20+ scheduled workflows with Apache Airflow, AWS Glue, Informatica, and SSIS, reducing manual support and improving legacy finance pipeline reliability by 35%.",
      "Transformed customer, account, merchant, and transaction data using PySpark in AWS Glue, creating reusable datasets for fraud analytics, credit exposure tracking, and Tableau reporting.",
      "Strengthened regulatory reporting pipelines with Python, SQL, schema validation, and source-to-target reconciliation, maintaining 95% test coverage across critical banking outputs.",
      "Configured AWS CloudWatch monitoring, retry handling, logging, and error alerts for Glue, Lambda, Step Functions, and Kinesis jobs, lowering recurring pipeline failures by 30%.",
      "Migrated SQL Server datasets into Amazon S3 and Amazon Redshift through staged ingestion and validation checks, centralizing risk and finance reporting data for analytics teams."
    ],
  },
  {
    title: "Data Platform Engineer",
    company: "Gangasoft Solutions Pvt. Ltd.",
    location: "Hyderabad, India",
    period: "Dec 2022 - Jul 2024",
    description: [
      "Built Azure Data Factory pipelines with SQL, REST API ingestion, Azure Data Lake Storage Gen2, and Azure Synapse Analytics to consolidate product, customer, and transaction feeds, accelerating Power BI refresh cycles by 60%.",
      "Developed Azure Databricks workflows with PySpark, Spark SQL, Delta Lake, and partitioned data models for telemetry cleansing and aggregation, shortening daily batch processing windows by 45%.",
      "Modeled Snowflake data marts with dimensional modeling, star schema, fact tables, dimension tables, and so product and sales teams could access consistent datasets for adoption and revenue analysis.",
      "Tuned Apache Spark and PySpark workloads with partition pruning, broadcast joins, caching, and DataFrame transformations, increasing processing throughput by 38% for migration and reporting workloads.",
      "Created SQL transformation layers in Azure Synapse Analytics and Snowflake to prepare curated reporting tables, enabling Power BI teams to deliver customer engagement and operational dashboards with fewer manual extracts.",
      "Automated Spark, Azure Data Factory, and SQL deployments through Jenkins, Azure DevOps, Git, and CI/CD pipelines, boosting release speed by 50% across development and production data environments.",
      "Strengthened ETL validation with source-to-target checks, schema validation, reconciliation checks, and data quality checks, decreasing dashboard defects by 32% across product, revenue, and customer analytics outputs.",
      "Applied RBAC, monitoring, logging, and error handling across Azure data workflows to stabilize platform access, giving BI and analytics teams cleaner recovery paths during failed loads."
    ],
  }
];

export const projects = [
  {
    title: "Real-Time Fraud Detection Data Pipeline",
    description: "Built a real-time data pipeline to detect fraud-patterns in transaction events.",
    achievements: [
      "Built a Kafka and Spark Structured Streaming pipeline with PySpark and SQL to process transaction events by account, merchant, and payment behavior, enabling 35% faster fraud-pattern detection.",
      "Engineered Python and PySpark transformations for transaction velocity, spending frequency, and merchant category indicators, increasing the quality of fraud-ready analytical datasets by 28%.",
      "Added checkpointing, schema validation, and data quality checks across streaming batches, stabilizing delayed-event handling and supporting consistent fraud reporting outputs."
    ],
    technologies: ["Kafka", "Spark Structured Streaming", "PySpark", "SQL", "Python"],
    image: "project-fraud",
  },
  {
    title: "Cloud Lakehouse and Data Warehouse Modernization Platform",
    description: "Modernized data platform by designing cloud lakehouse and data warehouse pipelines.",
    achievements: [
      "Designed AWS S3 and AWS Glue ingestion layers with PySpark, SQL, Delta Lake, and Apache Airflow to move raw operational data into curated lakehouse datasets, accelerating BI and warehouse readiness by 40%.",
      "Modeled Redshift and Snowflake tables with dbt, star schema, fact tables, dimension tables, and SCD Type 2 logic, strengthening historical reporting accuracy by 32%.",
      "Tuned incremental SQL loads, partitioned datasets, reconciliation checks, and warehouse query patterns, boosting dashboard performance and limiting repeated full-refresh processing."
    ],
    technologies: ["AWS S3", "AWS Glue", "PySpark", "SQL", "Delta Lake", "Apache Airflow", "Redshift", "Snowflake", "dbt"],
    image: "project-lakehouse",
  },
  {
    title: "Big Data Sentiment and Trend Analytics Pipeline",
    description: "Engineered a big data pipeline to process text records for sentiment and trend analysis.",
    achievements: [
      "Built a Hadoop pipeline with HDFS, MapReduce, Hive, Java, and SQL to process 1M+ text records into structured sentiment, keyword, and trend-analysis datasets.",
      "Created Hive tables, partitioned datasets, and Java MapReduce logic to extract frequency metrics and text patterns, converting raw files into query-ready analytical outputs.",
      "Tuned mapper, reducer, partitioning, and intermediate data handling in MapReduce jobs, decreasing pipeline runtime by 30% across distributed text-processing workloads."
    ],
    technologies: ["Hadoop", "HDFS", "MapReduce", "Hive", "Java", "SQL"],
    image: "project-sentiment",
  }
];

export const skills = {
  "Programming & Query Languages": [
    "Python", "SQL", "PySpark", "Scala", "Java", "Shell Scripting"
  ],
  "Cloud & Data Platforms": [
    "AWS S3", "AWS Glue", "AWS Lambda", "AWS Step Functions", "Amazon Redshift",
    "Amazon Kinesis", "Amazon EMR", "Amazon Athena", "AWS Lake Formation",
    "AWS CloudWatch", "Azure Data Factory", "Azure Databricks",
    "Azure Synapse Analytics", "Azure Data Lake Storage Gen2", "Azure SQL",
    "Snowflake", "Google BigQuery"
  ],
  "Big Data & Streaming": [
    "Apache Spark", "Spark SQL", "Spark Structured Streaming", "Kafka",
    "Hadoop", "Hive", "HDFS", "MapReduce", "Delta Lake"
  ],
  "ETL, ELT & Orchestration": [
    "Apache Airflow", "dbt", "Informatica", "SSIS", "REST API Ingestion",
    "Batch Processing", "Streaming Pipelines", "Incremental Loads", "Workflow Orchestration"
  ],
  "Data Warehousing & Modeling": [
    "Dimensional Modeling", "Star Schema", "Snowflake Schema", "Fact Tables",
    "Dimension Tables", "SCD Type 2", "Data Marts", "Data Lakehouse", "Medallion Architecture"
  ],
  "Databases & Data Quality": [
    "SQL Server", "PostgreSQL", "MySQL", "Oracle", "Data Quality Checks",
    "Source-to-Target Validation", "Schema Validation", "Reconciliation Checks"
  ],
  "DataOps, DevOps & Governance": [
    "Git", "Jenkins", "Azure DevOps", "AWS CloudFormation", "CI/CD Pipelines",
    "IAM", "RBAC", "Encryption Controls", "Monitoring", "Logging", "Error Handling"
  ],
  "BI & Analytics": [
    "Power BI", "Tableau", "KPI Reporting", "Dashboard Data Modeling",
    "Semantic Models", "Fraud Analytics", "Risk Reporting"
  ]
};

export const certifications = [
  {
    name: "AWS Certified Data Engineer Associate",
    organization: "AWS",
    credential: "AWS",
  },
  {
    name: "Databricks Certified Data Engineer Associate",
    organization: "Databricks",
    credential: "Databricks",
  },
  {
    name: "Snowflake Data Engineering Professional Certificate",
    organization: "Coursera",
    credential: "Coursera",
  },
  {
    name: "Data Engineering, Big Data, and Machine Learning on GCP Specialization",
    organization: "Coursera",
    credential: "Coursera",
  },
  {
    name: "Data Engineering Foundations",
    organization: "LinkedIn Learning",
    credential: "LinkedIn Learning",
  },
  {
    name: "Apache Spark Essential Training",
    organization: "LinkedIn Learning",
    credential: "LinkedIn Learning",
  }
];

export const education = [
  {
    degree: "Master of Science in Computer Science, Data Science Concentration",
    university: "University of North Carolina at Charlotte",
    location: "Charlotte, NC",
    year: "Aug 2024 - May 2026",
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    university: "Amrita Vishwa Vidhyapeetham",
    location: "Chennai, India",
    year: "Aug 2020 - Jul 2024",
  }
];
