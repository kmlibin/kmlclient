import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

interface EmailProps {
  customerEmail: string;
  customerName: string;
  customerMessage: string;
  hasDomain: string;
  domainProvider: string;
  hostingPreference: string;
  otherHostingPlatform: string;
}

export const SendTemplate = ({
  customerEmail,
  customerName,
  customerMessage,
  hasDomain,
  domainProvider,
  hostingPreference,
  otherHostingPlatform,
}: EmailProps) => {
  const previewText = `Read ${customerName}'s message`;

  return (
    <Html>
      <Head />

      <Body style={main}>
        <Preview>{previewText}</Preview>
        <Container style={container}>
          <Section></Section>
          <Section></Section>
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={review}>
                <span style={question}>Customer's Name:</span>{" "}
                <span style={answer}>{customerName}</span>
              </Text>
              <Text style={review}>
                <span style={question}>Customer's Email:</span>{" "}
                <span style={answer}>{customerEmail}</span>
              </Text>
              <Text style={review}>
                <span style={question}>Does customer have domain?</span>{" "}
                <span style={answer}>{hasDomain}</span>
              </Text>
              <Text style={review}>
                <span style={question}>Domain provider:</span>{" "}
                <span style={answer}>{domainProvider}</span>
              </Text>
              <Text style={review}>
                <span style={question}>Hosting preference:</span>{" "}
                <span style={answer}>{hostingPreference}</span>
              </Text>
              <Text style={review}>
                <span style={question}>Hosting platform:</span>{" "}
                <span style={answer}>{otherHostingPlatform}</span>
              </Text>

              <Text style={heading}>Here's what {customerName} wrote</Text>
              <Text style={review}>{customerMessage}</Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default SendTemplate;

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

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const question = {
  fontWeight: "700",
  fontSize: "20px",
  color: "#333333",
  display: "inline-block",
  marginRight: "6px",
};

const answer = {
  fontWeight: "400",
  fontSize: "18px",
  color: "#484848",
};

const review = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
  padding: "16px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
  marginBottom: "12px",
};
