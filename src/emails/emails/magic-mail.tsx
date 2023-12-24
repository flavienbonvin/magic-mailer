import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { getSocialImageURL } from "../../lib/image";

interface MagicMailProps {
  attendeeName?: string;
  image1?: string;
  image2?: string;
}

export const MagicMail = ({ attendeeName, image1, image2 }: MagicMailProps) => {
  const previewText = `Kubus vous réserve encore des surprises!`;

  const socialImages = getSocialImageURL();

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 w-[465px] rounded border border-solid border-gray-200 p-5">
            <Section>
              <Heading className="mx-0 my-8 p-0 text-center text-2xl font-normal text-black">
                Merci d&apos;avoir participé à l&apos;extraordinaire Expérience!
              </Heading>
              <Text className="text-sm leading-6 text-black">
                {attendeeName ? `Bonsoir ${attendeeName},` : "Bonsoir,"}
              </Text>
              <Text className="text-sm leading-6 text-black">
                Nous tenons à vous exprimer notre profonde gratitude d&apos;avoir choisi de partager
                ce moment magique avec nous ce soir.
              </Text>
            </Section>
            <Section className="mt-8">
              <Img width="600" height="600" className="object-contain" src={image1} />
            </Section>
            <Section className="my-8">
              <Text className="text-sm leading-6 text-black">
                Comme les mystères se dévoilent et que les écrans s&apos;animent, vous serez
                émerveillés par les prédictions incroyables de Marco. Chaque instant capturé est
                bien plus qu&apos;une simple coïncidence. C&apos;est l&apos;essence même de la
                magie, tissée dans chaque prédiction.
              </Text>
            </Section>
            <Section>
              <Img width="600" height="600" className="object-contain" src={image2} />
            </Section>
            <Hr className="mx-0 my-7 w-full border border-solid border-gray-200" />
            <Text className="text-center text-xs leading-6 text-gray-400">
              Restez connectés avec l&apos;univers fascinant de Marco en explorant davantage sur son
              site web et en le suivant sur les réseaux sociaux :
            </Text>
            <Row className="text-center text-gray-400">
              <Column>
                <a href="https://www.redcurtain.ch/" target="_blank" rel="noopener noreferrer">
                  <Img width="24" height="24" src={socialImages.globe} className="m-auto" />
                </a>
              </Column>
              <Column>
                <a
                  href="https://www.facebook.com/marco.smacchia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img width="24" height="24" src={socialImages.facebook} className="m-auto" />
                </a>
              </Column>
              <Column>
                <a
                  href="https://www.instagram.com/redcurtainmagic/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img width="24" height="24" src={socialImages.instagram} className="m-auto" />
                </a>
              </Column>
            </Row>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MagicMail;
