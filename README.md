## Next Clarifon ![check-code-coverage](https://img.shields.io/badge/code--coverage-97.57%25-brightgreen)

[Next Clarifion](https://master.d2vxf6v0zess6r.amplifyapp.com/) project is a "credit card payment checkout", where we obtain customer payment data to make the transaction of specific product and show
the result of the process.

The application validates if the credit card number is valid. To make the process easier, you can copy and paste any of these card numbers.

| Credit Card Type | Credit Card Number | Year (Range between Current year and Current year + 5) | CVC/CVV    |
| ---------------- | ------------------ | ------------------------------------------------------ | ---------- |
| Diners Club      | 30569309025904     | 2024                                                   | Any number |
| MasterCard       | 5555555555554444   | 2025                                                   | Any number |
| Visa             | 4111111111111111   | 2026                                                   | Any number |
| American Express | 378282246310005    | 2027                                                   | Any number |

**Notes:**

-   This project uses Next JS - version 14.1.0, so make sure you are using Node.js 18.17 or later.
-   The app simulates a random call to the backend API (successful and failed), so sometimes a error message is displayed and sometimes a confirmation screen.

-   The app recover the progress made by the client in case of refresh.

-   In the final step you can start again using the "keep buying" button.

## Getting Started

1. Duplicate ".env.example" file and rename it as "".env"

2. Run the development server:

```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. Run tests

```bash
npm run test
```

## Live Demo

Open [https://master.d2vxf6v0zess6r.amplifyapp.com/](https://master.d2vxf6v0zess6r.amplifyapp.com/) with your browser to see a live preview.
