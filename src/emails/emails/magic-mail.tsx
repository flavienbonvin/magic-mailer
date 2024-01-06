import {
  Body,
  Column,
  Container,
  Head,
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
  const previewText = "L'expérience se prolonge!";

  const socialImages = getSocialImageURL();

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 w-[465px] rounded border border-solid border-gray-200 p-5">
            <Section>
              <Text className="text-sm leading-6 text-black">
                {attendeeName ? `Cher ${attendeeName},` : "Cher spectateur,"}
              </Text>
              <Text className="text-sm leading-6 text-black">
                Vous avez été un public incroyable, pour vous remercier je tenais à ce que vous
                emportiez un souvenir magique.
              </Text>
            </Section>

            <Section>
              <Text className="text-sm leading-6 text-black">
                Vous avez reçu cet email avant le début du spectacle. Tout était aléatoire et
                pourtant Kubus avait tout prédit.
              </Text>
            </Section>

            {/* Image 1 */}
            <Section>
              <Text className="text-sm leading-6 text-black">
                Voici la photo de la prédiction dans le coffre :
              </Text>

              <Img width="600" height="600" className="object-contain" src={image1} />
            </Section>

            {/* Image 2 */}
            <Section className="mt-4">
              <Text className="text-sm leading-6 text-black">
                Et pour finir, zoomer dans les yeux de la célébrité, un regard ne ment jamais :
              </Text>
              <Img width="600" height="600" className="object-contain" src={image2} />
            </Section>

            <Section>
              <Text className="text-sm leading-6 text-black">
                Votre magicien,
                <br /> Marco
              </Text>
            </Section>

            <Hr />

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
