<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h1 class="text-2xl font-bold text-gray-900">Menu téléphonique</h1>
      <p class="mt-1 text-sm text-gray-500">
        Bienvenue sur le portail interne de la Clinique médicale Place Sumarah
      </p>
    </div>
    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:p-6">
        <div class="prose prose-sm text-gray-600 max-w-none">
          <p>Ce site est conçu pour faciliter l'accès aux informations essentielles concernant la clinique, les prises de rendez-vous et les services offerts.</p>

          <h2>🔹 Prise de rendez-vous</h2>
          <p>Veuillez sélectionner l'option correspondant à votre besoin :</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="font-medium">1️⃣ Médecin de famille</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="font-medium">2️⃣ Médecin spécialiste</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="font-medium">3️⃣ Rendez-vous urgent</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="font-medium">4️⃣ Consultation avec un professionnel de la santé</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="font-medium">5️⃣ Clinique Santé mentale jeunesse (vendredi seulement)</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="font-medium">6️⃣ Professionnels de la santé – Accès direct</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="font-medium">7️⃣ Annulation de rendez-vous</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="font-medium">8️⃣ Patients inscrits via le GAP</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="font-medium">9️⃣ Services privés non couverts par la RAMQ</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="font-medium">🔟 Patients sans médecin de famille</p>
            </div>
          </div>

          <h2>📌 Détails des services et contacts</h2>

          <div class="space-y-8">
            <section>
              <h3>📍 Médecins de famille (Option 1)</h3>
              <ul class="list-disc pl-5">
                <li>Dre Ychelle Fortier (Poste 1)</li>
                <li>Dre Rosalie Moreau (Poste 2)</li>
                <li>Dr Steve Lessard (Poste 3)</li>
                <li>Dre Audrey Moreau (Poste 4)</li>
                <li>Dre Joanie Hubert (Poste 5)</li>
                <li>Dre Amélie Hubert (Poste 6)</li>
                <li>Dre Clotilde Trudeau (Poste 7)</li>
                <li>Dre Jade Longuépée (Poste 8)</li>
                <li>Dre Christina Gravel (Poste 9)</li>
                <li>Vous n'avez pas de médecin de famille ? (Poste 10)</li>
              </ul>
            </section>

            <section>
              <h3>📍 Médecins spécialistes (Option 2)</h3>
              <p>Dr Luc Dansereau</p>
              <ul class="list-disc pl-5">
                <li>Rhumatologie (Poste 1)</li>
                <li>Cardiologie ou autres problèmes de santé (Poste 2)</li>
              </ul>
            </section>

            <section>
              <h3>📍 Rendez-vous urgents (Option 3)</h3>
              <p>Aucun sous-menu.</p>
            </section>

            <section>
              <h3>📍 Professionnels de la santé (Option 4)</h3>
              <ul class="list-disc pl-5">
                <li>Édith Turbide – Physiothérapeute (Poste 1)</li>
                <li>Dave Garneau – Travailleur social (Poste 2)</li>
                <li>Véronique Dufour – Kinésiologue (Poste 3)</li>
                <li>Anne-Marie Poirier – Infirmière clinicienne (Poste 4)</li>
                <li>Dorine Chevarie – Infirmière technicienne (Poste 5)</li>
                <li>Véronique Laporte – Pharmacienne (Poste 6)</li>
              </ul>
            </section>

            <section>
              <h3>📍 Clinique Santé mentale jeunesse (Option 5)</h3>
              <p>Consultations disponibles le vendredi uniquement.</p>
            </section>

            <section>
              <h3>📍 Ligne directe pour les professionnels de la santé (Option 6)</h3>
              <p>Accès immédiat sans sous-menu.</p>
            </section>

            <section>
              <h3>📍 Annulation d'un rendez-vous (Option 7)</h3>
              <p>Accès immédiat sans sous-menu.</p>
            </section>

            <section>
              <h3>📍 Patients inscrits via le GAP (Option 8)</h3>
              <p>Si vous avez reçu une lettre confirmant votre suivi à la clinique, veuillez appeler le 811, poste 3, pour prendre un rendez-vous avec un médecin. Nous ne prenons pas de rendez-vous directement à la clinique.</p>
            </section>

            <section>
              <h3>📍 Services privés non couverts par la RAMQ (Option 9)</h3>
              <ul class="list-disc pl-5">
                <li>Mélanie Cormier – Psychologue (Poste 1)</li>
                <li>Orthophonie de la Capitale (Poste 2)</li>
                <li>Emsculpt (Poste 3)</li>
                <li>Podiatrie (Poste 4)</li>
              </ul>
            </section>

            <section>
              <h3>📍 Patients sans médecin de famille (Option 10)</h3>
              <p>Nous ne prenons pas de nouveaux patients directement à la clinique et n'avons pas de liste d'attente.</p>
              <p>Les nouveaux patients sont sélectionnés par le Guichet d'accès à un médecin de famille (GAMF) en fonction des priorités établies. Pour vous inscrire, visitez le site de la RAMQ.</p>
            </section>

            <section>
              <h3>📌 Accès aux professionnels sur l'application interne</h3>
              <p>Les professionnels suivants ont accès à l'application dédiée aux professionnels de la clinique :</p>
              <ul class="list-disc pl-5">
                <li>Dre Joanie Hubert</li>
                <li>Dre Ychelle Fortier</li>
                <li>Anne-Marie Poirier – Infirmière clinicienne</li>
                <li>Vanessa Harvie – Infirmière clinicienne</li>
                <li>Véronique Laporte – Pharmacienne</li>
                <li>Annie Renaud – Infirmière clinicienne</li>
              </ul>
            </section>
          </div>

          <div class="mt-8 text-center">
            <p>📍 Clinique médicale Place Sumarah – Un service de santé de proximité pour votre bien-être.</p>
            <p>📞 Contactez-nous en cas de besoin.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>