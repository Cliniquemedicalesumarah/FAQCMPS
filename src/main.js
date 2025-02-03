import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import FAQ from './views/FAQ.vue'
import Forms from './views/Forms.vue'
import Schedules from './views/Schedules.vue'
import Contacts from './views/Contacts.vue'
import Myle from './views/Myle.vue'
import CommunityOrganizations from './views/CommunityOrganizations.vue'
import ClinicalTools from './views/ClinicalTools.vue'
import Procedures from './views/procedures/Procedures.vue'
import DossiersMedicaux from './views/procedures/DossiersMedicaux.vue'
import Renouvellement from './views/procedures/Renouvellement.vue'
import RendezVous from './views/procedures/RendezVous.vue'
import Formulaires from './views/procedures/Formulaires.vue'
import Materiel from './views/procedures/Materiel.vue'
import Tempete from './views/procedures/Tempete.vue'
import Communication from './views/procedures/Communication.vue'
import ValeursCritiques from './views/procedures/ValeursCritiques.vue'
import ProblemesTechniques from './views/procedures/ProblemesTechniques.vue'
import GadgetsDetails from './views/procedures/GadgetsDetails.vue'
import Admin from './views/Admin.vue'
import Infirmieres from './views/Infirmieres.vue'
import NonCoveredServices from './views/NonCoveredServices.vue'
import Babillard from './views/Babillard.vue'
import FacturationMedecins from './views/FacturationMedecins.vue'

// Import des composants de rendez-vous
import InfirmiereClinDetails from './views/procedures/rendez-vous/InfirmiereClinDetails.vue'
import InfirmiereTechDetails from './views/procedures/rendez-vous/InfirmiereTechDetails.vue'
import SocialDetails from './views/procedures/rendez-vous/SocialDetails.vue'
import PedopsyDetails from './views/procedures/rendez-vous/PedopsyDetails.vue'
import KinesiologueDetails from './views/procedures/rendez-vous/KinesiologueDetails.vue'
import NexplanonDetails from './views/procedures/rendez-vous/NexplanonDetails.vue'
import UrgentDetails from './views/procedures/rendez-vous/UrgentDetails.vue'
import VisioconferenceDetails from './views/procedures/rendez-vous/VisioconferenceDetails.vue'
import IPSDetails from './views/procedures/rendez-vous/IPSDetails.vue'
import GAPDetails from './views/procedures/rendez-vous/GAPDetails.vue'
import AireOuverteDetails from './views/procedures/rendez-vous/AireOuverteDetails.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/faq', component: FAQ },
    { path: '/forms', component: Forms },
    { path: '/schedules', component: Schedules },
    { path: '/contacts', component: Contacts },
    { path: '/myle', component: Myle },
    { path: '/community-organizations', component: CommunityOrganizations },
    { path: '/clinical-tools', component: ClinicalTools },
    { path: '/procedures', component: Procedures },
    { path: '/procedures/dossiers-medicaux', component: DossiersMedicaux },
    { path: '/procedures/renouvellement', component: Renouvellement },
    { path: '/procedures/rendez-vous', component: RendezVous },
    { path: '/procedures/formulaires', component: Formulaires },
    { path: '/procedures/materiel', component: Materiel },
    { path: '/procedures/tempete', component: Tempete },
    { path: '/procedures/communication', component: Communication },
    { path: '/procedures/valeurs-critiques', component: ValeursCritiques },
    { path: '/procedures/problemes-techniques', component: ProblemesTechniques },
    { path: '/gadgets', component: GadgetsDetails },
    { path: '/admin', component: Admin },
    { path: '/infirmieres', component: Infirmieres },
    { path: '/non-covered-services', component: NonCoveredServices },
    { path: '/babillard', component: Babillard },
    { path: '/facturation-medecins', component: FacturationMedecins },
    
    // Routes pour les rendez-vous
    { path: '/procedures/rendez-vous/infirmiere-clinicienne', component: InfirmiereClinDetails },
    { path: '/procedures/rendez-vous/infirmiere-technicienne', component: InfirmiereTechDetails },
    { path: '/procedures/rendez-vous/social', component: SocialDetails },
    { path: '/procedures/rendez-vous/pedopsy', component: PedopsyDetails },
    { path: '/procedures/rendez-vous/kinesiologue', component: KinesiologueDetails },
    { path: '/procedures/rendez-vous/nexplanon', component: NexplanonDetails },
    { path: '/procedures/rendez-vous/urgent', component: UrgentDetails },
    { path: '/procedures/rendez-vous/visioconference', component: VisioconferenceDetails },
    { path: '/procedures/rendez-vous/ips', component: IPSDetails },
    { path: '/procedures/rendez-vous/gap', component: GAPDetails },
    { path: '/procedures/rendez-vous/aire-ouverte', component: AireOuverteDetails }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')