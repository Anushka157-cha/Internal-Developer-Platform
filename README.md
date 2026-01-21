# Internal-Developer-Platform
Internal Developer Platform (IDP) that provides self-service deployment visibility, service health monitoring, audit logs, and governance using simulated CI/CD workflows.

🚀 Internal Developer Platform (IDP)

A self-service Internal Developer Platform that provides deployment visibility, service health monitoring, audit logging, and governance for development teams.
The platform focuses on orchestration and observability rather than direct infrastructure execution, closely aligning with real-world platform engineering practices.

📌 Problem Statement

In modern engineering teams, developers often depend heavily on DevOps teams to:

     Trigger deployments

     Track deployment status

      Investigate failures

    Understand service health

This dependency slows down development and reduces visibility.

This project solves that problem by providing a centralized, self-service platform for developers.

🎯 Objectives

Improve developer experience through self-service deployments

Provide clear visibility into deployment lifecycle states

Enable traceability and accountability using audit logs

Simulate real-world CI/CD orchestration behavior


🧩 Key Features

🔹 Service Catalog

   Centralized list of services
 
   Environment separation (dev / staging / prod)

    Health status indicators

🔹 Deployment Lifecycle Management

Asynchronous deployment simulation

Deployment states:

Pending

Running

Success

Failed

Deployment history with timestamps and triggers

🔹 Deployment Actions

Trigger deployment

Retry failed deployments

Rollback visibility (simulated)

🔹 Observability & Logs

Deployment logs with timestamps

Service health indicators

Deployment activity tracking

🔹 Audit Logs & Governance

Tracks critical system actions such as:

Deployment triggers

Failed health checks

Service deletion events

User actions

Ensures traceability and accountability

🔹 Role-Based Access (UI-Level)

Viewer: Read-only access

Developer: Deployment actions

Admin: Governance and critical actions

🏗️ Architecture Overview
Developer
   ↓
Internal Developer Platform UI (React + TypeScript)
   ↓
Deployment Orchestration Layer (Simulated CI/CD)
   ↓
Audit Logs & Observability
   ↓
Service State Management


The platform does not directly deploy infrastructure.
It orchestrates and visualizes deployment workflows, similar to real-world IDPs that integrate with tools like GitHub Actions or ArgoCD.

🛠️ Tech Stack

Frontend: React, TypeScript

Styling: Tailwind CSS

State Management: Local / Mock Data

Deployment: Vercel

Version Control: Git & GitHub


🧪 Deployment Flow (Simulated)

Developer triggers a deployment

Deployment enters Running state

System simulates pipeline steps:

Build

Test

Deploy

Deployment completes with Success or Failure

Audit log entry is generated automatically

🔐 Security & Governance

Role-based access control at UI level

Immutable audit logs for all critical actions

Clear ownership and responsibility tracking

📈 Scalability Considerations

Designed to support multiple services

Pagination-ready deployment logs

Event-driven deployment state transitions

Decoupled UI and orchestration logic


🧠 Learnings

Platform engineering fundamentals

Asynchronous system design

Deployment lifecycle management

Observability and governance concepts

Real-world CI/CD orchestration patterns


🔮 Future Enhancements

Integration with real CI/CD tools (GitHub Actions)

Backend persistence using a database

Real authentication and authorization

Metrics integration (Prometheus-style)

Webhook-based deployment updates


🙌 Author

Anushka Chaudhary
FullStack 
