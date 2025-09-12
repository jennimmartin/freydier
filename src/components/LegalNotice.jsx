const CONFIG = {
  companyName: "Freydier Carrelage",
  legalForm: "Auto-entrepreneur / SARL / SAS", // choose one
  siret: "410750533 000 37", // delete if not applicable
  vat: "TBC", // delete if not applicable
  rcs: "Chambéry", // delete if not applicable
  address: "CHEF Lieu RES la Basse RES la Basse 73600 HAUTECOUR", // add company address
  contactEmail: "entfreydiercarrelage@orange.fr", // official email
  contactPhone: "06 82 68 73 88", // optional
  director: "Lionel Freydier",
  host: {
    name: "Netlify",
    location: "San Francisco, USA",
  },
  analytics:
    "Simple Analytics (privacy-friendly, no cookies, no personal data stored)",
  lastUpdated: "September 2025",
};

export default function LegalNotice() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-10">
      {/* French Version */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Mentions Légales</h2>
        <p>
          <strong>Raison sociale :</strong> {CONFIG.companyName}
        </p>
        <p>
          <strong>Forme juridique :</strong> {CONFIG.legalForm}
        </p>
        {CONFIG.siret && (
          <p>
            <strong>SIRET :</strong> {CONFIG.siret}
          </p>
        )}
        {CONFIG.vat && (
          <p>
            <strong>Numéro de TVA :</strong> {CONFIG.vat}
          </p>
        )}
        {CONFIG.rcs && (
          <p>
            <strong>RCS :</strong> {CONFIG.rcs}
          </p>
        )}
        <p>
          <strong>Adresse :</strong> {CONFIG.address}
        </p>
        <p>
          <strong>Email :</strong> {CONFIG.contactEmail}
        </p>
        {CONFIG.contactPhone && (
          <p>
            <strong>Téléphone :</strong> {CONFIG.contactPhone}
          </p>
        )}
        <p>
          <strong>Directeur de la publication :</strong> {CONFIG.director}
        </p>
        <p>
          <strong>Hébergeur :</strong> {CONFIG.host.name},{" "}
          {CONFIG.host.location}
        </p>

        <h3 className="text-lg font-semibold mt-4">Objet</h3>
        <p>
          Ce site a pour but de fournir des informations sur les services de{" "}
          {CONFIG.companyName}. Aucune transaction commerciale n’est effectuée
          via ce site.
        </p>

        <h3 className="text-lg font-semibold mt-4">Statistiques</h3>
        <p>
          Ce site utilise {CONFIG.analytics}. Aucun cookie n’est déposé et
          aucune donnée personnelle n’est collectée.
        </p>

        <h3 className="text-lg font-semibold mt-4">Données personnelles</h3>
        <p>
          La prise de contact se fait directement par email via votre propre
          messagerie. Par conséquent, aucune donnée personnelle n’est stockée
          par ce site. Les informations que vous envoyez par email sont
          utilisées uniquement pour répondre à votre demande, conformément au
          RGPD.
        </p>

        <h3 className="text-lg font-semibold mt-4">Propriété intellectuelle</h3>
        <p>
          L’ensemble du contenu de ce site (textes, images, logo) est la
          propriété de {CONFIG.companyName}, sauf mention contraire. Toute
          reproduction ou diffusion sans autorisation préalable est interdite.
        </p>
        <h3 className="text-lg font-semibold mt-4">Contenu tiers</h3>
        <p>
          Les logos, marques et autres éléments visuels tiers présentés sur ce
          site restent la propriété de leurs détenteurs respectifs. Leur
          utilisation sur ce site est à titre informatif ou illustratif
          uniquement et n’implique aucune affiliation, approbation ou
          partenariat officiel.
        </p>

        <h3 className="text-lg font-semibold mt-4">Responsabilité</h3>
        <p>
          Les informations fournies sur ce site le sont à titre indicatif.
          Malgré le soin apporté à leur exactitude, {CONFIG.companyName} ne
          saurait être tenu responsable des erreurs, omissions ou de l’usage qui
          en est fait.
        </p>

        <p className="text-sm mt-6 text-gray-500">
          Dernière mise à jour : {CONFIG.lastUpdated}
        </p>
      </section>
    </div>
  );
}
