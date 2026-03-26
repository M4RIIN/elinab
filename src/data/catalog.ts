import rawFormations from './formations.json';
import rawPrestations from './prestations.json';
import { siteConfig } from './site';

const formationCategoryContent = {
  'Beauté du regard': {
    summary:
      'Formation pratique pour maitriser un protocole rentable, precis et conforme aux attentes des clientes.',
    audience: ['Debutantes', 'Professionnelles', 'Personnes en reconversion'],
    format: 'Presentiel',
    level: 'Tous niveaux',
    program: ['Diagnostic et contre-indications', 'Demonstration complete', 'Pratique encadree sur modele', 'Conseils de vente et fidelisation'],
  },
  Corps: {
    summary:
      'Parcours centre sur la gestuelle, le confort client et la construction d une prestation premium.',
    audience: ['Professionnelles du bien-etre', 'Estheticiennes', 'Personnes en reconversion'],
    format: 'Presentiel',
    level: 'Initiation ou perfectionnement',
    program: ['Anatomie et indications', 'Protocole de soin detaille', 'Posture et pression adaptees', 'Pratique sur modele'],
  },
  'Maquillage semi permanent': {
    summary:
      'Formation technique orientee precision, hygiene et rendu naturel pour developper une prestation durable.',
    audience: ['Professionnelles de la beaute', 'Techniciennes experimentees', 'Personnes en reconversion motivees'],
    format: 'Presentiel',
    level: 'Technique professionnelle',
    program: ['Hygiene et tracabilite', 'Morphologie et dessin preparatoire', 'Materiel et pigments', 'Pratique encadree'],
  },
  'Soin du visage': {
    summary:
      'Formation esthetique axee resultats, experience client et protocoles adaptables en cabine.',
    audience: ['Estheticiennes', 'Independantes', 'Personnes en reconversion'],
    format: 'Presentiel',
    level: 'Tous niveaux',
    program: ['Bilan de peau', 'Protocoles et actifs', 'Pratique cabine', 'Conseils de cure et vente complementaire'],
  },
} as const;

const prestationCategoryContent = {
  'Beauté du regard':
    'Prestation personnalisee pour structurer le regard, respecter la ligne naturelle et assurer une tenue harmonieuse.',
  'Soins du visage':
    'Soin cible selon les besoins de peau avec diagnostic, protocole adapte et conseils d entretien a domicile.',
  'Maquillage semi-permanent':
    'Technique precise pour intensifier les traits tout en conservant un rendu elegant, net et naturel.',
  'Soins corps':
    'Rituel manuel sur-mesure pour favoriser le confort, l effet drainant et une sensation de legerete immediate.',
} as const;

const formationOverrides: Record<string, Partial<(typeof rawFormations)[number] & { description: string }>> = {
  browlift: { description: 'Apprenez a discipliner, rehausser et fixer les sourcils avec un rendu souple et lumineux.' },
  'rehaussement-cils': { description: 'Maitrisez un protocole complet pour courber les cils naturels et ouvrir le regard.' },
  'lash-lift-coreen': { description: 'Decouvrez une approche precise du lash lift coreen pour un effet net, gaine et elegant.' },
  'restructuration-sourcils': { description: 'Travaillez la ligne de sourcils avec analyse morphologique, epilation et mise en valeur.' },
  'epilation-fil': { description: 'Initiez-vous a l epilation au fil pour des finitions nettes et une prestation differenciante.' },
  'drainage-bresilien': { description: 'Integrez un protocole drainant dynamique tres demande pour la silhouette et le confort.' },
  maderotherapie: { description: 'Apprenez une methode manuelle avec accessoires bois pour remodeler et dynamiser les tissus.' },
  'massage-relaxant': { description: 'Construisez un massage enveloppant et coherent pour proposer une experience bien-etre premium.' },
  'massage-dos': { description: 'Developpez un protocole cible pour liberer les tensions et enrichir votre carte de soins.' },
  'massage-cranien': { description: 'Proposez un massage court et efficace axe sur la detente profonde et le lacher-prise.' },
  'dermo-sourcils': { description: 'Formation initiation pour creer des sourcils structures avec hygiene, dessin et protocole complet.' },
  'dermo-levres': { description: 'Travaillez la dermopigmentation des levres pour embellir la couleur et redefinir le contour.' },
  'perfectionnement-dermo': { description: 'Perfectionnez votre geste, vos tracés et votre organisation de poste sur cas reels.' },
  micropigmentation: { description: 'Approfondissez les fondamentaux de la micropigmentation pour proposer une technique durable et precise.' },
  nanoneedling: { description: 'Integrez une technique douce de stimulation cutanee pour sublimer l eclat et la qualite de peau.' },
  hydrafacial: { description: 'Apprenez un protocole cabine complet pour nettoyer, hydrater et booster l eclat du visage.' },
};

