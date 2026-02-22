# Client Requirements Document (CRD)

**Project:** Hotel Property Management System (PMS)

---

## Document Control

| Field | Value |
| ------ | ------ |
| Project Name | Hotel Property Management System (PMS) |
| Client | ABC Hospitality Group |
| Prepared By | Shahzaib Naseer |
| Version | v1.0 |
| Status | Draft |
| Last Updated | 2025-01-14 |

---

## 1. Introduction

### 1.1 Purpose of This Document

This document captures the business, functional, and high-level non-functional requirements
for the Hotel Property Management System (PMS).  
It serves as the authoritative input for system design, development, testing, and validation.

---

### 1.2 Intended Audience

- Software Developers  
- System Architects  
- Technical Reviewers  
- Project Stakeholders  

---

### 1.3 Definitions & Acronyms

| Term | Description |
| ----- | ------------- |
| PMS | Property Management System |
| PAX | Number of guests |
| RBAC | Role-Based Access Control |

---

## 2. Business Context

### 2.1 Problem Statement

The hotel currently relies on manual processes and fragmented record-keeping, resulting in
operational inefficiencies, data inconsistencies, and limited visibility across departments.

---

### 2.2 Business Objectives

- Automate hotel operations and record management  
- Centralize control over rooms, inventory, and staff  
- Improve operational efficiency and accuracy  
- Support scalable growth for future hotel branches  

---

### 2.3 Success Criteria

The project will be considered successful when:

- Core hotel operations are fully digitized  
- Manual record-keeping is significantly reduced  
- System supports concurrent multi-user access  
- Data integrity is maintained across all modules  

---

## 3. Project Scope

### 3.1 In Scope

- Web-based Hotel PMS  
- Admin configuration dashboard  
- Room, block, floor, and room-type management  
- Inventory and stock management  
- User roles and permissions  
- Purchase orders and suppliers  

---

### 3.2 Out of Scope

- Native Android or iOS applications  
- Third-party accounting or ERP systems  
- Hardware device provisioning  

---

## 4. Stakeholders & User Roles

| Role | Responsibilities |
| ---- | ------------------ |
| Admin | System configuration and user management |
| Inventory Manager | Stock, suppliers, purchase orders |
| Receptionist | Room status and guest coordination |
| Housekeeping | Room cleanliness updates |

---

## 5. Assumptions, Constraints & Dependencies

### 5.1 Assumptions

- Users possess basic computer literacy  
- Reliable internet connectivity is available  
- Hotel operations follow standard hospitality workflows  

---

### 5.2 Constraints

- System must be web-based  
- Technology stack: PERN (Postgres, Express, React, Node)  
- Android-specific features are not supported  

---

### 5.3 Dependencies

- Availability of room key API  
- Supplier and inventory data provided by the client  

---

## 6. Functional Requirements

### 6.1 Admin & System Configuration (Phase 1)

| ID | Requirement Description |
| -- | ----------------------- |
| FR-1 | Admin shall be able to configure system date and operational parameters |
| FR-2 | Admin shall be able to create, name, and manage hotel blocks |
| FR-3 | Admin shall be able to create floors and assign them to blocks |
| FR-4 | Admin shall be able to create room types with pricing |
| FR-5 | Admin shall be able to create rooms and assign them to blocks, floors, and room types |
| FR-6 | Admin shall be able to create and describe conference rooms |
| FR-7 | Admin shall be able to create departments |
| FR-8 | Admin shall be able to create job titles and assign them to departments |
| FR-9 | Admin shall be able to assign user rights to job titles |
| FR-10 | Admin shall be able to create users and assign job titles |
| FR-11 | Admin shall be able to create PAX rates with pricing |
| FR-12 | Admin shall be able to create meal plan rates with pricing |
| FR-13 | Admin shall be able to create auxiliary amenities and services with pricing |

---

### 6.2 Room & Property Management

| ID | Requirement Description |
| -- | ----------------------- |
| FR-14 | System shall allow rooms to be marked as Vacant & Ready |
| FR-15 | System shall allow rooms to be marked as Vacant & Dirty |
| FR-16 | System shall allow rooms to be marked as Occupied & Ready |
| FR-17 | System shall allow rooms to be marked as Occupied & Dirty |
| FR-18 | System shall allow rooms to be marked as Blocked |
| FR-19 | System shall maintain real-time room status tracking |
| FR-20 | System shall support management of conference rooms |

---

### 6.3 Guest Management

| ID | Requirement Description |
| -- | ----------------------- |
| FR-21 | System shall allow configuration and management of guest profiles |
| FR-22 | System shall support integration with room key APIs |

---

### 6.4 Inventory Management (Phase 2)

| ID | Requirement Description |
| -- | ----------------------- |
| FR-23 | System shall allow creation, update, and deletion of inventory categories |
| FR-24 | System shall group stock items by categories |
| FR-25 | System shall display item name, quantity on hand, value, and last updated time |
| FR-26 | System shall maintain stock movement history with detailed transaction metadata |
| FR-27 | System shall allow creation, update, and deletion of inventory items |
| FR-28 | System shall support item modifiers and food symbols |
| FR-29 | System shall support suppliers management |
| FR-30 | System shall support purchase order creation, update, sending, receiving, and tracking |
| FR-31 | System shall support stock reorder level configuration |
| FR-32 | System shall support measurement units management |
| FR-33 | System shall support recipes and ingredient management |
| FR-34 | System shall support stock orders, transfers, and stock takes |
| FR-35 | System shall allow viewing overdue stock requests |

---

### 6.5 User & Permission Management

| ID | Requirement Description |
| -- | ----------------------- |
| FR-36 | System shall support role-based access control (RBAC) |
| FR-37 | System shall restrict system actions based on assigned permissions |
| FR-38 | System shall allow creation, update, and deletion of user permissions |

---

## 7. Non-Functional Requirements (High-Level)

| Category | Requirement |
| -------- | ------------- |
| Performance | Support concurrent multi-user access |
| Security | Role-based access and secure data handling |
| Usability | Minimal training required |
| Scalability | Support future feature expansion |
| Reliability | Maintain data consistency and integrity |

---

## 8. Data & Reporting Requirements

- The system shall store historical inventory movement records  
- The system shall retain room status history  
- The system shall support future reporting and analytics  

---

## 9. Phases & Milestones

| Phase | Description | Status |
| ---- | ----------- | ------ |
| Phase 1 | Admin & Core Setup | Completed |
| Phase 2 | Inventory Management | Ongoing |
| Phase 3 | Enhancements & Reporting | Planned |

---

## 10. Risks & Open Items

- Dependency on third-party room key API availability  
- Inventory complexity may impact system performance  

---

## 11. Acceptance Criteria

- All functional requirements are implemented  
- No critical defects exist in core workflows  
- System passes acceptance testing  

---

## 12. Approval & Sign-Off

| Name | Role | Signature | Date |
| ---- | ---- | --------- | ---- |
| Client Representative | Client | | |
| Shahzaib Naseer | Developer | | |
