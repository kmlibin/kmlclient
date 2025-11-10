import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ConfirmTemplateProps {
  customerEmail: string;
  customerName: string;
  customerMessage: string;
  hasDomain: string;
  domainProvider: string;
  hostingPreference: string;
  otherHostingPlatform: string;
}

export const ConfirmTemplate = ({
  customerName,
  customerEmail,
  customerMessage,
  hasDomain,
  domainProvider,
  hostingPreference,
  otherHostingPlatform,
}: ConfirmTemplateProps) => {
  const previewText = `We’ve received your message — thank you for reaching out!`;
  //for images to work, need to switch to  a domain - so putnitz.com/customerconfirmation.png
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section style={{ textAlign: "center", marginBottom: "20px" }}>
            <Img
              src="https://libinwebdevelopment.com/images/libinlogowhite.jpg"
              width="150"
              height="auto"
              alt="Company Logo"
              style={logo}
            />
          </Section>

          <Section style={{ textAlign: "center" }}>
            <Img
              src="https://libinwebdevelopment.com/images/success.jpg"
              width="300"
              height="300"
              alt="Thank You Illustration by Undraw"
              style={heroImage}
            />
          </Section>

          <Section style={{ padding: "20px 0" }}>
            <Text style={heading}>Hi {customerName},</Text>
            <Text style={paragraph}>
              Thanks for getting in touch with{" "}
              <strong>Libin Web Development</strong>! We’ve received your
              message and our team will get back to you soon.
            </Text>
            <Text style={paragraph}>
              In the meantime, if you have any urgent questions, feel free to
              reply directly to this email or contact us at{" "}
              <a href="kelli@libinwebdevelopment.com" style={link}>
                kelli@libinwebdevelopment.com
              </a>
              .
            </Text>
          </Section>

          {/* receipt section */}
          <Section style={receiptSection}>
            <Text style={receiptHeading}>Here’s a copy of your message:</Text>
            <Text style={receiptItem}>
              <strong>Email you provided:</strong>
              <br />
              {customerEmail}
            </Text>
            <Text style={receiptItem}>
              <strong>Do you have a domain?:</strong>
              <br />
              {hasDomain}
            </Text>
            <Text style={receiptItem}>
              <strong>Domain Provider:</strong>
              <br />
              {domainProvider}
            </Text>
            <Text style={receiptItem}>
              <strong>Hosting Preference:</strong>
              <br />
              {hostingPreference}
            </Text>
            <Text style={receiptItem}>
              <strong>If hosting preference, where do you host?:</strong>
              <br />
              {otherHostingPlatform}
            </Text>
            <Text style={receiptItem}>
              <strong>Message you wrote:</strong>
              <br />
              {customerMessage}
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} Putnitz Consulting • All rights
              reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ConfirmTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const logo = {
  margin: "0 auto",
  display: "block",
};

const heroImage = {
  margin: "0 auto",
  borderRadius: "8px",
};

const heading = {
  fontSize: "24px",
  lineHeight: "1.4",
  fontWeight: "700",
  color: "#333",
  textAlign: "left" as const,
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#555",
  marginBottom: "16px",
  textAlign: "left" as const,
};

const link = {
  color: "#e67e22",
  textDecoration: "none",
};

const receiptSection = {
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "16px 20px",
  marginTop: "20px",
};

const receiptHeading = {
  fontSize: "18px",
  fontWeight: "600",
  marginBottom: "12px",
  color: "#111827",
};

const receiptItem = {
  fontSize: "15px",
  lineHeight: "1.6",
  color: "#374151",
  marginBottom: "10px",
};

const footer = {
  borderTop: "1px solid #eee",
  marginTop: "40px",
  paddingTop: "20px",
  textAlign: "center" as const,
};

const footerText = {
  fontSize: "13px",
  color: "#999",
  lineHeight: "1.4",
};
