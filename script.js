//    # JS for pass generation
// jsPDF pass generation
function generatePass() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Event Pass", 20, 20);
  doc.setFontSize(12);
  doc.text("Name: John Doe", 20, 40); // You can make this dynamic later
  doc.text("Email: john@example.com", 20, 50);
  doc.text("Thank you for registering!", 20, 70);

  doc.save("EventPass.pdf");
}

