# Exploratory Testing Report — SauceDemo Shopping Cart

**Project:** SauceDemo Manual Testing  
**Test Area:** Shopping Cart  
**Test Type:** Exploratory Testing  
**Test ID:** EXP-001 to EXP-004  
**Execution Status:** Completed  
**Defects Identified:** 0  
**Evidence:** Not provided

## 1. Objective

Explore the Shopping Cart functionality to identify inconsistencies, unexpected behaviors, and usability issues when adding, removing, and navigating between products.

## 2. Scope

- Adding and removing products.
- Shopping cart counter behavior.
- Navigation between Products and Cart.
- Cart persistence during page refresh.
- Repeated add/remove actions.

## 3. Test Environment

- **Application:** SauceDemo
- **URL:** https://www.saucedemo.com/
- **Testing Approach:** Manual Exploratory Testing
- **Browser:** Not recorded
- **Operating System:** Not recorded

## 4. Exploratory Testing Sessions

### EXP-001 — Add and Remove Products

**Objective:** Verify the shopping cart counter and product selection behavior.

**Actions Performed:**
1. Added three different products.
2. Removed one product.
3. Added the same product again.
4. Observed the buttons and cart counter.

**Observations:**
- The cart counter increased when products were added.
- The counter decreased when products were removed.

**Result:** PASS  
**Unexpected Behavior:** None reported.

### EXP-002 — Cart Navigation

**Objective:** Verify cart contents during navigation.

**Actions Performed:**
1. Added two products.
2. Opened the shopping cart.
3. Selected Continue Shopping.
4. Returned to the shopping cart.

**Observations:**
- Products remained in the cart after returning to the Products page.
- Cart contents were maintained during navigation.

**Result:** PASS  
**Unexpected Behavior:** None reported.

### EXP-003 — Page Refresh

**Objective:** Verify cart persistence after refreshing the page.

**Actions Performed:**
1. Added two products.
2. Opened the shopping cart.
3. Refreshed the page.
4. Checked the products and cart counter.

**Observations:**
- Products remained in the cart after refreshing.
- The cart counter maintained its previous value.

**Result:** PASS  
**Unexpected Behavior:** None reported.

### EXP-004 — Repeated Actions

**Objective:** Verify consistent behavior when repeatedly adding and removing a product.

**Actions Performed:**
1. Added a product to the cart.
2. Removed the product.
3. Repeated the process three times.
4. Checked the button states, cart counter, and cart contents.

**Observations:**
- The button changed from Add to cart to Remove.
- After removal, the button returned to Add to cart.
- The cart counter disappeared when the cart became empty.
- The removed product no longer appeared in the cart.

**Result:** PASS  
**Unexpected Behavior:** None reported.

## 5. Summary of Results

| Metric | Result |
|---|---:|
| Planned Sessions | 4 |
| Completed Sessions | 4 |
| Sessions Passed | 4 |
| Sessions Failed | 0 |
| Unexpected Behaviors Reported | 0 |
| Confirmed Defects | 0 |

## 6. Conclusion

All four exploratory testing sessions were completed successfully.

No unexpected behaviors or confirmed defects were identified during the executed scenarios.

The shopping cart demonstrated consistent behavior when adding and removing products, navigating between pages, refreshing the page, and repeating actions.

**Limitations:**
- Testing was performed manually.
- Browser and operating system details were not recorded.
- No screenshots or video evidence were collected.
- Testing did not cover checkout, payment processing, performance, or security.
- Results apply only to the scenarios explored during this session.