const prestationOverrides: Record<string, { description: string }> = {
  'browlift-teinture-soin': { description: 'Browlift complet avec teinture et soin pour discipliner les sourcils et intensifier le regard.' },
  'browlift-soin-keratine': { description: 'Browlift avec soin keratine pour un rendu souple, nourri et structure sans surcharge.' },
  'rehaussement-teinture-soin': { description: 'Rehaussement de cils complet avec teinture et soin pour un effet maquille naturel.' },
  'rehaussement-soin': { description: 'Rehaussement de cils et soin fortifiant pour ouvrir le regard sans extension.' },
  'lash-lift-coreen-teinture': { description: 'Lash lift coreen avec teinture pour une courbure nette et un rendu sophistique.' },
  'restructuration-teinture': { description: 'Restructuration avec teinture pour redefinir la ligne et renforcer la densite visuelle.' },
  'restructuration-sourcils': { description: 'Restructuration simple pour equilibrer la ligne de sourcils selon votre morphologie.' },
  'epilation-levre-superieure-fil': { description: 'Epilation precise de la levre superieure au fil, douce et nette.' },
  'epilation-sourcils-levres-menton-fil': { description: 'Epilation au fil de plusieurs zones pour une finition propre et durable.' },
  'soin-hydraskin': { description: 'Soin visage hydratant et eclat pour repulper, lisser et reequilibrer la peau.' },
  'soin-hydraskin-ado': { description: 'Version adaptee aux peaux jeunes pour nettoyer, apaiser et reequilibrer.' },
  'nanoneedling-visage': { description: 'Soin stimulant doux pour lisser le grain de peau et relancer l eclat du teint.' },
  'soin-gua-sha-detox': { description: 'Rituel visage drainant au Gua Sha pour detendre les traits et raviver l eclat.' },
  'massage-facial-japonais': { description: 'Massage anti-age facial japonais tonique et relaxant pour lisser les tensions.' },
  'powder-brow': { description: 'Sourcils poudres semi-permanents pour un effet maquille elegant et naturel.' },
  '3d-lips': { description: 'Pigmentation des levres pour raviver la teinte et sublimer le contour.' },
  'aquarel-lips': { description: 'Effet levres mordues tres naturel pour apporter fraicheur et definition.' },
  'ras-de-cils-superieur': { description: 'Pigmentation subtile du ras de cils pour densifier le regard sans trait marque.' },
  'retouche-fixatrice-6-8-semaines-premiere': { description: 'Retouche de stabilisation pour optimiser la tenue apres la premiere seance.' },
  'retouche-annuelle': { description: 'Retouche annuelle pour raviver la couleur et conserver un rendu net.' },
  'shading-micropigmentation': { description: 'Technique manuelle de shading pour un rendu souple et elegant.' },
  'retouche-fixatrice-6-8-semaines': { description: 'Retouche fixatrice pour consolider le resultat et harmoniser la pigmentation.' },
  'drainage-bresilien': { description: 'Massage drainant signature pour favoriser legerete, detente et sensation de decongestion.' },
  'drainage-bresilien-remodelant': { description: 'Version plus complete alliant drainage et effet remodelant sur la silhouette.' },
  'massage-relaxant-sur-mesure': { description: 'Massage adapte a vos tensions et a votre niveau de fatigue pour un vrai temps de pause.' },
};

export const formations = rawFormations.map((formation) => {
  const categoryContent = formationCategoryContent[formation.category as keyof typeof formationCategoryContent];
  const override = formationOverrides[formation.id] || {};

  return {
    ...formation,
    ...override,
    description: override.description || categoryContent.summary,
    audience: categoryContent.audience,
    format: categoryContent.format,
    level: categoryContent.level,
    location: `${siteConfig.city} et alentours`,
    program: categoryContent.program,
    path: `/formations#${formation.id}`,
  };
});

export const prestations = rawPrestations.map((prestation) => {
  const override = prestationOverrides[prestation.id];
  const description =
    override?.description ||
    prestationCategoryContent[prestation.category as keyof typeof prestationCategoryContent];

  return {
    ...prestation,
    description,
    zone: `${siteConfig.city}, Toulouse et alentours`,
    ctaLabel: 'Demander un rendez-vous',
    path: `/prestations#${prestation.id}`,
  };
});
