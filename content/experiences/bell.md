### Phase 1:
IoT Data Ingestion & Real-time Monitoring
Developed serverless data processing pipelines to ingest and analyze telemetry from industrial diesel generators.

#### My achievements:
  - Built a reporting engine to automate generator activity tracking (runs and test cycles), providing critical operational insights to stakeholders.
  - Improved database resource
  - Successful onboarding on UI, the team was able to provide real time alarms page

### Key metrics :icon{name="i-lucide-rocket"}
  - Trunk base versioning allowed us to deploy multiple times during the week
  - the first weeks the application ingested ~2To of telemetry data (devices were spamming the plateform because of a configuration issue) (bad data is still data :icon{name="i-lucide-bomb"} )

#### Stack:

::badges
Node.js,Java,Azure Functions,Azure CosmosDB,Terraform,Kubernetes,Docker,Vue.js
::

### Phase 2:
Enterprise Platform Migration & Scalability
Supported the strategic migration of vertical IoT solutions into a unified, large-scale enterprise platform.

#### My achievements:
  - Rebuilt the reporting engine from the ground up to meet new high-scale customer requirements and deployed the core infrastructure for the migrated services.
  - Specified and built an aggregator service to enable the platform to process telemetries from related assets
  - The plateform became device agnostic

### Key metrics :icon{name="i-lucide-rocket"}
  - Feature with high interest where added to the platform enabling more customer use case
  - Proposed planning cut previous estimation in half thanks to a better architecture

#### Stack:

::badges
Node.js,Java (Quarkus),Kubernetes (AKS),Azure,Terraform,Redis,CosmosDB,MongoDB,GitLab CI/CD
::

### Phase 3:
Real-Time Data Engineering & DevOps Excellence. Designed a new spark pipelien to ingest real time genrator telemetries and calculate fuel consumption.
Tasked with re-engineering a legacy real-time geolocation tracking pipeline to improve reliability and maintainability.
Plus integration of new kind of assets with grouping / splitting telemetries capabilities.

#### My achievements:
  - Successfully migrated a PySpark/Azure Synapse pipeline to a modern development workflow. Introduced unit testing, Dev Containers for environment parity, and fully automated GitLab CI/CD pipelines to ensure stable production deployments
  - First version of the testing utility tool for notebook allowing us to run automatic tests during GitLab CI/CD pipeline
  - Thanks to my design proposition one service could be improved instead of going through a full rewrite

### Key Metrics :icon{name="i-lucide-rocket"}
  - Smooth deployment of the new pyspark pipeline into production
  - The all team was able to start contributing on the project thanks to the devcontainer
  - Testing utility tool developped was then used by other teams

#### Stack:

::badges
Python,PySpark,Azure Synapse,GitLab CI/CD,Dev Containers
::

#### Cross-Functional Contributions:

- Quality Assurance: Enhanced the testing ecosystem using Robot Framework to develop E2E test suites, creating custom keywords for Azure Event Hub to validate asynchronous event-driven architectures.

- Devx : improve Gitlab pipeline by making it quicker and also provide new features to company own tools

- Agile Collaboration: Actively participated in Scrum ceremonies, contributing to architectural design and technical strategy.
