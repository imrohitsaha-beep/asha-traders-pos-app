# ASHA TRADERS POS

A mobile-friendly grocery point-of-sale and inventory app built with Next.js.

## Features
- Product catalogue with editable categories, units, prices, costs and stock
- Quantity-based and amount-based billing
- Sales and purchase records
- Purchase entries update inventory; sales reduce stock
- Separate clearing of sales and purchase history without changing stock
- Shop document storage for PDFs and images in the current browser
- Product photo upload/capture
- JSON backup and restore
- IndexedDB local persistence

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Important data note
This current build stores shop data in the browser on the device. Cloud sync, automatic cloud backups, authentication, and GST billing are not yet integrated. Export backups regularly. Clearing browser data can erase locally stored records.
