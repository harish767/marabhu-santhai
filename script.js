// Function to open Google Pay with the respective amount and GPay number
function makePayment(amount) {
    const gpayNumber = "9442875424";  // Your Google Pay number

    // Create a deep link to trigger Google Pay payment
    const paymentLink = `https://pay.google.com/gp/p/ui/pay?intent=PAY&action=pay&receiver_number=${gpayNumber}&amount=${amount}`;

    // Open the payment link in a new tab (or directly, depending on the platform)
    window.open(paymentLink, "_blank");
}
