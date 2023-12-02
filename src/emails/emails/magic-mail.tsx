import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface MagicMailProps {
  username?: string;
}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

export const MagicMail = ({ username = "Flavien Bonvin" }: MagicMailProps) => {
  const previewText = `Kubus vous souhaite la bienvenue`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section>
              <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
                Welcome to Kubus
              </Heading>
              <Text className="text-[14px] leading-[24px] text-black">Hello {username},</Text>
            </Section>
            <Section className="mt-[32px]">
              <Img width="600" height="600" className="object-contain" src={`${baseUrl}/images`} />
            </Section>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">Footer</Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MagicMail;
