**Note:** This is a *Business Requirement Document* (**BRD**) which is a *Work in Progress* (**WIP**) and will serve as a *Service Level Agreement* (**SLA**) between ***Hivenue*** and ***BTC6*** (Beyond The Cloud Team #06).

#
# Hivenue CI/CD Pipeline
**[Riipen Pages - https://beyondthecloud.riipen.com/teams/QVdXDavV](https://beyondthecloud.riipen.com/teams/QVdXDavV)**

`Version: 1.1.0`

`Project Kick-off: 2024 Oct 15 Tue | 60Hrs. per 6 Weeks`

| Hivenue                       | BTC6                  |
|-------------------------------|-----------------------|
| Nassim Bahloul `CEO`          | Alejandro Castellanos |
| Louenas Hamdi `CTO`           | Jayme Liao            |
| Hanson Liang `Lead Developer` | Haroon Khan           |
|                               | Chima Annonye         |

## Requirement:
Hivenue need to integrate ***Development Environment*** with a ***CI/CD Pipeline*** to *automate* production deployment.

![Hivenue CI/CD Pipeline](hivenue_cicd.svg)

### CI/CD Pipeline Workflow
1. **Build** (Packaging with Dependencies)
2. **Unit/Integration Testing** (Whitebox Testing)
3. **Staging** (Continues Delivery - Package/Image)
4. **End-to-End Testing** (Blackbox Testing/UAT)
5. **Production** (Continuous Deployment - Package/Image)
6. **Push Notifications** (At each step)

### CI/CD Pipeline Flowchart
```mermaid
flowchart TD;
A[Hivenue <br> Development <br> Environment] --Code <br> Commit--> B[Riipen <br> Branch];
B --Code Build <br> Package--> C{Unit & Integration <br> Jasmine/Jest Testing};
C --Fail--> D[Build Fail <br> Push Notification];
C --Pass--> E[Build Pass <br> Push Notification];
E --DigitalOcean <br> Staging <br> Package/Image--> F{End-to-End <br> Playwright Testing};
F --Fail--> G[Delivery Fail <br> Push Notification];
F --Pass--> H{Delivery Pass <br> Push Notification};
H --Continuous <br> Deployment <br> Package/Image--> I[Production <br> Release];
H --Approve <br> Deployment <br> Package/Image--> I;
I --> J[Deployment Success <br> Push Notification]
```

### CI/CD Pipeline Milestones
- **BRD** Review, Feedback, Meeting and Approval
- **NDA** Signing-off (Hivenue discretion)
- **Github** *Riipen branch* Creation and Access
- **Code Commit** *Event* to Riipen branch
- **Github Workflow (IaC)** *Trigger* (Github Workflow permission)
    - **Continuous Integration**
        1. **Code Build** (Hivenue Github Action)
        2. **Unit/Integration** (Whitebox) Testing (Jest/Jasmine)
        3. **Push Notification** (Build Pass/Fail) (PoC's)
    - **Continuous Delivery**
        1. **Staging** (Hivenue DigitalOcean Workload Deployment Role)
        2. **End-to-End** (Blackbox) Testing (Playwright)
        3. **Push Noification** (Delivery Pass/Fail)
    - **Continuous Deployment**
        1. **Production** (Automate DigitalOcean Deployment)
        2. **Production** (Awaiting Approval DigitalOcean DEployment)
        3. **Push Notification** (Deployment Success/Awaiting Approval)

### Hivenue Deliverables
1. **BRD** Review, Feeback and Approval
2. **NDA** Document
3. **Performance Metrics**
    - **MTTD** Mean Time to Detect
    - **MTTR** Mean Time to Repair (Time to Market/Production)
    - **MTBF** Mean Time between Failures
    - **Downtime**
    - **Uptime**
    - **TCO** Total Cost of Ownership (Manual Testing/Deployment)
4. **Github** Riipen Branch Access
5. **Unit/Integration** Test Codebase
6. **Github** Push Notification Access (PoC's)
7. **Package vs Image** (Preferred Deployment Artifact)
8. **DigitalOcean IaC** Staging Access
9. **End-to-End** Test Case Documentation
    - Preffered Test Automation Framework (e.g. Selenium, Cucumber)
10. **DigitalOcean IaC** Production Access

### BTC6 Deliverables
1. **CI/CD IaC** (Infrastructure as Code)
2. **CI/CD IaC Documentation**
3. **Unit/Integration Testing Framework**
4. **Unit/Integration Testing Documentation**
5. **End-to-End Testing Framework**
6. **End-to-End Testing Documentation**
7. **Performance Improvement**