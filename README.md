# AZAL Store Desk — Comprehensive Stock v10 (29 October 2026)

## Included source inventory

Loaded from `ED01383696_20261029171021711385.XLSX` (sheet `ED01383696`):

- **50,667 inventory records**
- **1,633,483 recorded units**
- **33,748 distinct Part No definitions**
- **39 company / store combinations**
- **4,710 tool-store records** and **45,957 parts/stock records**

### Confirmed tool stores

Only these four source locations are classified as Tools:

- `SWT / GSE`
- `SWT / GSW`
- `SWT / AHT`
- `AHY / AHV`

Every other company/store combination is placed in Parts / Stock, as confirmed by the user.

### Source identity and lot rules

- Every source row is retained as its own inventory record; records are not silently deduplicated.
- A six-digit Tag No (`000001`–`050667`) is generated in row order because the source workbook has no verified Tag No field. These are **system-generated identifiers, not proof that physical labels already exist**.
- In the Parts module, when a Part No has any source row with quantity greater than 1 in a parts store, that Part No is treated as lot-controlled in the parts inventory. Its quantity-1 rows remain lot records, not serialized records. This includes **2,221 quantity-1 lot rows**.
- Source quantity is preserved. Tool-store rows with a quantity greater than 1 are flagged for review; do not deliver these until individual tool identities / quantities are reconciled.
- Placeholder/ambiguous source serial values and duplicate Part No + Serial No identities are flagged. **1,540 records** have an identity/quantity review block in addition to the initial quarantine state.
- Source `COMPANY`, `STORE`, `PART_TYPE`, `PART_NAME`, `PART_NUM`, `SER_NUM`, `QTY_IN_STR`, `CONDITION`, positions, origin, source, document number, internal numbers, AWB, values, prices and movement dates are retained separately and included in stock export.

### Unverified values are intentionally not invented

- All source rows start with **Status = Quarantine**, so no item is automatically eligible for release. The source condition codes are preserved, but are not treated as a verified serviceability approval.
- Material class, unit of measure, calibration requirements/dates, expiry/shelf-life and separate Tool PN were not supplied as validated master data. Definitions use provisional values and are labelled for review.
- Incoming part registrations retain the multi-serial workflow. A bulk receipt with a Lot/Batch number sets that Part No as lot-controlled; for lot-controlled Part Nos, incoming, item editing and whole-file imports force Lot/Batch mode and **quantity 1 remains a lot record**. Incoming parts are restricted to the 35 parts stores, and tools to the four confirmed tool stores.

## Start the local workspace

1. Extract this ZIP.
2. Run `start-demo.bat` on Windows (Python 3 required).
3. Open the local page at `http://127.0.0.1:8020` if it does not open automatically.
4. Choose Demo workspace and select the active demo account. The login selection is **not secure authentication**.

The app stores local changes in IndexedDB in this browser. It can keep this large dataset without trying to fit the entire state into a small localStorage entry. Export periodic backups from Reports / Export. Changes do not synchronize across other devices or users.

## Not production-ready for live operational use

Real mode is deliberately disabled. This ZIP does **not** provide a shared database, secure staff authentication, server-side role enforcement, concurrent transaction control, server audit trail, or central backup. Those require the approved backend and deployment work. This local app is for reviewing and testing the stock data and workflow; do not rely on it as the authoritative live stock system.

**Security:** The full inventory snapshot is embedded in the app. Do not publish the ZIP or its contents to a public repository or public website.
