import DevEmail from "@/components/atoms/dev-email";
import DevPhone from "@/components/atoms/dev-phone";
import Image from "next/image";

export default function Page() {
  return (
    <div className="container prose prose-stone dark:prose-invert">
      <p>
        Ce site vous permet l&apos;envoi des emails contenant les prédictions faites lors de la
        représenation.
      </p>
      <p>Pour ce faire, le processus suit les trois étapes suivantes:</p>
      <ol>
        <li>Préparation de la repésenation.</li>
        <li>Envoi des emails au début de la représenation.</li>
        <li>Sauvegarde en ligne de l&apos;image une fois les prédictions, faites.</li>
      </ol>
      <h2>Préparation des représentations</h2>
      <p>
        Plusieurs représentations sont prévues, pour cette raison, il est possible de préparer ces
        dernières en avance. Une fois les représentations créées, il est possible de sauver les
        informations relatives aux spectateurs. Ces informations sont sauvegardées en ligne et il
        est possible de les modifier à tout moment.
      </p>
      <Image src="/images/create-show.png" alt="Création représentation" width={600} height={500} />
      <h2>Envoi des emails</h2>
      <p>Une fois la représenation commencé, les emails peuvent être envoyés aux spectateurs.</p>
      <strong>
        Attention, cette opération ne peut être faite qu&apos;une seule fois, veuillez vous assurer
        que toutes les données soient correctes.
      </strong>
      <h2>Envoi de l&apos;image</h2>
      <p>
        Durant la représenation, le magicien va faire des prédictions, ces dernières doivent se
        retrouver sur une image. Une fois l&apos;image obtenue, il est possible de la sauvegarder en
        ligne afin que les spectateurs la voie dans l&apos;email une fois la représenation terminé.
      </p>
      <p>
        Cette étape peut être faite dès que l&apos;image finale est obtenue. Il n&apo;est pas
        nécessaire d&apos;attendre la fin de la représenation.
      </p>
      <strong>
        Attention, cette opération ne peut être faite qu&apos;une seule fois, l&apos;image ne peut
        pas être modifiée une fois envoyée.
      </strong>
      <h2>Accès au site</h2>
      <p>
        L&apos;accès au site est limité à certaines adresses emails. Les adresses emails doivent
        être ajoutés par le développeur. Si vous désirez ajouter une adresse, vous pouvez le faire
        en envoyant un mail à cette adresse: <DevEmail />
      </p>
      <h2>Problème lors de l&apos;utilisation du site</h2>
      <p>
        N&apos;hésitez pas à contacter le développeur du site si vous rencontrez un quelconque
        problème.
      </p>
      <p>
        Pour ce faire, vous pouvez soit envoyer un email à cette adresse: <DevEmail /> ou alors par
        téléphone au <DevPhone />.
      </p>
    </div>
  );
}
