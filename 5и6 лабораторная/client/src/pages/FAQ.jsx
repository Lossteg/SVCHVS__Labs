import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Background from "../components/shared/Background";
import {
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const faqData = [
    {
      question: "What printing services do you offer?",
      answer:
        "We offer a wide range of printing services, including business cards, banners, brochures, flyers, and more. Feel free to explore our website for a complete list of services.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can place an order by visiting our online store and selecting the desired products. Follow the easy checkout process to complete your order. For custom orders or inquiries, you can contact our customer support team.",
    },
    {
      question: "What file formats do you accept for printing?",
      answer:
        "We accept a variety of file formats, including PDF, JPEG, PNG, and more. Make sure your files meet our printing requirements for the best results. Check our guidelines or contact our support team for assistance.",
    },
    {
      question: "Can I get a quote for my printing project?",
      answer:
        'Yes, you can request a quote for your printing project. Navigate to our "Get a Quote" page and provide the necessary details. Our team will get back to you with a personalized quote.',
    },
  ];

  return (
    <>
      <Background />
      <Header />
      <div className="main">
          <Container
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
            maxWidth="md"
          >
            <Typography variant="h4" color="black" gutterBottom>
              Frequently Asked Questions
            </Typography>
            {faqData.map((faq, index) => (
              <Accordion key={index}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index + 1}a-content`}
                  id={`panel${index + 1}a-header`}
                >
                  <Typography variant="h6">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Container>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
